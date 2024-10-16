# VisionVerse

The concept embodies vast and endless possibilities, along with a forward-thinking and innovative vision.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## コミット

### フォーマット

Semantic Commit Messageを採用しています。

```
フォーマット:
<Type>: <Emoji> #<Issue Number> <Title>
例: feat: ✨ #123 ログイン機能の実装をする
TypeとTitleは必須
Issue Numberは強く推奨
Emojiは任意
Description（スリーライン）は任意
```

### Type

どんなコミットなのかシュッと分かるようにPrefixとしてコミットの種別を書きます  
Semantic Commit Messageと同様の種別を使います

- chore  
  タスクファイルなどプロダクションに影響のない修正
- docs  
  ドキュメントの更新
- feat  
  ユーザー向けの機能の追加や変更
- fix  
  ユーザー向けの不具合の修正
- refactor  
  リファクタリングを目的とした修正
- style  
  フォーマットなどのスタイルに関する修正
- test  
  テストコードの追加や修正

# ClaudeやChatGPTにリポジトリを丸ごと読み込ませるコマンド

以下のコマンドを実行することでリポジトリ一式をテキストファイル（`repopack-output.txt`）を出力することができます。
```
npx repopack
```
chatへ最初に取り込ませることでコード修正に役立ちます。

## 読み込ませるポイント
ファイルと合わせて以下のプロンプトで始めるとスムーズに改修を始めやすい
```
このファイルはリポジトリのファイルを1つにしたものです。コードのリファクタなどをしたいのでまず添付のコードを確認してください。
```

# About setting to "Renovate"

## 説明:

- extends: ["config:base"]: デフォルト設定に基づきます。
- labels: ["dependencies"]: すべての PR に "dependencies" ラベルが付与されます。
- packageRules:
  - minor と patch の自動マージ: 自動的に PR がマージされます（automergeType: "pr"）。
  - 大規模なマイナー変更（特定のパッケージ）やメジャーアップデートは自動マージされません\*\*。
- prConcurrentLimit: 一度に開かれる PR の上限(number)。

この設定で、メジャーアップデートと大規模なマイナー変更は手動でマージすることができ、それ以外の更新は自動的にマージされます。
