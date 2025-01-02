$(function () {
    //v = location.href.split("=")[2]
    v=1
    $('#coid').val(v)

    data = { "action": "viewcordin","id":v }
    $.post('Model/counEditCordinUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#cname').val(v.coname)
            $('#caddress').val(v.coaddress)
            $('#cemail').val(v.coemail)
            $('#mob').val(v.comobile)
            $('#uname').val(v.cousername)
            $('#pwd').val(v.copassword)
            
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updatecordin" }
            $.post('Model/counEditCordinUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})