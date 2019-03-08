    $.ajax({
        url: './../use/json/use_try.json',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            console.log(data);
            var listText = doT.template($('#use_try').text());
            $('.hot-slide').html(listText(data));
        }
    })