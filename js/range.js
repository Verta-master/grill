// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 8900,
    max: 150000,
    values: [ 8900, 150000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + " руб" );
      $( "#amount-max" ).val( ui.values[ 1 ] + " руб" );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " руб" );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " руб" );
});

$( function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 30,
    max: 94,
    values: [ 30, 94 ],
    slide: function( event, ui ) {
      $( "#amount-min2" ).val( ui.values[ 0 ] + " м2" );
      $( "#amount-max2" ).val( ui.values[ 1 ] + " м2" );
    }
  });
  $( "#amount-min2" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " м3" );
  $( "#amount-max2" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " м3" );
});