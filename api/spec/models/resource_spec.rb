require "rails_helper"

RSpec.describe Resource, type: :model do

  it "has a valid factory" do
    expect(FactoryBot.build(:resource)).to be_valid
  end

  it "belongs to a project" do
    resource = FactoryBot.create(:resource)
    expect(resource.project).to be_a Project
  end

  it "is invalid without a title" do
    resource = FactoryBot.build(:resource, title: "")
    expect(resource).to_not be_valid
  end

  it "updates the sort_title when saved" do
    resource = FactoryBot.create(:resource, title: "A Hobbit's Journey")
    resource.title = "The end of the world"
    resource.save
    expect(resource.sort_title).to eq "The end of the world"
  end

  it "has a list of tags" do
    resource = FactoryBot.create(:resource)
    resource.tag_list = "one, two; three"
    resource.save
    expect(resource.tag_list.count).to eq(3)
  end

  it "enqueues a RESOURCE_ADDED event on creation" do
    project = FactoryBot.create(:project)
    expect(CreateEventJob).to receive(:perform_later).with(EventType[:resource_added], any_args)
    FactoryBot.create(:resource, project: project)
  end

  context "when creating" do
    it "sets the fingerprint if none provided" do
      resource = FactoryBot.create(:resource)
      expect(resource.fingerprint).to_not be_nil
    end

    it "does not overwrite provided fingerprint" do
      resource = FactoryBot.create(:resource, fingerprint: "abc123")
      expect(resource.fingerprint).to eq "abc123"
    end
  end

  it "destroys associated annotations" do
    resource = FactoryBot.create(:resource)
    FactoryBot.create(:annotation, resource: resource)
    expect { resource.destroy }.to change { Annotation.count }.from(1).to(0)
  end

  it "destroys associated creation event" do
    resource = FactoryBot.create(:resource)
    FactoryBot.create(:event, subject: resource, event_type: "resource_added")
    expect { resource.destroy }.to change { Event.count }.from(1).to(0)
  end

  context "thumbnail fetch" do
    it "queues the job when created" do
      resource = FactoryBot.build(
        :resource,
        kind: "video",
        sub_kind: "external_video",
        external_id: "lVrAwK7FaOw",
        external_type: "youtube"
      )
      expect { resource.save }.to have_enqueued_job(FetchResourceThumbnail)
    end

    it "queues the job when video id is changed" do
      resource = FactoryBot.create(
        :resource,
        kind: "video",
        sub_kind: "external_video",
        external_id: "lVrAwK7FaOw",
        external_type: "youtube"
      )
      resource.external_id = "zXg5cQZJNzA"
      expect { resource.save }.to have_enqueued_job(FetchResourceThumbnail)
    end
  end


  describe "formats some fields with a markdown subset" do
    let(:raw) { "_italic_ a **bold**"}
    let(:formatted_without_blocks) { "<em>italic</em> a <strong>bold</strong>"}
    let(:formatted_with_block) { "<p><em>italic</em> a <strong>bold</strong></p>"}

    it "has a formatted title after save" do
      resource = FactoryBot.create(:resource, title: raw)
      expect(resource.title_formatted).to eq(formatted_without_blocks)
    end

    it "has a formatted caption after save" do
      resource = FactoryBot.create(:resource, caption: raw)
      expect(resource.caption_formatted).to eq(formatted_without_blocks)
    end

    it "has a formatted description after save" do
      resource = FactoryBot.create(:resource, description: raw)
      expect(resource.description_formatted).to eq(formatted_with_block)
    end
  end

  context "can be filtered" do

    before(:each) do
      @project_a = FactoryBot.create(:project, title: "project_a")
      @project_b = FactoryBot.create(:project, title: "project_b")
      @collection_a = FactoryBot.create(:collection, title: "collection_a", project: @project_a)
      @collection_b = FactoryBot.create(:collection, title: "collection_b", project: @project_a)
      @resource_a = FactoryBot.create(:resource, title: "resource_a", project: @project_a)
      @resource_b = FactoryBot.create(:resource, title: "resource_b", project: @project_a)
      @resource_c = FactoryBot.create(:resource, title: "resource_c", project: @project_b, tag_list: "test")
    end

    it "and ordered by collection order" do
      collection = FactoryBot.create(:collection, project: @project_a)
      collection.resources << @resource_a
      collection.resources << @resource_b
      collection.save
      results = Resource.filter({collection_order: collection.id})
      expect(results.first.id).to eq @resource_a.id
    end

    it "to only include those belonging to a project" do
      results = Resource.filter({project: @project_a})
      expect(results.length).to be 2
      results = Resource.filter({project: @project_b})
      expect(results.length).to be 1
    end

    it "to only include those belonging to a collection" do
      @resource_d = FactoryBot.create(:resource, title: "resource_d", project: @project_a)
      @collection_resource_a = FactoryBot.create(:collection_resource, collection: @collection_a, resource: @resource_a)
      @collection_resource_b = FactoryBot.create(:collection_resource, collection: @collection_a, resource: @resource_b)
      @collection_resource_c = FactoryBot.create(:collection_resource, collection: @collection_b, resource: @resource_d)
      results = Resource.filter({collection: @collection_a.id})
      expect(results.length).to be 2
      results = Resource.filter({collection: @collection_b.id})
      expect(results.length).to be 1
    end

    it "by kind" do
      # TBD: Expand this test. Right now all factory resources are links to avoid dealing
      # with attachments.
      results = Resource.filter({kind: "link"})
      expect(results.length).to be 3
    end

    it "by tag" do
      results = Resource.filter({tag: "dog"})
      expect(results.length).to be 2
      results = Resource.filter({tag: "test"})
      expect(results.length).to be 1
    end
  end

  describe "kind validations" do
    KINDS = %w(image audio video spreadsheet document file presentation).freeze

    KINDS.each do |kind|
      context "when resource is a #{kind} upload" do
        it "is invalid without an attachment" do
          resource = FactoryBot.build(:resource, kind: kind)
          expect(resource).to_not be_valid
        end
      end
    end

    context "when resource is an iframe" do
      it "is invalid without an external url" do
        resource = FactoryBot.build(:resource, kind: "interactive", external_url: nil)
        expect(resource).to_not be_valid
      end
    end

    context "when resource is an external video" do
      it "is invalid without an external id" do
        resource = FactoryBot.build(:resource, kind: "video", sub_kind: "external_video", external_type: "youtube")
        expect(resource).to_not be_valid
      end

      it "is invalid without an external type" do
        resource = FactoryBot.build(:resource, kind: "video", sub_kind: "external_video", external_id: "abcd1234")
        expect(resource).to_not be_valid
      end
    end

    context "when resource is a link" do
      it "is invalid without an external url" do
        resource = FactoryBot.build(:resource, kind: "link", external_url: nil)
        expect(resource).to_not be_valid
      end
    end
  end
end
