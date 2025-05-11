class Rack::Attack
  # 1時間あたり30回のリクエスト制限
  throttle('contact_form', limit: 30, period: 1.hour) do |req|
    if req.path == '/api/v1/contact' && req.post?
      req.ip
    end
  end

  # 制限を超えた場合のレスポンス
  self.throttled_response = ->(env) {
    retry_after = (env['rack.attack.match_data'] || {})[:period]
    [
      429,
      { 'Content-Type' => 'application/json', 'Retry-After' => retry_after.to_s },
      [{ error: 'リクエスト制限を超えました。しばらく時間をおいて再度お試しください。' }.to_json]
    ]
  }
end 
