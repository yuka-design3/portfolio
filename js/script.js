// ローディング画面
$(function(){

  setTimeout(() => {
    $('.logo').addClass('red');
  }, "500")

  setTimeout(() => {
    $('.logo').addClass('orange');
  }, "1000")

  setTimeout(() => {
    $('.logo').addClass('yellow');
  }, "1500")

  setTimeout(() => {
    $('.logo').addClass('blue');
  }, "2000")

  setTimeout(() => {
    $('.logo').addClass('green');
  }, "2500")

  setTimeout(() => {
    $('.loading').fadeOut();
  }, "2000")
})


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



// ハンバーガーメニュー

$(function () {
    $('.sp_btn, .sp_nav li').on('click', function () {
        $('.sp_btn').toggleClass('open');
        $('.sp_nav').fadeToggle();

    });
});

