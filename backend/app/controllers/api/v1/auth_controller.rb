module Api
  module V1
    class AuthController < BaseController
      def register
        user = User.new(user_params)
        
        if user.save
          token = generate_token(user)
          render_success({ user: user.as_json(except: :password_digest), token: token }, 'User registered successfully')
        else
          render_error(:unprocessable_entity, user.errors.full_messages)
        end
      end

      def login
        user = User.find_by(email: params[:email]&.downcase)
        
        if user&.authenticate(params[:password])
          token = generate_token(user)
          render_success({ user: user.as_json(except: :password_digest), token: token }, 'Logged in successfully')
        else
          render_error(:unauthorized, 'Invalid email or password')
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end

      def generate_token(user)
        # JWTトークンの生成（実際の実装ではJWT gemを使用）
        # この例では簡易的な実装
        Base64.encode64("#{user.id}:#{Time.current.to_i}")
      end
    end
  end
end 
