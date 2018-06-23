// script interazione con i tabs
// le mappe e i canvas vengono riscritti e cancellati ogni volta che si cambia tab



    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();


// primo tab
if (href=="#hidden"){
  //myMap.onChange(clear());
  $(' .leaflet-container').css('opacity', '0');
}
//secondo tab
if (href=="#deriva"){
$('#info').css('opacity', '0');
myMap.onChange(cancella);
$(' .leaflet-container').css('opacity', '1');
}
//terzo tab
if (href=="#percorsi"){
  $(' .leaflet-container').css('opacity', '0');
// $(' .leaflet-container').css('display', 'none');

   finestra();
myMap.onChange(drawPoints);


}
//quarto tab
if (href=="#scoperta"){

  $(' .leaflet-container').css('opacity', '0');
  myMap.onChange(cancella)

  myMap.onChange(scoperta);
}


// quinto tab
if (href=="#confronto"){
  myMap.onChange(cancella);
  myMap.onChange(scoperta);
  $(' .leaflet-container').css('opacity', '0');

  $('.leaflet-container').append(myMap1.onChange(drawPoints));
$('<div>'+myMap.onChange(scoperta)+'</div>').appendTo('.leaflet-container').addClass("scoperta");

}



        $('.process-model li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });
// end  script for tab steps
