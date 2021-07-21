(function () {
    // gnb열기
    $('#header .icon_nav').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('on');
        $('#header .gnb_box').toggleClass('on');
        $('#header .dimm').fadeToggle(300);
        $('body').toggleClass('hidden');
    });

    $('#header .dimm').on('click', function() {
        $('#header .icon_nav').trigger('click');
    });

    // gnb 아코디언
    $('.gnb .depth1>li>a').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active').parent().siblings().find('>a').removeClass('active');

        $(this).next().stop().slideToggle().parent().siblings().find('.depth2').hide();
    });

    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // 할리스메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 메인 뉴스 슬라이더
    var newsSlider = new Swiper('.news_slider', {
        direction: 'vertical',
        loop: true,
        // slidesPerView: 1,
        speed: 600, // 슬라이드 이동속도
        autoplay: {
            delay: 5000, // 다음 슬라이드 지연시간
            disableOnInteraction: false, // 안쪽 버튼 클릭시 안 멈추게 함
        },
        spaceBetween: 10, // 슬라이드 간 간격
    });

    $('.main_etc .news_slider').on('click', function (e) {
        e.preventDefault();
    });

    // 메인 sns 슬라이더
    var snsSlider = new Swiper('.sns_slider', {
        speed: 700, // 슬라이드 이동속도
        autoplay: {
            delay: 5000,
        },
        // css로 슬라이스크기를 지정할 경우에는 auto로 하고
        // 지정안할경우에는 1이상 갯수를 적음(1일 경우 100%), 알아서 %계산됨
        slidesPerView: 'auto',
        spaceBetween: 10, // 슬라이드 간 간격
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: '200',
        },
    });

    // 매장찾기 옵션선택
    $('.store_container .info_wrap>div:gt(0)').hide();

    $('.store_container .lnb li').on('click', function(e) {
        e.preventDefault();

        var idx = $(this).index();
        console.log(idx);
        
        $(this).addClass('on').siblings().removeClass('on');
        $('.store_container .info_wrap>div').eq(idx).show().siblings().hide();
    });

    // 서브 공지사항 lnb 선택
    $('.notice_container .board_box>div:gt(0)').hide();

    $('.lnb li').on('click', function() {
        var idx = $(this).index();
        console.log(idx);

        $(this).addClass('on').siblings().removeClass('on');
        $('.notice_container .board_box>div').eq(idx).show().siblings().hide();
    });
    
    // 서브 베이커리 메뉴선택시 화면
    $('.bakery_container .food_list li').on('click', function(e) {
        e.preventDefault();
        
        $(this).toggleClass('on').siblings().removeClass('on');
    });
})();