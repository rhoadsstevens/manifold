module Updaters
  # Updates a Project model from JSON-API style params
  class Project

    include ::Updaters
    include ::Updaters::Concerns::HasSortableCollaborators

    def attachment_fields
      [:avatar, :hero, :cover]
    end

    def adjusted_attributes
      return {} unless attributes

      clone = attributes.clone
      purchase_price!(clone)
      hashtag!(clone)
      clone
    end

    private

    def hashtag!(attributes)
      raw = attributes[:hashtag]
      return if raw.blank? || !raw.start_with?("#")

      raw[0] = ""
      attributes[:hashtag] = raw
    end

    def purchase_price!(attributes)
      raw = attributes.delete(:purchase_price_money)
      return if raw.nil?

      price_in_cents = raw.blank? ? 0 : (raw.gsub(/[^0-9.]/, "").to_d * 100).to_i
      attributes[:purchase_price_in_cents] = price_in_cents
    end
  end
end
