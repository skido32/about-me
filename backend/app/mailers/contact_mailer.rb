class ContactMailer < ApplicationMailer
  default to: 'souen0823@gmail.com'

  def contact_email(sender_email, message, ip_address, user_agent)
    @sender_email = sender_email
    @message = message
    @ip_address = ip_address
    @user_agent = user_agent
    @sent_at = Time.current

    mail(
      from: sender_email,
      subject: '[お問い合わせ] ポートフォリオサイトからのメッセージ'
    )
  end
end 
