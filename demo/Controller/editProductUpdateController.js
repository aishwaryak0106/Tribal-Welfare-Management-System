$(function () {
    v = location.href.split("=")[2]
    $('#pid').val(v)
    data = { "action": "viewproduct","id":v }
    $.post('Model/editProductUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#pname').val(v.pname)
            $('#price').val(v.price)
            $('#oprice').val(v.offer)
            $('#qty').val(v.stock)
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            alert(data);
            data = { "data": data, "action": "updateproduct" }
            $.post('Model/editProductUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})