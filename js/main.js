var Escuela;


//alert("bienvenido a mi aplicativo de creacion de Curriculum vitae");
$("#submit-button1").on("click", function() {
    getDataDG();
    
});
$("#submit-button2").on("click", function() {
    getDataDE();
    
});



function getDataDG(){
	var nom_u = $("#nom_u").val();
	var ape_u = $("#ape_u").val();
	var dir_u = $("#dir_u").val();
	var email_u=$("#email_u").val();
	var tel_u = $("#tel_u").val();

	$(".nom_u").html(nom_u);
	$(".ape_u").html(ape_u);
	$(".dir_u").html(dir_u);
	$(".email_u").html(email_u);
	$(".tel_u").html(tel_u);

}
function getDataDE(){
	var nom_e = $("#nom_e1").val();
	var niv_e = $("#niv_e").val();
	var a_i_e = $("#a_i_e").val();
	var a_f_e=  $("#a_f_e").val();
	var papel_e=$("#papel_e").val();

	var Datos_Escolares = {
        nom_e: nom_e,
        niv_e: niv_e,
        a_i_e: a_i_e,
        a_f_e: a_f_e,
        papel_e: papel_e
    }
    alert(Datos_Escolares.nom_e+" "+Datos_Escolares.niv_e+" "+Datos_Escolares.a_i_e+" "+Datos_Escolares.a_f_e+" "+Datos_Escolares.papel_e);
    //Escuela.push(Datos_Escolares);
    imprime_escuela(Datos_Escolares);	
    //imprime_escuela();
}

function imprime_escuela(Escuela) {
    $(".row.HDP").empty();
    alert(Escuela);
    
    for (i = 0; i < Escuela.length; i++) {
        //debugger;
        var objeto1 = Datos_Escolares[i];
        console.log(objeto1);
        var nom_e = objeto1.nom_e;
        var niv_e = objeto1.niv_e;
        var a_i_e = objeto1.a_i_e;
        var a_f_e = objeto1.a_f_e;
        var papel_e = objeto1.papel_e;


        alert(nom_e, niv_e, a_i_e, a_f_e, papel_e);
        /*var rowHtml = "<tr>" +
            "<td>" + carCompany + "</td>" +
            "<td>" + carModel + "</td>" +
            "<td>" + carColor + "</td>" +
            "<td>" + carHP + "</td>" +
            "<td>" + carCilinders + "</td>" +
            "</tr>"
        $("#cars-list tbody").append(rowHtml);*/
    }
}