$(document).ready(function(){

    $("#btn1").click(function(){

        var name = $("#text1").val(); 
        var rollno = $("#roll").val();
        var n1 = $("#marksn1").val();
        var n2 = $("#marksn2").val();
        var n3 = $("#marksn3").val();

        var total= parseInt(n1) + parseInt(n2) + parseInt(n3);
        var percent = total/3;

        $("#name1").html("Name :"+name);
        $("#rollnumber").html("Roll no :"+rollno);
        $("#sub1").html("Maths :"+n1);
        $("#sub2").html("English :"+n2);
        $("#sub3").html("Science :"+n3);
        $("#totalmarks").html("Total :"+total);
        $("#percentage").html("Percentage :"+percent);

        if(percent >= 70)
        {
            $("#grade").html("Grade :"+"Distinction");
        }
        else if(percent >= 60) 
        {
            $("#grade").html("Grade :"+"Firstclass");
        }
        else if(percent >= 50) 
        {
            $("#grade").html("Grade :"+"Secondclass");
        }
        else if(percent >= 40) 
        {
            $("#grade").html("Grade :"+"Pass");
        }
        else
        {
            $("#grade").html("Grade :"+"Fail");
        }
    });
    
})