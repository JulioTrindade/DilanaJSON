$.getJSON("database.json", function(data) {
    var bands = data.bands;
    var saida="";
    for (i = 0; i < bands.length; i++) {
      if(bands[i].sala == "403"){
        if(bands[i].ativo == true){
            saida += '<table>';
            saida += '<tr>';
            saida += '<td><div class="row">';
                saida += '<div class="col-lg-4 band-img">';
                saida += '<img class = "fotos" src="' + bands[i].foto + '" alt="' + bands[i].nome + '" title="' + bands[i].nome + '">';
            saida += '</div>';
            saida += '</div></td>';
            saida += '<td class="dados"><b>Nome:</b> ' + bands[i].nome + '<br>';
            saida += '<b>Email:</b> ' + bands[i].email + '<br>';
            saida += '<b>Telefone:</b> ' + bands[i].telefone + '<br>';
            saida += '<b>CPF:</b> ' + bands[i].CPF + '<br>';
            saida += '<b>Matrícula:</b> ' + bands[i].matricula + '<br>';
            saida += '<b>Projeto:</b> ' + bands[i].projeto + '<br></td>';
            saida += '</tr>';
            saida += '</table>';
        }
        document.getElementById('tela').innerHTML = saida;
    };
};
});