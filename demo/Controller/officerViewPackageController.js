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
            //s += "<a href='#' id='"+v.pid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=viewPackageUpdate&id1=" + v.pid + "' class='btn btn-sm btn-outline-success cart' id='" + v.pid + "'>View Details</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        
    })
}

$(function () {
    showproducts()

})