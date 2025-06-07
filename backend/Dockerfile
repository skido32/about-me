FROM ruby:3.2.2

# 必要なパッケージのインストール
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs npm postgresql-client \
    libxml2-dev libxslt1-dev && \
    npm install -g yarn

# 作業ディレクトリの設定
WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY Gemfile Gemfile.lock ./

# 依存関係のインストール
RUN bundle config set --local force_ruby_platform true && \
    bundle install --jobs 4 --retry 3

# アプリケーションのコピー
COPY . .

# ポートの設定
EXPOSE 8000

# サーバーの起動
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "8000"] 
