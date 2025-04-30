FROM node:20-alpine

WORKDIR /app

# pnpmを最新版にアップデート
RUN npm install -g pnpm@latest

# 依存関係ファイルのみをコピー
COPY package.json pnpm-lock.yaml ./

# シンプルなインストールコマンド
RUN pnpm install

# ソースコードをコピー
COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"] 
