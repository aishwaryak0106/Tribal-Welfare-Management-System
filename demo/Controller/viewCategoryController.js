var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewCategoryModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><br><h6><span>ID</span>: " + v.cid + "</div>"

            v1 = "<img src='uploads/" + v.cid + "." + v.cimage + "' width '120px' height='120px'/>"
            s += v1
            s += "<div><br><h5><span>NAME</span>: " + v.cname + "</div>"
           
            s += "<div class='text-center'>"
            //s += "<a href='#' id='"+v.cid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            //s += "<a href='?id=categoryUpdate&id1=" + v.cid + "' class='btn btn-sm btn-outline-success cart' id='" + v.cname + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Category ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "delcate" }
                $.post('Model/delcate.py', data, function (dt) {
                    showDetails()
                })
            }
        })
    })
}

$(function () {
    showproducts()

})