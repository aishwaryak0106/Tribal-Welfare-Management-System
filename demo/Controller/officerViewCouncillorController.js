var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/officerViewCouncillorModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><h6><span>Id</span>: " + v.cid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.cname + "</div>"

            s += "<div><h5><span>Mobile</span>: " + v.cmobile + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.cid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=officerEditCouncillorUpdate&id1=" + v.cid + "' class='btn btn-sm btn-outline-success cart' id='" + v.cid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Councillor ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletecouncillor" }
                $.post('Model/officerEditCouncillorDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
        })
    })
}

$(function () {
    showproducts()

})