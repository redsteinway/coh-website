# ALM-01 レバーレスアーケードコントローラー ランディングページ

## プロジェクト概要

このプロジェクトは、ALM-01レバーレスアーケードコントローラーの公式ランディングページです。主に以下のユーザーをターゲットとしています：

- 格闘ゲームプレイヤー
- レバーレスコントローラーに興味のある方
- 高品質なゲーミングギアを求める方

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/redsteinway/coh-website.git
cd coh-website
```

2. 依存関係のインストール
```bash
npm install
```

## ローカルプレビュー方法

以下のいずれかの方法でローカルプレビューが可能です：

### VS Code Live Server
1. VS Codeに「Live Server」拡張機能をインストール
2. `index.html`を右クリック
3. 「Live Serverで開く」を選択

### Python HTTP Server
```bash
python3 -m http.server 8000
```
その後、ブラウザで `http://localhost:8000` にアクセス

## プロジェクト構造

```
/COH-WEBSITE
├── index.html          # ALM-01のランディングページ
├── assets/            # スタイルシートと画像ファイル
│   └── global.css     # グローバルスタイル
├── tests/             # テストファイル
├── package.json       # プロジェクト設定
├── .gitignore        # Git除外設定
└── README.md         # 本ファイル
```

## テスト

プロジェクトには以下のテストが含まれています：
- スクロールトップ機能のテスト
- デバッグ用の各種ユーティリティ

## 今後の拡張について

新しいコントローラーモデルが追加される場合は、以下のような構造を推奨します：

```
/COH-WEBSITE
├── controllers/
│   ├── alm-01/
│   │   └── index.html
│   └── alm-02/
│       └── index.html
├── assets/
├── tests/
└── README.md
```

将来的には、AstroやNext.js（Static Export）への移行を検討し、共通コンポーネントの再利用性を高める予定です。

## バージョン情報

- 現在のバージョン: 1.0
- 初回リリース: 2025年6月15日 