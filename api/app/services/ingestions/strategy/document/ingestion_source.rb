module Ingestions
  module Strategy
    module Document
      class IngestionSource

        def initialize(strategy, source)
          @context = strategy.context
          @inspector = strategy.inspector
          @ingestion_source = source
        end

        def attributes
          {
            source_identifier: source_identifier,
            source_path: source_path,
            kind: kind,
            attachment: @context.open(@ingestion_source)
          }
        end

        def source_identifier
          Digest::MD5.hexdigest @inspector.source_file_name
        end

        def source_path
          @context.rel(@context.abs(@ingestion_source), @context.source_root)
        end

        private

        # TODO: Should there be a stylesheet ingestion source kind?
        def kind
          return ::IngestionSource::KIND_SECTION if @ingestion_source == @inspector.source
          ::IngestionSource::KIND_PUBLICATION_RESOURCE
        end

      end
    end
  end
end