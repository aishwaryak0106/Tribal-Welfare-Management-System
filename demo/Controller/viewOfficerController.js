var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewOfficerModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><h6><span>Id</span>: " + v.oid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.oname + "</div>"

            s += "<div><h5><span>Mobile</span>: " + v.omobile + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.oid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=editOfficerUpdate&id1=" + v.oid + "' class='btn btn-sm btn-outline-success cart' id='" + v.oid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Officer ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deleteofficer" }
                $.post('Model/editOfficerDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location = "index_admin1.py?id=viewOfficer";
        })
    })
}

$(function () {
    showproducts()

})