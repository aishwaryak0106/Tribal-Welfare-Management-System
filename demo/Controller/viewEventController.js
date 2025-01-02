var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewEventModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {
            s += "<div class='box col-lg-3'>"
            v1 = "<img src='uploads/" + v.eid + "." + v.img + "' width '120px' height='120px'/>"
            s += v1
            s += "<div><br><h5><span>NAME</span>: " + v.ename + "</div>"           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.eid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=editEventupdate&id1=" + v.eid + "' class='btn btn-sm btn-outline-success cart' id='" + v.eid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Event ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "delevent" }
                $.post('Model/delevent.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location = "index_admin1.py?id=viewEvent";
        })
    })
}

$(function () {
    showproducts()

})