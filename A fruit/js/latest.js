// 发现酷玩
$.ajax({
    url: './../play/json/found.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
        console.log(data);
        var listText = doT.template($('#third').text());
        $('.found').html(listText(data));
    }
})