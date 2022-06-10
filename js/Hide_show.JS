$(document).ready(function(){

    $("#btn").click(function(){
        var currentText = $("#btn").text();
        if(currentText=="Show")
        {
            $("#pw").attr("type","text");
            $("#btn").text("Hide");
        }
        else
        {
            $("#pw").attr("type","password");
            $("#btn").text("Show");
        }
    });
    
});
