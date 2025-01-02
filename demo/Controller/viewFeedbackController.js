$(function () {
    GetBooking()
    
})

function deleteitem(id)
{
    data = getFormData($("#myForm"))
    
    localStorage.setItem("bid",id)

    alert("Edit Feedback..!")
    location.href = "index_cust2.py?id=editFeedback" 

}

function GetBooking() {
    user=localStorage.getItem("cid")
    
    data = { "action": "getFeedback","id":user }
    console.log(data)
    
    $.post("Model/addFeedbackModel.py", data, function (res) {
        //alert(data);
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#stds").html('')

            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.pname + '</td>' +
                    '<td>' + v.quantity + '</td>' +
                    '<td>' + v.price + '</td>' +
                    '<td>' + v.feedback + '</td>' +
                    '<td>' + v.feedbackdate + '</td>' +
                    '<td>' + '<input type="button" onclick="deleteitem('+v.bid+')" value="EDIT" class="btn  btn-sm btn-outline-danger del">'+'</td></tr>'

                $("#stds").append(s)
            }) 
        } else {
                     
        }
        
      
    })
}