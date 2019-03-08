    $.ajax({
        url: './../use/json/use_end.json',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            console.log(data);
            var listText = doT.template($('#use_end').text());
            $('.hot-slide').html(listText(data));
        }
    })