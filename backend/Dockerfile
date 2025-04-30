FROM ruby:3.2-alpine

# 必要なパッケージのインストール
RUN apk add --no-cache \
    build-base \
    mysql-dev \
    mysql-client \
    tzdata \
    nodejs \
    yarn \
    yaml-dev

WORKDIR /app

# パッケージ管理ファイルをコピー
COPY Gemfile* ./

# Bundlerのインストールと依存関係のインストール
RUN gem install bundler && \
    bundle install

# ソースコードをコピー
COPY . .

# Railsサーバーの起動
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "8000"] 
