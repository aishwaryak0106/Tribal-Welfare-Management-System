var showproducts = function () {
    data = { "action": "selectAll" }
    //alert(data)
    $.post('Model/cordinViewMemberModel.py', data, function (dt) {
        //alert(dt)
        dt = JSON.parse(dt)
        //alert(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><h6><span>Id</span>: " + v.mid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.mname + "</div>"

            s += "<div><h5><span>Community</span>: " + v.tname + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.mid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=cordinEditMemberUpdate&id1=" + v.mid + "' class='btn btn-sm btn-outline-success cart' id='" + v.mid + "'>View Details</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Member ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletemember" }
                $.post('Model/cordinEditMemberDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location = "index_cordin1.py?id=viewMember";
        })
    })
}

$(function () {
    showproducts()

})