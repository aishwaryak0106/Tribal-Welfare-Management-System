var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/cordinViewManagerModel.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            //s += "<div><h6><span>Id</span>: " + v.mnid + "</div>"

            s += "<div><h5><span>Name</span>: " + v.mname + "</div>"

            s += "<div><h5><span>Mobile</span>: " + v.mnmobile + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.mnid+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=cordinEditManagerUpdate&id1=" + v.mnid + "' class='btn btn-sm btn-outline-success cart' id='" + v.mnid + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Manager ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "deletemanager"}
                $.post('Model/cordinEditManagerDeleteModel.py', data, function (dt) {
                    showDetails()
                })
            }
            window.location = "index_cordin1.py?id=viewManager";
        })
    })
}

$(function () {
    showproducts()

})