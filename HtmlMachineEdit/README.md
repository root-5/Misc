# 概要

Node.js の jsdom を使って HTML ファイルを DOM として読み込み、JavaScript として編集・保存するためのツールです。
特定の条件にのみ該当する要素に連番の ID を付与したり、別の HTML ファイルから解析した要素を取り込んで反映したりできます。

# 使い方

## 事前準備

1. Node.js をインストールする
2. このリポジトリをクローンする

## インストールと実行

1. `cd HtmlMachineEdit`
2. `npm install`
3. 編集したい HTML ファイルを `input` フォルダにコピーする
4. HtmlMachineEdit.js の中身を編集する
    1. 「初期設定」内にファイル名を指定
    2. 「DOM 操作を記述」内に DOM 操作のコードを記述
5. `node HtmlMachineEdit.js`
6. `output` フォルダに編集後の HTML ファイルが出力される
