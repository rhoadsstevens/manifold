require "rails_helper"

RSpec.describe Ingestor::Strategy::Html::Strategy do

  let(:creator) { FactoryBot.create(:user) }

  before(:all) do
    logger = NullLogger.new
    Ingestor.logger = logger
  end

  after(:all) do
    Ingestor.reset_logger
  end

  shared_examples "output text assertions" do

    describe "the text generated by the ingestion" do

      it "has a language value that matches the dublin core language meta tag" do
        expect(@text.metadata["language"]).to eq "language"
      end

      it "has a title that matches the dublin core title meta tag" do
        expect(@text.title).to eq "title"
      end

      it "has a rights value that matches the dublin core rights meta tag" do
        expect(@text.metadata["rights"]).to eq "rights"
      end

      it "has a description value that matches the dublin core description meta tag" do
        expect(@text.description).to eq "description"
      end

      it "has one text section" do
        expect(@text.text_sections.length).to be 1
      end

      it "has an empty TOC" do
        expect(@text.toc).to eq []
      end

      it "has an empty landmarks property" do
        expect(@text.landmarks).to eq []
      end

      it "has an empty page list" do
        expect(@text.page_list).to eq []
      end

      it "has one entry in the spine" do
        expect(@text.spine.length).to eq 1
      end

      it "has one text_section" do
        expect(@text.text_sections.length).to eq 1
      end

    end

  end

  describe "a single page document" do
    context "when the source is a zip file", :integration do
      before(:all) {
        @creator = FactoryBot.create(:user)
        @html_source = Rails.root.join("spec", "data", "ingestion", "html", "minimal.zip" )
        @text = Ingestor.ingest(@html_source, @creator, Ingestor::Strategy::Html::Strategy)
      }
      include_examples "output text assertions"

      it "has two ingestion sources" do\
        expect(@text.ingestion_sources.length).to eq 2
      end

      it "has three stylesheets" do
        # The sample document has one external sheet, an inline block, and then all the
        # inline styles make up a third block.
        expect(@text.stylesheets.length).to eq 3
      end
    end

    context "when the source is a directory", :integration do
      before(:all) {
        @creator = FactoryBot.create(:user)
        @html_source = Rails.root.join("spec", "data", "ingestion", "html", "minimal" ).to_s
        @text = Ingestor.ingest(@html_source, @creator, Ingestor::Strategy::Html::Strategy)
      }
      include_examples "output text assertions"

      it "has two ingestion sources" do
        expect(@text.ingestion_sources.length).to eq 2
      end

      it "has three stylesheets" do
        # The sample document has one external sheet, an inline block, and then all the
        # inline styles make up a third block.
        expect(@text.stylesheets.length).to eq 3
      end
    end

    context "when the source is a single file", :integration do
      before(:all) {
        @creator = FactoryBot.create(:user)
        @html_source = Rails.root.join("spec", "data", "ingestion", "html", "minimal-single", "index.html" ).to_s
        @text = Ingestor.ingest(@html_source, @creator, Ingestor::Strategy::Html::Strategy)
      }
      include_examples "output text assertions"

      it "has one ingestion source" do
        expect(@text.ingestion_sources.length).to eq 1
      end

      it "has two stylesheets" do
        # The sample document has an inline block and all the
        # inline styles make up a second block.
        expect(@text.stylesheets.length).to eq 2
      end
    end
  end

end
