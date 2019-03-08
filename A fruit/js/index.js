$(function () {

  // 热门试用
  $.ajax({
    url: './json/index_slide.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
      // console.log(data);
      var listText = doT.template($('#list').text());
      $('#into').html(listText(data));

    }
  })

  // 报告精选
  $.ajax({
    url: './json/report.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
      // console.log(data);
      var listText = doT.template($('#first').text());
      $('.fir-list').html(listText(data));
    }
  })


  // 导购精选
  $.ajax({
    url: './json/shoppers.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
      // console.log(data);
      var listText = doT.template($('#second').text());
      $('.sel-list').html(listText(data));
    }
  })


  // 发现酷玩
  $('.more').find('a').on('click',function(){
    setTimeout(get_play,2000)
    $(this).text('正在加载更多').addClass('ass');
    function get_play(){
        $.ajax({
          url: './json/found.json',
          dataType: 'json',
          type: 'get',
          success: function (data) {
            //  console.log(data);
            var listText = doT.template($('#third').text());
            $('.fou-list').append(listText(data));
            $('.more').find('a').text('点击加载更多').removeClass('ass');

          }
        })
      }
  })

var timer = null;
timer = setInterval(tm, 3000);
function tm() {
  //  clearInterval(timer);
  var $width = $("#into li").outerWidth(true);
  // console.log($width);
  $("#into").animate({ marginLeft: -$width* 4 }, 2000, function () {
    $("#into").css("margin-left", "0px");
    $("#into li").slice(0, 4).appendTo($("#into"));
  });
 
};
$("#into").hover(
function () {
  clearInterval(timer);
},
function () {
  timer = setInterval(tm, 3000);
})




$('#next,#prev').hover(function () {
  clearInterval(timer);
}, function () {
  timer = setInterval(tm, 3000);
})
$("#next").on("click", function () {
  clearInterval(timer);
  var $width = $("#into li").outerWidth(true);
    $("#into").animate({ "marginLeft": -$width * 4 }, 2000, function () {
      $("#into .hot-list").slice(0, 4).appendTo("#into");
      $("#into").css("marginLeft", "0px");
    });
    return false;
  })

$("#prev").on("click", function () {
  var $width = $("#into li").outerWidth(true);  
  $("#into").css("marginLeft", -$width * 4);
  $("#into .hot-list").slice(-4).prependTo("#into");
  $("#into").animate({ marginLeft: 0 }, 2000);
});


 $(function () {
   $(document).scroll(function () {
     var top = $(document).scrollTop();
     if (top > 100) {
       $('#top').show();
     } else if (top < 100) {
       $('#top').hide();
     }
   })
 })

  function countTime() {
    var date = new Date();
    var now = date.getTime();
    var str = "2019/3/20 00:00:00";
    var endDate = new Date(str);
    var end = endDate.getTime();
    var leftTime = end - now; 
    var d, h, m, s;
    if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
    }
    $('.time').text("申请时间剩余：" +d + "天" + h + "时" + m + "分" + s + "秒");
    setTimeout(countTime, 1000);

  }
  countTime();






})

// ----------------------轮播效果



