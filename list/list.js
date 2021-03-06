;(function(){
    function Index(option){
        this.menuList = option.menuList || [];
        this.dir = option.dirction || 'x';
        this.colNum = option.colNum || 2;
        this.parent = option.parent;
        this.fontColor = this.parent.find('a').css('color');
        this.len = this.menuList.length || 0;
        this.createDom();
        this.bindEvent();
    }

    Index.prototype.createDom = function(){
        var self = this;
        var len=0;
        var content = $('<div class="dropCont" style="display:none"></div>');
        var dropDownCon = $('<div class="dropDownCon"></div>');
        this.menuList.forEach(function(ele){
            var menu = $('<div class="nav-menu"></div>');
            if(ele.title){
                var menuTitle = $('<div class="item menu-title"></div>').html(ele.title);
                menu.append(menuTitle).css('text-align', 'left');
            }
            var itemList = $('<div class="itemList"></div>');
            ele.items.forEach(function(ele){
                var str = '<a href="' + ele.href + '">' + ele.name + '</a>';
                var item = $('<div class="nav-item" style="width:100px;display:inline-block"></div>');
                item.html(str).appendTo(itemList);
            });
            menu.append(itemList).appendTo(dropDownCon);
        });
        content.append(dropDownCon).appendTo(self.parent);
        this.addCss();
        if(this.dir == 'x'){
            $('.nav-menu', this.parent).css({
                'display': 'inline-block',
                'border-right': '1px solid #ddd',
            });
            $('.dropCont', this.parent).css({
                'width': ($('.nav-menu', this.parent).innerWidth() + 2) * self.len + 'px',
                'right': 0
            })
        }else{
            $('.nav-menu', this.parent).css({
                'display': 'block',
                'border-bottom': '1px solid #ddd',
            });
            $('.dropCont', this.parent).css({
                'left': 0
            })
        }
    }

    Index.prototype.addCss = function(){
        var self = this;
        this.parent.css({
            'position': 'relative',
            'z-index': 999
        });
        $('.dropCont', this.self).css({
            'position': 'absolute',
            'background-color': '#fff'
        });
        $('.nav-menu', this.parent).css({
            'padding': '10px',
            'width': $('.nav-item', this.parent).width() * self.colNum + 'px',
            'vertical-align': 'top'
        })
    }

    Index.prototype.bindEvent = function(){
        var self = this;
        this.parent.hover(function(){
            $(this).css({
                'background-color': '#fff',
                'padding': '0 5px'
            }).find('a').css({'color': self.fontColor});
            $('.dropCont', self.parent).show();
        },function(){
            $('.dropCont', self.parent).hide();
            var color = self.parent.parents().css('background-color');
            self.parent.css('background-color', color);
        })
        $('.nav-item', this.parent).hover(function(){
            $(this).find('a').css('color', 'red');
        }, function(){
            $(this).find('a').css('color', self.fontColor);
        })
    }

    $.fn.extend({
        dropList: function(option){
            option.parent = this;
            new Index(option);
            return this;
        }
    })
})();
