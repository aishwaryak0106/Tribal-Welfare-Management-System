var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewPackageModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><h6><span>Id</span>: " + v.pid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.pname + "</div>"

            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.pid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=editPackageUpdate&id1=" + v.pid + "' class='btn btn-sm btn-outline-success cart' id='" + v.pid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Package ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletepackage" }
                $.post('Model/editPackageDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location.href="?id=viewPackage"
        })
       
    })
}

$(function () {
    showproducts()

})