$(function () {
    get_data();
    $('.more').find('a').on('click', get_data)

    function get_data(){
        $.ajax({
            url: './../use/json/use_index.json',
            dataType: 'json',
            type: 'get',
            success: function (data) {
                console.log(data);
                var listText = doT.template($('#use_index').text());
                $('.hot-slide').html(listText(data));
            }
        })
    }
})

