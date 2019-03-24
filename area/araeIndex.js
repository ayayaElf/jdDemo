;(function() {
    var obj = {

        init: function(option) {
            this.self = option.self;
            this.items = option.items;
            this.rowNum = option.rowNum || 5;
            this.nowItem = option.nowItem || this.items[0].name || '';
            this.nowItemImg = option.nowItemImg || '';
            this.creatDom();
            this.bindEvent();
        },

        creatDom: function(){
            var wrap = $('<div class="areaContent"></div>');
            var nowArea = $('<div class="nowArea"></div>');
            var itemList = $('<div class="itemList"></div>');
            if(this.nowItemImg){
                var img = new Image();
                img.src = this.nowItemImg;
                img.onload = function(){
                    $(img).prependTo(nowArea);
                }
            }
            $('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);

            this.items.forEach(function(ele, index){
                var str = '<a href="' + ele.href + '">' + ele.name + '</a>';
                $('<div class="item"></div>').append(str).appendTo(itemList);
            });
            wrap.append(nowArea).append(itemList);
            this.self.append(wrap);
            $('#location .itemList').css({
                'width': $('.item').innerWidth() * this.rowNum + 'px'
            });
        },

        bindEvent: function(){
            $('.itemList').on('click', '.item', function(){
                $('.nowActive').removeClass('nowActive');
                $(this).addClass('nowActive');
                $('span.item-name').text($(this).text());
            })
        }
    }

    $.fn.extend({
        araeList: function(opt) {
            opt.self = this;
            obj.init(opt);
            return this;
        }
    })

})();
