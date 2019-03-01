$(function () {
    // 获取页面上所有属性是data-toggle="tooltip"的元素
    $('[data-toggle="tooltip"]').tooltip()

    // 轮播图轮播时间
    $('.carousel').carousel({
        interval: 2000
    });

    // 移动端录播图设置
    var startX = 0;
    var endX = 0;
    $('#slide').on('touchstart', function (e) {
        // jquery添加的事件 是jquery的事件对象
        // 取原生的事件对象 e.originalEvent
        startX = e.originalEvent.touches[0].clientX;
    });
    $('#slide').on('touchend', function (e) {
        endX = e.originalEvent.changedTouches[0].clientX;

        if (endX - startX > 0) {
            $('.carousel').carousel('prev');
        } else if (endX - startX < 0) {
            $('.carousel').carousel('next');
        }
    });
})