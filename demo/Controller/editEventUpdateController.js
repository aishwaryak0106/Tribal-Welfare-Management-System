$(function () {
    v = location.href.split("=")[2]
    $('#oid').val(v)
    data = { "action": "viewevent","id":v }
    $.post('Model/editEventUpdateModel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#ename').val(v.ename)
            $('#edesc').val(v.edesc)
            $('#edate').val(v.addedate)

        })
    })
    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "updateevent", "id":v }
            $.post('Model/editEventUpdateModel.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
            })
        }
        window.location = "index_admin1.py?id=viewEvent";       
    })

})