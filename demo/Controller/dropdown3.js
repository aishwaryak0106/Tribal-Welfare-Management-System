$(function()
{
    data = { 'action': 'item1' }
    $.post('Model/community.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.tname+'">'+v.tname+'</option>' 
    }) 
    $('#comm').html(cd)  
    })

})