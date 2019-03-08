$.ajax({
    url: './../use/json/use_exclusive.json',
    dataType: 'json',
    type: 'get',
    success: function (data) {
        console.log(data);
        var listText = doT.template($('#use_exclusive').text());
        $('.hot-slide').html(listText(data));
    }
})