$(function()
{
    data = { 'action': 'item1' }
    $.post('Model/district1.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.dname+'">'+v.dname+'</option>' 
    }) 
    $('#dist').html(cd)   
    })

})