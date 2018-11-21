$(window).on('load scroll',function(){
  if ($(this).scrollTop() > 20) {
    $('#header').addClass('fixheader');
  } else {
    $('#header').removeClass('fixheader');
  }
});
$(function(){
  $(function(){
    function pagelink(heightnum){
      var headerHight = heightnum;
      $('a[href^=#]' + 'a:not(.non-scroll)').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
      });
      /* outpagelink */
      var url = $(location).attr("href");
      if (url.indexOf("?id=") == -1) {

      }else{
        var url_sp = url.split("?id=");
        var hash     = "#" + url_sp[url_sp.length - 1];
        var target2        = $(hash);
        var position2        = target2.offset().top-headerHight;
        $("html, body").animate({scrollTop:position2}, 500, "swing");
      }
    }
    pagelink(30); //ヘッダの高さ
  });
  var state = false;
  var scrollpos;
  $('.sp_menu_trigger').on('click', function(){
    $('#sp_menu_btn').toggleClass("active");
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('sp_menu_open').css({'top': -scrollpos});
      //$('#header').css({'top': 0});
      $('#sp_menu').addClass('sp_menu_open');
      state = true;
    } else {
      $('body').removeClass('sp_menu_open').css({'top': 0});
      //$('#header').css({'top': 'auto'});
      window.scrollTo( 0 , scrollpos );
      $('#sp_menu').removeClass('sp_menu_open');
      state = false;
    }
  });
});
