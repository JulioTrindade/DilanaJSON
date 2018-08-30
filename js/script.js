

$.getJSON("database.json", function(data) {
  var bands = data.bands;
  var saida;
  for (i = 0; i < bands.length; i++) {
    saida += '<div class="row">';
    saida += '<div class="col-lg-4 band-img">';
    saida += '<img src="' + bands[i].picture + '" alt="' + bands[i].name + '" title="' + bands[i].name + '">';
    saida += '<h6> ' + bands[i].description + '</h6>';
    saida += '</div>';
    saida += '</div>';
  }

  document.getElementById('tela').innerHTML = saida;
});