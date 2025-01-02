$(function () {
    v = location.href.split("=")[2]
    $('#tid').val(v)

    data = { "action": "viewtribeinfo","id":v }
    $.post('Model/cordinViewTribeinfoDetailModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#tname').val(v.tname)
            $('#tdesc').val(v.tinfo)
            
        })
    })

})