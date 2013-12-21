/*
* spriteArea.js ver1.0.0
* The MIT License http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license
* Copyright (c) 2013 retas
* Author : @circle_retas
* spcial thanks : ikaflower
*/

/*
*   usage
* ========================
* <!-- divのクラス名を"sprite_areaと指定し、data-widthとdata-heightに1セルの幅と高さを指定、data-fpsでそのエリアのfpsを定義する -->
*   <div class="sprite_area" data-width="192" data-height="192" data-fps="24">
*       <img src="hoge.png">
*       <img src="piyo.png">
*       <img src="nyaaa.png">
*       <img src="wan.png">
*   </div>
*/


/*
    init
*/
;(function($){
    
    $(function(){
        
        var elements = $(".sprite_area");
        
        elements.each(function(){
            //画像のリストを取得
            // console.log(this);
            
            var imgList    = $(this).children("img");
            var cellWidth  = parseInt( $(this).data("width") );
            var cellHeight = parseInt( $(this).data("height") );
            var fps        = parseInt( $(this).data("fps") );
            
            //元の画像は隠す
            imgList.css("display", "none");
            imgList.load(function(){
                console.log("img load completed!");
                var sprite = new initSprite([cellWidth, cellHeight], fps, this, cellWidth, cellHeight);
                sprite.initCSS();
                sprite.next();
            });
            
        });
    });
            
    /*
            クラスっぽいの
    */
    function initSprite(matrix, fps, img, w, h){
        var object = {
                img: img,
                wrapper: undefined,
                row: undefined,
                col: undefined,
                frame: 0,
                frames: undefined,
                timer: 1000/fps,
                next: function(){
                                this.setPosition(this.frame);
                                this.frame += 1;
                                this.frame %= this.frames;
                                setTimeout(this.next.bind(this), this.timer);
                                //return this;
                        },
                /* CSS 背景位置を変える */
                setPosition: function(frame){
                                var hr = frame % this.col;
                                var va = Math.floor(frame / this.col);
                                this.wrapper.css("background-position", -hr*w + "px " + -va*h + "px");
                                //return this;
                        },
                initCSS: function(){
                                var url = this.img.src;
                                $(this.img).wrap('<div></div>');
                                this.wrapper = $(this.img).parent();
                                var prop = {
                                        "display": "inline-block",
                                        "width": w,
                                        "height": h, 
                                        "background":"url(" + url + ") 0 0 no-repeat"
                                };
                                this.wrapper.css(prop);
                                //return this;
                        },
                    /* スプライトの解析 行数と列数を返す */
                parseSprite: function(img, cellWidth, cellHeight){
                                var col = parseInt(img.width / cellWidth);
                                var row = parseInt(img.height / cellHeight);
                                return [row, col];
                        }
        }
        object.row = object.parseSprite(img, w, h)[0];
        object.col = object.parseSprite(img, w, h)[1];
        object.frames = object.row * object.col;
        
        return object;
    }

})(jQuery);