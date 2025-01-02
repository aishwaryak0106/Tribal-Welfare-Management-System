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
            s += "<a href='#' id='"+v.tid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=editTribeinfoUpdate&id1=" + v.tid + "' class='btn btn-sm btn-outline-success cart' id='" + v.tid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Community Information ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletetribeinfo" }
                $.post('Model/editTribeinfoDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location = "index_admin1.py?id=viewTribeinfo";
        })
    })
}

$(function () {
    showproducts()

})