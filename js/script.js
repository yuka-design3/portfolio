// 秀英丸ゴシックの指定

(function(d) {
  var config = {
    kitId: 'gmh2slm',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// Alana Smooth Regularの指定

  (function(d) {
    var config = {
      kitId: 'gmh2slm',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


// ローディング画面
$(function(){

  setTimeout(() => {
    $('.logo_line').addClass('logo_red');
  }, "500")

  setTimeout(() => {
    $('.logo_line').addClass('logo_orange');
  }, "1000")

  setTimeout(() => {
    $('.logo_line').addClass('logo_yellow');
  }, "1500")

  setTimeout(() => {
    $('.logo_line').addClass('logo_blue');
  }, "2000")

  setTimeout(() => {
    $('.logo_line').addClass('logo_green');
  }, "2500")

  setTimeout(() => {
    $('.loading').fadeOut();
  }, "3000")
})


// ハンバーガーメニュー

$(function () {
    $('.sp_btn, .sp_nav li').on('click', function () {
        $('.sp_btn').toggleClass('open');
        $('.sp_nav').fadeToggle();

    });
});


// scroll 途中で消える

$(function(){
  var scrollStart = $('#sidebar').offset().top; //ページ上部からの距離を取得
  var scrollEnd = $('.card_wrap').offset().top; //ページ上部からの距離を取得
  var distance = 0;
 
  $(document).scroll(function(){
    distance = $(this).scrollTop(); //スクロールした距離を取得
 
    if (scrollStart <= distance) { //スクロール距離が『.sidebar』の位置を超えたら
      $('#sidebar').addClass('fixed'); //class『fixed』を追加
    } else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
      $('#sidebar').removeClass('fixed'); //class『fixed』を削除
    }
 
    if (scrollEnd <= distance) { //スクロール距離が『.card_wrap』の位置を超えたら
      $('#sidebar').addClass('none'); //class『none』を追加
    } else{
      $('#sidebar').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
    }
  });      
});


// 下からフェードイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.works_item').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


// 下からフェードイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.top_mockup, .img02, .img03').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


// pagetop 途中から表示

$(function() {
  // 変数にクラスを入れる
  var btn = $('.pagetop');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 800) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});