$(function () {
    //user=localStorage.getItem("cid")
    $("#myForm").submit(function (e) {
        $("#msg").html("")
        e.preventDefault()
        if ($("#myForm").valid()) {
            data = getFormData($("#myForm"))
            book=localStorage.getItem("bid")
            //alert(book)
            data = { "action": "feedback", "data": data, "id":book }
            $.post("Model/addFeedbackModel.py", data, function (res) {
                res = JSON.parse(res)
                //alert(res)
                if (res != "") {
                    $("#msg").removeClass("alert-danger")
                    $("#msg").addClass("alert-success")
                    $("#msg").html("Feedback Send Successfully")
                    $("#myform").trigger('reset')
                } else {
                    $("#msg").addClass("alert-danger")
                    $("#msg").removeClass("alert-success")
                    $("#msg").html("Something went wrong!")
                }
            })
            location.href = "index_cust2.py?id=viewFeedback"
        }
    })
})