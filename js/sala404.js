$.getJSON("database.json", function(data) {
    var bands = data.bands;
    var saida="";
    for (i = 0; i < bands.length; i++) {
      if(bands[i].sala == "404"){
        if(bands[i].ativo == true){
            saida += '<table>';
            saida += '<tr>';
            saida += '<td><div class="row">';
                saida += '<div class="col-lg-4 band-img">';
                saida += '<img class = "fotos" src="' + bands[i].foto + '" alt="' + bands[i].nome + '" title="' + bands[i].nome + '">';
            saida += '</div>';
            saida += '</div></td>';
            saida += '<td class="dados"><h6>Nome: ' + bands[i].nome + '</h6>';
            saida += '<h6>Email: ' + bands[i].email + '</h6>';
            saida += '<h6>Telefone: ' + bands[i].telefone + '</h6>';
            saida += '<h6>CPF: ' + bands[i].CPF + '</h6>';
            saida += '<h6>Matrícula: ' + bands[i].matricula + '</h6>';
            saida += '<h6>Sala: ' + bands[i].sala + '</h6></td>';
            saida += '</tr>';
            saida += '</table>';
        }
        document.getElementById('tela').innerHTML = saida;
    };
};
});