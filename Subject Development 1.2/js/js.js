$(function(){
    // switch menu 
    var sta = 0;
	$('.menu').on('click', function(){
        if(sta == 0){
            $('.lists').addClass('h');
            sta = 1;
        }else {
            $('.lists').removeClass('h');
            sta = 0;
        }
    })
    
    //click  scroll
    var home = $('.home').height();
    var science = $('.science').height();
    var serve = $('.serve').height();
    var cover = $('.cover').height();
    var sourse = $('.sourse').height();
    var contact = $('.contact').height();   
    var w = $(window).width();
    
    scroll(0, 0);
    scroll(1, home);
    scroll(2, home);
    scroll(3, home);
    scroll(4, science + home);
    scroll(5, serve + science + home + cover);
    scroll(6, sourse + serve + science + home + cover);

    $(window).resize(function(){
        home = $('.home').height();
        science = $('.science').height();
        serve = $('.serve').height();
        cover = $('.cover').height();
        sourse = $('.sourse').height();
        contact = $('.contact').height();
        scroll(0, 0);
        scroll(1, home);
        scroll(2, home);
        scroll(3, home);
        scroll(4, science + home);
        scroll(5, serve + science + home + cover);
        scroll(6, sourse + serve + science + home + cover);
       
        w = $(window).width();
        $('.map').css({'width': w});
        $('.map').html('<div id="allmap"></div><div class="close">&#xe603;</div>');
        
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786357, 32.029159);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        
        $('.close').on('click', function(){
            $('.map').fadeOut();
        })
    })
    

    function scroll(a, b){   //define scroll fun
        $('.list').eq(a).on('click', function(){
            $('body').stop(true).animate({'scrollTop': b}, 1000);
            $(this).addClass('h').siblings('.list').removeClass('h');
        })
    }
    
    $('.up').click(function(){   // click to top
         $('body').stop(true).animate({'scrollTop': 0}, 1000);
    })
    
    //fadein
    $('.headline, .sub, .science-lef, .science-rig, .serve-tit, .serve-con, .sourse-con, .contact-left, .contact-right, .share').hide();
    
    $('.headline, .sub').fadeIn(1000);
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if($(window).width() <= 970 && $(window).scrollTop() > home/2){
            $('.foot').addClass('h');
        }else {
            $('.foot').removeClass('h');
        }
        
        $('.lists').removeClass('h');
        sta = 0;
        
        if(scroll >= (home - 150)){
            $('.science-lef, .science-rig').fadeIn(1000);
        }
        if(scroll >= (science + home  - 150)){
            $('.serve-tit, .serve-con').fadeIn(1000);
        }
        if(scroll >= (serve + science + home + cover  - 150)){
            $('.sourse-con').fadeIn(1000);
        }
        if(scroll >= (sourse + serve + science + home + cover  - 150)){
            $('.contact-left, .contact-right, .share').fadeIn(1000);
        }
    }) 

    //map
    $('p.btn').on('click', function(){
        $('.map').show();
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786357, 32.029159);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        
        var opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("甘池软件", opts);  // 创建文本标注对象
            label.setStyle({
                 color : "red",
                 fontSize : "12px",
                 height : "20px",
                 lineHeight : "20px",
                 fontFamily:"微软雅黑"
             });
        map.addOverlay(label);  
    })
    
    $('.close').on('click', function(){
        $('.map').fadeOut();
    })

    //share
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
})

