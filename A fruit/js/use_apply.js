    $.ajax({
        url: './../use/json/use_apply.json',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            console.log(data);
            var listText = doT.template($('#use_index').text());
            $('.hot-slide').html(listText(data));
        }
    })