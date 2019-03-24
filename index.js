$('#swiper').sliderImg({
    image: ['./image/pic1.jpg', './image/pic2.jpg', './image/pic3.jpg'],
    interVal: 3000
});

var index;
$('.cate_menu_item').hover(function(){
    $('.JS_popCtn').css('display', 'block');
    index = $(this).attr('data-index');
    $('#cate_item' + index).css('display', 'block');
}, function(){
    $('.JS_popCtn').css('display', 'none');
    $('#cate_item' + index).css('display', 'none');
});

$('.JS_popCtn').on('mouseover', function(){
    $(this).css('display', 'block');
    $('#cate_item' + index).css('display', 'block');
}).on('mouseout', function(){
    $('.JS_popCtn').css('display', 'none');
    $('cate_item' + index).css('display', 'none');
});

$('.services_entry .row1').hover(function(){
    $('.services_entry').slideUp();
    $('.services_content').slideDown();
    $('.services_content .content').css('display', 'none');
    var id = $(this).attr('id');
    $('.nowActive').removeClass('nowActive');
    $('.' + id + '_tab').addClass('nowActive');
    $('.' + id + '_content').show();
    $('.close').show();
})

$('.services_content .header span').hover(function(){
    $('.nowActive').removeClass('nowActive');
    $(this).addClass('nowActive');
    var data = $(this).attr('data');
    $('.' + data + '_content').show()
        .siblings('.content').hide();
})

$('.services_content .close').on('click', function(){
    $(this).hide();
    $('.services_entry').slideDown();
    $('.services_content').slideUp();
})

$('#location').araeList({
    items: [{
        name: '北京',
        href: '#',
    },{
        name: '上海',
        href: '#',
    },{
        name: '天津',
        href: '#',
    },{
        name: '重庆',
        href: '#',
    },{
        name: '河北',
        href: '#',
    },{
        name: '山西',
        href: '#',
    },{
        name: '河南',
        href: '#',
    },{
        name: '辽宁',
        href: '#',
    },{
        name: '吉林',
        href: '#',
    },{
        name: '黑龙江',
        href: '#',
    },{
        name: '内蒙古',
        href: '#',
    },{
        name: '江苏',
        href: '#',
    },{
        name: '山东',
        href: '#',
    },{
        name: '安徽',
        href: '#',
    },{
        name: '浙江',
        href: '#',
    },{
        name: '福建',
        href: '#',
    },{
        name: '湖北',
        href: '#',
    },{
        name: '湖南',
        href: '#',
    },{
        name: '广东',
        href: '#',
    },{
        name: '广西',
        href: '#',
    },{
        name: '江西',
        href: '#',
    },{
        name: '四川',
        href: '#',
    },{
        name: '海南',
        href: '#',
    },{
        name: '贵州',
        href: '#',
    },{
        name: '云南',
        href: '#',
    },{
        name: '西藏',
        href: '#',
    },{
        name: '陕西',
        href: '#',
    },{
        name: '甘肃',
        href: '#',
    },{
        name: '青海',
        href: '#',
    },{
        name: '宁夏',
        href: '#',
    },{
        name: '新疆',
        href: '#',
    },{
        name: '港澳',
        href: '#',
    },{
        name: '台湾',
        href: '#',
    },{
        name: '钓鱼岛',
        href: '#',
    },{
        name: '海外',
        href: '#',
    }],
    rowNum: 5,
    nowItem: '北京',
    nowItemImg: './image/local.jpg'
});


$('#myjd').dropList({
    dirction: 'y',
    colNum: 2,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单'
        },{
            href: '#',
            name: '消息'
        },{
            href: '#',
            name: '返修退换货'
        },{
            href: '#',
            name: '我的问答'
        },{
            href: '#',
            name: '降价商品'
        },{
            href: '#',
            name: '我的关注'
        },]
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆'
        }, {
            href: '#',
            name: '我的优惠券'
        }, {
            href: '#',
            name: '我的白条'
        }]
    }]
});

$('#nav').dropList({
    dirction: 'x',
    colNum: 2,
    menuList: [{
        title: '特色',
        items: [{
            href: '#',
            name: '企业购'
        },{
            href: '#',
            name: '商用场景管'
        },{
            href: '#',
            name: '工业品'
        },{
            href: '#',
            name: '礼品卡'
        }]
    },{
        title: '特色',
        items: [{
            href: '#',
            name: '企业购'
        },{
            href: '#',
            name: '商用场景管'
        },{
            href: '#',
            name: '工业品'
        },{
            href: '#',
            name: '礼品卡'
        }]
    },{
        title: '特色',
        items: [{
            href: '#',
            name: '企业购'
        },{
            href: '#',
            name: '商用场景管'
        },{
            href: '#',
            name: '工业品'
        },{
            href: '#',
            name: '礼品卡'
        }]
    },{
        title: '特色',
        items: [{
            href: '#',
            name: '企业购'
        },{
            href: '#',
            name: '商用场景管'
        },{
            href: '#',
            name: '工业品'
        },{
            href: '#',
            name: '礼品卡'
        }]
    }]
});

// https://suggest.taobao.com/sug?code=utf-8&q=%E5%95%8A&_ksTS=1548836633837_1290&callback=jsonp1291&k=1&area=c2c&bucketid=9
// $('.cj-input').on('input', function(){
//     var val = $(this).val();
//     $.ajax({
//         url: 'https://suggest.taobao.com/sug',
//         type: 'GET',
//         dataType: 'jsonp',
//         data: {q: val, code: 'utf-8', callback: 'addItem'},
//     })
// });
//
$('.search').on('mouseleave', function(){
    $('.header-right .list').hide();
})

// function addItem(data){
//     console.log('add');
//     var str = '';
//     data.result.forEach(function(ele, index){
//         str += '<a href="">' + ele[0] + '</a>';
//     });
//     $('.header-right .list').show();
//     $('.header-right .list').html(str);
// }

window.addItem = function(data){
    var str = '';
    data.result.forEach(function(ele, index){
        str += '<a href="">' + ele[0] + '</a>';
    });
    $('.header-right .list').show();
    $('.header-right .list').html(str);
}

$('.search').inputSearch({
    type: 'GET',
    url: 'https://suggest.taobao.com/sug',
    key: 'callback',
    dataType: 'jsonp',
    sucFn: 'window.addItem',
    btnColor: 'red',
    dataName: 'q',
    other: 'code: utf-8',
});
