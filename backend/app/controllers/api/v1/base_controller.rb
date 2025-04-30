module Api
  module V1
    class BaseController < ApplicationController
      protect_from_forgery with: :null_session
      respond_to :json

      private

      def render_error(status, message)
        render json: { error: message }, status: status
      end

      def render_success(data = {}, message = 'Success')
        render json: {
          message: message,
          data: data
        }, status: :ok
      end
    end
  end
end 
