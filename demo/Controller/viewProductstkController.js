var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewProductsModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><br><h6><span>ID</span>: " + v.pid + "</div>"

            v1 = "<img src='uploads/" + v.pid + "." + v.img + "' width '120px' height='120px'/>"
            s += v1
            s += "<div><br><h5><span>NAME</span>: " + v.pname + "</div>"
            s += "<div><h6><span>available stock  : </span> " + v.stock + "</div>"
           
            s += "<div class='text-center'>"
            //s += "<a href='#' id='"+v.pid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=productStockUpdate&id1=" + v.pid + "' class='btn btn-sm btn-outline-success cart' id='" + v.pid + "'>Update Stock</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Product ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deleteproduct" }
                $.post('Model/editProductDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
        })
    })
}

$(function () {
    showproducts()

})