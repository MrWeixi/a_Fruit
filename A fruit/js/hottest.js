$.ajax({
    url: './../play/json/hottest.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
        console.log(data);
        var listText = doT.template($('#third').text());
        $('.found').html(listText(data));
    }
})