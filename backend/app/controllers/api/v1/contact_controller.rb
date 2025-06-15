module Api
  module V1
    class ContactController < ApplicationController
      def create
        ContactMailer.contact_email(
          params[:email],
          params[:message],
          request.remote_ip,
          request.user_agent
        ).deliver_now

        render json: { status: 'success', message: 'メールを送信しました' }
      rescue => e
        Rails.logger.error("メール送信エラー: #{e.message}")
        render json: { status: 'error', message: 'メールの送信に失敗しました' }, status: :unprocessable_entity
      end

      def test
        render json: { status: 'success', message: 'test' }
      end
    end
  end
end 
