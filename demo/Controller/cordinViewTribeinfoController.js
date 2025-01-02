var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewTribeinfoModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><br><h6><span>Id</span>: " + v.tid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.tname + "</div>"

            s += "<div class='text-center'>"
            //s += "<a href='#' id='"+v.tid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=viewTribeinfoUpdate&id1=" + v.tid + "' class='btn btn-sm btn-outline-success cart' id='" + v.tid + "'>View Details</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        
    })
}

$(function () {
    showproducts()

})