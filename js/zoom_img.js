$(document).ready(function(){ 

    $("#btn1").click(function(){
        var height = $("#imgflag").attr("height");
        var width = $("#imgflag").attr("width");  

        $("#imgflag").attr("height",parseInt(height)+10);
        $("#imgflag").attr("width",parseInt(width)+10);
        
    });

    $("#btn2").click(function(){
        var height = $("#imgflag").attr("height");
        var width = $("#imgflag").attr("width");
        $("#imgflag").attr("height",parseInt(height)-10);
        $("#imgflag").attr("width",parseInt(width)-10);
    });
}); 