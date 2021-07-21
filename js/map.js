createMap();

function createMap() {
    var mapContainer = document.getElementById('map'); // 지도의 중심좌표
    mapOption = {
        center: new kakao.maps.LatLng(37.55617959247104, 126.93667878657793), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다 
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.55617959247104, 126.93667878657793)
    });

    var markerImage = new kakao.maps.MarkerImage(
        'images/icon_hollys.png',
        new kakao.maps.Size(35, 47), new kakao.maps.Point(17, 21));
    marker.setImage(markerImage);

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="info">' +
        '<div class="top_info">' +
        '<h3>할리스커피 신촌 연세로점</h3>' +
        '<button class="btn_close" type="button">정보창 닫기</button>' +
        '</div>' +
        '<div class="mid_info">' +
        '<dl>' +
        '<dt>· 주소</dt>' +
        '<dd>서울특별시 서대문구 창천동 30-7</dd>' +
        '<dt>· 연락처</dt>' +
        '<dd>02-322-3684</dd>' +
        '<dt>· 영업시간</dt>' +
        '<dd>08:00 - 22:30</dd>' +
        '</dl>' +
        '</div>' +
        '<div class="bottom_info">' +
        '<a class="btn_detail" href="#" target="_blank">자세히보기</a>' +
        '</div>' +
        '</div>';

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    function closeOverlay() {
        overlay.setMap(null);
    };

    // closeOverlay()가 내부함수이므로 외부에서 인라인이벤트로 호출불가하므로
    // 내부에서 클릭이벤트를 바인딩하여 함수호출
    document.querySelector('.info .btn_close').addEventListener('click', function () {
        closeOverlay();
    });
}