---
marp: true
theme: dark
---

# React コンポーネントライブラリを使ってみよう

---

# React とは

- UI をより便利に記述するための JavaScript ライブラリ
- コンポーネントと呼ばれる部品を使って UI を構築
- React は JavaScript の関数なので、繰り返しの描画や条件式による表示の切り替えが可能です。
  ![alt text](image.png)

---

# 1. 環境構築

---

## 主に使用する環境

| 使用ツール | バージョン  | 備考                             |
| ---------- | ----------- | -------------------------------- |
| Node.js    | 20.17.0     | サーバで実行する JavaScript      |
| pnpm       | 9.14.2      | node のパッケージマネージャ<br/> |
| Next.js    | 15 系(最新) | React のフレームワーク           |
| Mantine    | 7 系(最新)  | React のコンポーネントライブラリ |

<br/>
pnpmをインストールしたい場合はnodeを入れた上で

```sh
npm install -g pnpm
```

でインストール可能

---

## Next.js のイントール

```sh
npx create-next-app@latest --use-pnpm
? What is your project named? › study-mantine
? Would you like to use TypeScript? › Yes
? Would you like to use ESLint? › Yes
? Would you like to use Tailwind CSS? › No
? Would you like your code inside a `src/` directory? › Yes
? Would you like to use App Router? (recommended) › Yes
? Would you like to use Turbopack for `next dev`? › Yes
? Would you like to customize the import alias (`@/*` by default)? › No
```

- `--use-pnpm`オプションを使用することで pnpm でパッケージの管理をインストールしてくれる。
- Turbopack は、Webpack の後継として Vercel が開発したビルドツール。より高速なビルドとホットリロードを提供している。

---

## 起動確認

```sh
cd study-mantine
```

```sh
pnpm dev
```

---

## プロジェクトの構成

| 対象   | 概要                                                                      |
| ------ | ------------------------------------------------------------------------- |
| public | 画像などアプリケーション静的なリソース                                    |
| src    | アプリのロジックやルーティングなどを格納                                  |
| app    | アプリケーションのルート<br/>今回は主にルーティングやレイアウトなどを格納 |

---

# 2.はじめてのコンポーネント

コンポーネントとは、独自のロジックと外見を持つ UI（ユーザインターフェース）の部品のことです。コンポーネントは、ボタンのような小さなものである場合も、ページ全体を表す大きなものである場合もあります。

---

### src/app/page.tsx

```tsx
export default function Home() {
  return <div>hello world</div>;
}
```

---

## TSX

TypeScript と JSX を組み合わせたファイル拡張子です。
TypeScript は JavaScript のスーパーセットであり、静的型付けを提供します。
JSX は React コンポーネントを記述するための構文です。
→ 要は HTML 風のマークアップ機能を兼ね備えた TypeScript
→ 実は拡張子は`.ts`でも問題ないが、`.tsx`の方がマークアップの時にエディタが補完を聞かせてくれるので何かと便利。

---

## コンポーネントの基本

### src/app/page.tsx

```tsx
function MyButton() {
  return <button>I'm a button</button>;
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

このように別の関数で定義した UI の要素を呼び出して表示できる。

---

## データを表示するには

```tsx
const MyButton = () => {
  return <button>I'm a button</button>;
};
const Member = (props: { name: string; age: number }) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <p>menber list</p>
      <Member name="Alice" age={20} />
      <Member name="Bob" age={25} />
      <Member name="Cindy" age={30} />
    </div>
  );
}
```

---

## JavaScript の関数を使用して表示することも

```tsx
const Member = (props: { name: string; age: number }) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
};
export default function Home() {
  const data = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Cindy", age: 30 },
  ];
  return (
    <div>
      <p>menber list</p>
      {data.map((member) => (
        <Member key={member.id} name={member.name} age={member.age} />
      ))}
    </div>
  );
}
```

---

# 3.コンポーネントのスタイリング

---

## CSS Modules とは

CSS Modules は、CSS ファイルをモジュールとして扱い、クラス名のスコープをコンポーネント単位に限定する技術です。これにより、グローバルなクラス名の競合を避け、スタイルの管理が容易になります。

CSS Modules を使用するには、CSS ファイルの拡張子を`.module.css`にし、TypeScript ファイルでインポートします。

---

### CSS を記述

### src/app/page.module.css

```css
.member {
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}
```

---

### インポートして使用する

### src/app/page.tsx

```tsx
import classes from "./page.module.css";
const Member = (props: { name: string; age: number }) => {
  return (
    <div className={classes.member}>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
};
```

---

# 4.コンポーネントライブラリとは

---

## コンポーネントライブラリ

コンポーネントライブラリとは、ユーザーインターフェース（UI）を構築するために再利用可能なコンポーネント（ボタン、フォーム、モーダル、ナビゲーションバーなど）をパッケージとして提供している

---

## コンポーネントライブラリの主な特徴

1. 再利用性
   一度作られたコンポーネントをさまざまなプロジェクトやページで使い回すことができます。

2. 一貫性
   統一されたスタイルやデザインガイドラインに基づいて構築されているため、アプリケーション全体での見た目が一貫します。

3. 効率性
   ゼロから UI を作成する手間を省き、開発時間を短縮できます。

今回はそのコンポーネントライブラリのうちの一つ`Mantine`を使用していきます。
簡単なデモを作りながら学んでいきましょう。

---

# 5.作成するデモアプリについて

※本日全て作り切ることはできません 🙇

---

## テーマ

学校の先生が指導法やプリントなどを共有できるプラットフォーム

## モチベーション

教員時代に手探りで教材を作成したり指導案を作成したりした経験から、もっと教員間で情報の共有ができていたら短期間で質の良い教育を提供できたのではないか

## 想定する機能

- 指導法共有(ブログ形式)
- プリントの共有
- 投稿
  など

---

# 6.Mantine のセットアップ

---

## パッケージのインストール

```sh
pnpm add @mantine/core @mantine/hooks
```

<br>

| パッケージ     | 概要                                                 |
| -------------- | ---------------------------------------------------- |
| @mantine/core  | 入力、ボタン、オーバーレイなどの主要なコンポーネント |
| @mantine/hooks | 状態と UI 管理のためのフック                         |

---

## PostCSS のセットアップ

### パッケージのインストール

```sh
pnpm add -D postcss postcss-preset-mantine postcss-simple-vars
```

### 設定ファイルを作成

```sh
touch postcss.config.mjs
```

---

### postcss.config.mjs

CSS 変数にブレイクポイントを設定しています。

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};
export default config;
```

---

アプリのルートレイアウトに設定を追加

```tsx
import type { Metadata } from "next";
import "./globals.css";
// importしたパッケージのスタイルをimportします
import "@mantine/core/styles.css";

// @mantine/hooks以外のすべてのパッケージではスタイルのimportが必要
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "My Mantine app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // htmlタグにsuppressHydrationWarning属性を追加する。
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* headタグにColorSchemeScriptを追加する */}
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className="antialiased">
        {/* childrenをMantineProviderでラップする */}
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
      </body>
    </html>
  );
}
```

---

# 7. ルーティングの概要

---

## Next.js のファイルシステムルーティング

Next.js ではファイルシステムルーティングと呼ばれるルーティングシステムが組み込まれています。
Next.js 13 以降で登場した App Router では、app ディレクトリ以下に配置したファイル構成がそのままルーティングのパスとなります。

---

## page.tsx と layout.tsx

| ファイル名 | 概要                                                                                                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| page.tsx   | ディレクトリパスに対応するページコンポーネント。例えば`src/app/page.tsx`であれば`{ドメイン}/`の URL に対応し、`src/app/hoge/page.tsx`であれば`{ドメイン}/hoge/`の URL に対応する。      |
| layout.tsx | 配置された階層以下の page.tsx 全てに共通のレイアウトを提供する。例えば`src/app/page.tsx`を作成すれば、`src/app/layout.tsx`にも`src/app/hoge/page.tsx`にも共通のレイアウトが適用される。 |

---

### Route Groups

`(ディレクトリ名)`とすることで、URL に影響を与えずにルートを整理することができます。

![alt text](image-2.png)
※公式より引用

---

# 8. ルーティングを設定する。

---

## 作成するページ

| ページ           | ディレクトリ             | URL パス   |
| ---------------- | ------------------------ | ---------- |
| ホーム           | src/app/(root)/(home)/   | /          |
| 投稿             | src/app/(root)/create    | /create    |
| 検索             | src/app/(root)/search    | /search    |
| ワークシート一覧 | src/app/(root)/worksheet | /worksheet |

---

## とりあえずファイルを作成していきましょう

各パス/page.tsx

```tsx
export default function HogePage() {
  return <div>hogeページ</div>;
}
```

---

# 9.ナビゲーションヘッダー

---

# 10. 記事一覧のカード
