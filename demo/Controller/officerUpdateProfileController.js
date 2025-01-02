$(function () {
    //v = location.href.split("=")[2]
    v=1
    $('#oid').val(v)

    data = { "action": "viewofficer","id":v }
    $.post('Model/officerUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#oname').val(v.oname)
            $('#address').val(v.oaddress)
            $('#oemail').val(v.oemail)
            $('#mob').val(v.omobile)
            $('#uname').val(v.ousername)
            $('#pwd').val(v.opassword)            
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
            $.post('Model/officerUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})