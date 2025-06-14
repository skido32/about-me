module Api
  module V1
    class BaseController < ApplicationController

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
