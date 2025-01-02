var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/counViewCordinModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            s += "<div><h6><span>Id</span>: " + v.coid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.coname + "</div>"

            s += "<div><h5><span>Mobile</span>: " + v.comobile + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.coid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=counEditCordinUpdate&id1=" + v.coid + "' class='btn btn-sm btn-outline-success cart' id='" + v.c0id + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Coordinator ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletecordin" }
                $.post('Model/counEditCordinDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            location.href='index_counc1.py?id=viewCoordinator'
        })
    })
}

$(function () {
    showproducts()

})