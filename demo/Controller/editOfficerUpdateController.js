$(function () {
    v = location.href.split("=")[2]
    $('#oid').val(v)

    data = { "action": "viewofficer","id":v }
    $.post('Model/editOfficerUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#oname').val(v.oname)
            $('#address').val(v.oaddress)
            $('#email').val(v.oemail)
            $('#mob').val(v.omobile)
            $('#uname').val(v.ousername)
            $('#pwd').val(v.opassword)
            $("option[value='"+v.district+"']").prop("selected",true)

        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updateofficer" }
            $.post('Model/editOfficerUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }       
    })

})