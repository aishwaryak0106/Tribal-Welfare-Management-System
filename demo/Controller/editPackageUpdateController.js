$(function () {
    v = location.href.split("=")[2]
    $('#pid').val(v)

    data = { "action": "viewpackage","id":v }
    $.post('Model/editPackageUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#pname').val(v.pname)
            $('#pdesc').val(v.pdesc)
            
        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updatepackage" }
            $.post('Model/editPackageUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
    })

})