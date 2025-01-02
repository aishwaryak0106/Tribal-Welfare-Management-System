$(function () {
    v = location.href.split("=")[2]
    $('#tid').val(v)

    data = { "action": "viewtribeinfo","id":v }
    $.post('Model/editTribeinfoUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#tname').val(v.tname)
            $('#tdesc').val(v.tinfo)
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updatetribeinfo" }
            $.post('Model/editTribeinfoUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})