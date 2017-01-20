/**
 * Created by lk on 17/1/16.
 */

$(function () {

    var headerHeight = $(".admin-header").height() //头部高度
        ,topHeight = $(".top-border").height() //tab 高度
    /**
     * 调整页面宽高
     */
    function fixHeight() {
        console.log($(window).height())
        console.log(headerHeight)
        console.log(topHeight)
        $(".admin-main-left .admincj_nav .item .sub-menu ul").height($(window).height() - headerHeight  - topHeight);
        $(".admin-main-left .admincj_nav").height($(window).height() - headerHeight  - topHeight);
    }

    /**
     * 当页面大小变化 调整页面元素宽高
     */
    $(window).resize(function(){
        fixHeight();

    }).resize();

    var foldHoverTimer, foldOutTimer,foldHoverTimer2;
    $(document).on("mouseenter",".fold .tit",function(){
        var $this = $(this);
        var items = $this.parents(".item");

        var length = items.find(".sub-menu").find("li").length;
        items.parent().find(".sub-menu").css("top",0);
        $this.next().show();
        items.addClass("current");
        items.siblings(".item").removeClass("current");
    });

    $(document).on("mouseleave",".fold .tit",function(){
        var $this = $(this);
        clearTimeout(foldHoverTimer);
        foldOutTimer = setTimeout(function(){
            $this.next().hide();
        });
    });

    $(document).on("mouseenter",".fold .sub-menu",function(){
        clearTimeout(foldOutTimer);
        var $this = $(this);
        foldHoverTimer2 = setTimeout(function(){
            $this.show();
        });
    });

    $(document).on("mouseleave",".fold .sub-menu",function(){
        var $this = $(this);
        $this.hide();
    });
})
