$(function()
{
    data = { 'action': 'item1' }
    $.post('Model/package1.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.pname+'">'+v.pname+'</option>' 
    }) 
    $('#pname').html(cd)   
    })

})