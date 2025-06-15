# ALM-01 レバーレスアーケードコントローラー ランディングページ

## プロジェクト概要

このプロジェクトは、ALM-01レバーレスアーケードコントローラーの公式ランディングページです。主に以下のユーザーをターゲットとしています：

- 格闘ゲームプレイヤー
- レバーレスコントローラーに興味のある方
- 高品質なゲーミングギアを求める方

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
├── assets/            # 画像ファイル
└── README.md          # 本ファイル
```

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
└── README.md
```

将来的には、AstroやNext.js（Static Export）への移行を検討し、共通コンポーネントの再利用性を高める予定です。 