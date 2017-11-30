# TOKYO SHIBUYA DEV FOR Vue.js
---

TOKYO SHIBUYA DEV FOR Vue.js はVue.jsを使ったホームページ手作り用キットです。<br>

## ISSUE

* ~~圧縮をかけてもvueがproduction modeにならない~~(解決しました！！ [Issues#1](https://github.com/bom-shibuya/env_dev2017-vue/issues/1) ありがとうございます🙌🏻)
* テストタスクがない（テストを書く経験がないものでして、、、）

## 構成

### node

* >= 7.0.0

他でも動くと思うけど、動作してるのは7.5.0

### パッケージマネージャ

* yarn

入っていれば`yarn`で、なければhomebrewなりでyarnを落としてくるか、`npm i`でも叩きましょう。おそらくそれでも入ってくると思います。

### 構成イメージ

webpack-dev-serverでHMR効かせて開発。  
`app/src`内が開発環境、`app/dest`に吐き出させる。  
cssはsassを使用して、variablesやmixins、presetなどは`app/src/styles`に入れて、`sass-resource-loader`で引っ張ってくる。  
HTMLは`app/src/index.html`をテンプレートにしていて、タイトルはwebpackから渡す。
ディレクトリ関係は`DIR.js`に書いてあるので、変更するなら確認してください。

### 元から入れてるプラグイン

**css**
* TOKYO SHIBUYA RESET -- 僕が作った全消しリセット

**js**
* jquery -- どこでも使えるようにしてある
* modernizr -- touch eventだけ
* gsap
* imagesloaded
* webfontloader
* vue

## コマンド

開発タスク -- watch

    $ npm start

開発タスク -- 吐き出しだけ

    $ npm run build

eslint

    $ npm run lint

eslintがエラー吐くときにnpm ERR!がいっぱい出ますが、ウザかったら`npm run lint -s`でnpmを黙らせましょう。`--silent`でももちろんいいです。

リリースタスク

    $ npm run production

リリースされたものの確認

    $ npm run server

### eslint

FREE CODE CAMPのものをパクってくる + vue-configで使ってます。

