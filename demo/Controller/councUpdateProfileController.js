$(function () {
    //v = location.href.split("=")[2]
    v=1
    $('#cid').val(v)

    data = { "action": "viewcouncillor","id":v }
    $.post('Model/officerEditCouncillorUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#cname').val(v.cname)
            $('#caddress').val(v.caddress)
            $('#cemail').val(v.cemail)
            $('#mob').val(v.cmobile)
            $('#uname').val(v.cusername)
            $('#pwd').val(v.cpassword)
            
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updatecouncillor" }
            $.post('Model/officerEditCouncillorUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})