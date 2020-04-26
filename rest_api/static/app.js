function show_id(event)
{
    console.log("najechałeś myszka na element")
    var id = this.dataset.id;
    var address = '/get_car_by_type';
    var data = {'type_id':id};
    console.log("bede wchodze na adress ".concat(address).concat(" z danym type_id=".concat(data['type_id'])))
    $.get(address,data, function (data, status) {
        console.log("poraełem dane:");
        console.log(data);
        $('.cars').html(data);
        console.log("podmieniłem dane na stronie");
    });

}



$( document ).ready(function() {
    var li_buttons = $('.type');
    li_buttons.click(show_id);
});