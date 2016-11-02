# Please ensure that seeding the databas is always an idempotent operation. Seeds are
# run on every deployment.

require 'securerandom'

admin_user = User.find_or_initialize_by(
  email: "cli@manifold",
  first_name: "CLI",
  last_name: "User",
  is_cli_user: true,
)

if admin_user.new_record?
  pw = SecureRandom.hex
  admin_user.password = pw
  admin_user.password_confirmation = pw
  admin_user.save
end
