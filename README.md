# About Me

## フロントエンド
- Next.js
- TypeScript
- Tailwind CSS

## バックエンド
- Ruby on Rails (API)
- MySQL

---

## 開発環境用 Docker Compose 起動方法

### 全サービス一括起動
```sh
docker compose up
```

### バックグラウンドで一括起動
```sh
docker compose up -d
```

### 個別サービスの起動
- フロントエンドのみ
  ```sh
  docker compose up frontend
  ```
- バックエンドのみ
  ```sh
  docker compose up backend
  ```
- DBのみ
  ```sh
  docker compose up db
  ```

### サービスの停止
```sh
docker compose down
```

---

## フロントエンド（本番構成・静的サイト）としての起動方法

1. 依存関係のインストール

```sh
cd frontend
pnpm install
```

2. 本番ビルド & 静的エクスポート

```sh
pnpm run build
```

3. 静的ファイルのローカルサーバー起動（ポート3000で起動）

```sh
npx serve out -l 3000
```

- 既にポート3000が使われている場合は、`-l 8080` など別のポートを指定してください。
- Dockerのフロントエンド（about-me_frontend_1）が起動中の場合は、`docker stop about-me_frontend_1` で停止してから実行してください。
