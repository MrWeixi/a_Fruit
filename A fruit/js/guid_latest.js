$.ajax({
    url: './../guid/json/guid_latest.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
        console.log(data);
        var listText = doT.template($('#second').text());
        $('.sel-list').html(listText(data));
    }
})