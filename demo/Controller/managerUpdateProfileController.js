$(function () {
    //v = location.href.split("=")[2]
    v=1
    $('#mnid').val(v)

    data = { "action": "viewmanager","id":v }
    $.post('Model/cordinEditManagerUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#mname').val(v.mname)
            $('#address').val(v.mnaddress)
            $('#email').val(v.mnemail)
            $('#mob').val(v.mnmobile)
            $('#uname').val(v.mnusername)
            $('#pwd').val(v.mnpassword)
            
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updatemanager" }
            $.post('Model/cordinEditManagerUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})