(function(){

    //实现插件功能
    function Index(option){
        this.parent = option.parent;
        this.type = option.type || 'GET';
        this.url = option.url || '';
        this.key = option.key || 'callback';
        this.dataType = option.dataType;
        this.sucFn = option.sucFn,
        this.btnColor = option.btnColor || '#eee';
        this.dataName = option.dataName;
        this.other = option.other || '';
        this.createDom();
        this.addCss();
        this.getData();
    };

    //创建结构
    Index.prototype.createDom = function(){
        var self = this;
        var oDiv = $('<div class="con"></div>');
        var oInput = $('<input type="text" placeholder="手机" class="cj-input">');
        var btn = $('<input type="button" value="搜索" class="cj-btn">');
        oDiv.append(oInput).append(btn).appendTo(self.parent);
    }

    //设置样式
    Index.prototype.addCss = function(){
        var self = this;
        var h = self.parent.height();
        var w = self.parent.width();
        $('.con', self.parent).css({
            width: '100%',
            height: '100%',
            display: 'flex'
        });
        $('.cj-input', self.parent).css({
            // width: (w - 100) + 'px',
            flex: 1,
            height: '100%',
            border: 'none',
            outline: 'none',
            textIndex: '10px'
        });
        $('.cj-btn', self.parent).css({
            width: '100px',
            height: '100%',
            border: 'none',
            backgroundColor: self.btnColor,
            color: '#fff',
            cursor: 'pointer',
            outline: 'none'
        })
    }

    //发送请求
    Index.prototype.getData = function(){
        var self = this;
        $('.cj-input', self.parent).on('input', function(){
            var val = $(this).val();
            $.ajax({
                type: self.type,
                url: self.url,
                data: self.dataName + '=' + val + '&' + self.other,
                dataType: self.dataType,
                jsonp: self.key,
                jsonpCallback: self.sucFn
            })
        })
    }

    $.fn.extend({
        inputSearch: function(opt){
            opt.parent = this;
            new Index(opt);
            return this;
        }
    })
})();
