const nextYear = "2021"
const nextEdition = "3.0"

$( document ).ready(() => {
    $('#year').html(nextYear)
    $('#edition').html(nextEdition)

    $('#owl').click( function(){
        console.log("Weeee!");
        $(this).toggleClass('easter-egg');
    
    })
})