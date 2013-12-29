spriteArea.js
==========

スプライトシートを手軽にアニメーションさせます。 sprite sheet animation easily.

## 特徴
- 指定したdiv内にスプライト画像を並べるだけでアニメーションしてくれる。
- div単位の指定なのでいちいち画像ごとに指定しなくてよい。
- 複数のエリアを作るごとができる。エリアごとにセル幅やFPSの違うものを指定できる。


## 使用法
```html
<!-- divのクラス名をsprite_areaと指定し、data-widthとdata-heightに1セルの幅と高さを指定、data-fpsでそのエリアのfpsを定義する -->
<div class="sprite_area" data-width="192" data-height="192" data-fps="24">
    <img src="hoge.png">
    <img src="piyo.png">
    <img src="nyaaa.png">
    <img src="wan.png">
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="jquery.spritearea.js"></script><!-- bodの閉じタグ直前にjQueryと本ファイルを読みこませる -->
```

## demo page
http://retasretas.github.io/spriteArea/