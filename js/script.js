// EVENTO ASOCIADO AL ONCLICK DEL BOTON RESUMEN
function getResumen() {
    if (document.getElementById("cantidad").value == "") {
        //ACTUALIZACION TEXTO
        document.getElementById("monto_total").innerHTML = "Total a Pagar: $";
    }
    else {
        //TOMAMOS EL VALOR TOTAL DEL TICKET POR LA CANTIDAD DE TICKETS COMPRADOS
        var valor_total_ticket = parseInt(document.getElementById("cantidad").value) * 200;
        //PORCENTAJE ASOCIADO A CADA CATEGORIA
        var porcentaje_categoria_seleccionada = parseInt(document.getElementById("categoria_id").value);
        //CALCULO MONTO A DESCONTAR
        var monto_descuento = ((porcentaje_categoria_seleccionada * valor_total_ticket) / 100).toFixed(2);
        //CALCULO MONTO A PAGAR
        var monto_pagar = valor_total_ticket - monto_descuento;
        //ACTUALIZACION TEXTO
        document.getElementById("monto_total").innerHTML = "Total a Pagar: $" + monto_pagar;
    }
}