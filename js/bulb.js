$(document).ready(function(){

    $("#btn").click(function(){
        var currentText  = $("#btn").text();
        if(currentText=="Off")
        {
            $("#img1").attr("src","img/off_bulb.jpg");
            $("#btn").text("On");
        }
        else
        {
            $('#img1').attr("src","img/on_bulb1.jpg");
            $("#btn").text("Off");
        }
    });

    // $("#on").click(function(){
       
    //     $('#img1').attr("src","img/on_bulb_1.jpg");
    //     $("#on").attr("button","off")
    // })
    
    // $("#off").click(function(){
        
    //     $("#img1").attr("src","img/off_bulb.jpg");
    // })
});