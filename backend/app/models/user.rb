class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :name, presence: true, length: { maximum: 50 }

  before_save :downcase_email

  private

  def downcase_email
    self.email = email.downcase
  end
end 
