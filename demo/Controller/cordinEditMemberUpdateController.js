$(function () {
    v = location.href.split("=")[2]
    $('#mnid').val(v)

    data = { "action": "viewmember","id":v }
    $.post('Model/cordinEditMemberUpdateModel.py', data, function (dt) {
        //alert(dt)
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#mname').val(v.mname)
            $('#comm').val(v.tname)
            $('#gender').val(v.mgender)
            $('#bdate').val(v.dob)
            $('#edu').val(v.edu)
            
        })
    })
})