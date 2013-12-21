spriteArea.js
==========

スプライトシートを手軽にアニメーションさせます。 sprite sheet animation easily.

## 特徴
- 指定したdiv内にスプライト画像を並べるだけでアニメーションしてくれる。
- div単位の指定なのでいちいち、画像ごとに指定しなくてよい。
- 複数のエリアを作るごとができる。エリアごとにセル幅やFPSの違うものを指定できる。


## 使用法
```html
<!-- divのクラス名をsprite_areaと指定し、data-widthとdata-heightに1セルの幅と高さを指定、data-fpsでそのエリアのfpsを定義する -->
<div class="sprite_area" data-width="192" data-height="192" data-title="24">
    <img src="hoge.png">
    <img src="piyo.png">
    <img src="nyaaa.png">
    <img src="wan.png">
</div>
```

## demo page
http://retasretas.github.io/spriteArea/

とまあこういった代物なのですが、不完全です。

head内で読み込ませるとうまく行くのですが、bodyの閉じタグの直前で読み込ませるとjQueryと本スクリプトの応答順序などに齟齬が生じてページを読み込むごとに結果が違ってしまいます。以下が実例です。

- [うまくいく例](http://retasretas.github.io/spriteArea/index.html)
- [いかない例](http://retasretas.github.io/spriteArea/index2.html)

上記の２つのページは同じHTMLと同じスクリプトソースでできています。両者の違いはスクリプトを読み込む場所だけです。  
できれば、bodyの閉じタグ直前で読み込んでもちゃんと動作するようにしたいのですが、自分の知識ではこれ以上どうすればいいかわかりません。

どなたか詳しくて親切な方、/body前でも動作するように改良お願いします。
