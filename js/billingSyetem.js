$(document).ready(function(){
    var finaltotal=0;
    $("#btn").click(function(){
        var Name = $("#name").val();
        var Qty = $("#qty").val();
        var Price = $("#price").val();
        var Total = parseInt(Qty) * parseInt(Price);
        finaltotal=finaltotal+Total;
        output="";
        output += "<tr>";
        output += "<td>"+Name+"</td>";
        output += "<td>"+Qty+"</td>";
        output += "<td>"+Price+"</td>";
        output += "<td>"+Total+"</td>";                                 
        output += "<td><button type='button' class='btn-delete'>Delete</button></td>";
        output += "</tr>";
        $("#result").append(output);
        $("#total").html(finaltotal);
    });
    $(document).on('click','.btn-delete',function(){
        var tr = $(this).closest("tr");
        var t = tr.find('td:eq(3)').text();
        finaltotal=finaltotal-t;
        $("#total").html(finaltotal);
        tr.remove();
    });
});