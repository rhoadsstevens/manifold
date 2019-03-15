require "rails_helper"

RSpec.describe Ingestions::PostProcessors::SetStartSection do
  include TestHelpers::IngestionHelper

  shared_examples_for "the start section assignment" do |file_name, section_name|
    let(:path) { Rails.root.join("spec", "data", "ingestion", "manifest", file_name) }
    let(:ingestion) do
      ingestion = FactoryBot.create(:ingestion, text: nil)
      allow(ingestion).to receive(:ingestion_source).and_return(path)
      ingestion
    end
    let(:context) { create_context(ingestion) }
    let(:manifest) do
      manifest = Ingestions::Strategies::Manifest.run(context: context).result
      manifest = Ingestions::PreProcessor.run(context: context, manifest: manifest).result
      manifest
    end
    let!(:text) { Ingestions::Compiler.run(manifest: manifest, context: context).result }

    before(:each) { described_class.run(manifest: manifest, text: text, context: context) }

    it "determines the start_text_section_id" do
      expect(text.start_text_section).to_not be_nil
      expect(text.start_text_section.name).to eq section_name
    end
  end

  context "when source path has anchor" do
    include_examples "the start section assignment", "hashed_start_section.zip", "The Start Section"
  end

  context "when source path does not have anchor" do
    # Name is actually 'Title Set From TOC', but that is only referenced in TOC, 'Section 1#1' is the TextSection name
    include_examples "the start section assignment", "all_local", "Section 1#1"
  end

  context "when source path is child" do
    include_examples "the start section assignment", "child_start_section.zip", "The Start Section"
  end

end
