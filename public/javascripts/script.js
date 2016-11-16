$(function() {
  $('#submit').click(function(event){
    console.log('jQuery works')
    // $.post( "http://localhost:3000/", { func: "getNameAndTime" }, function( data ) {
    //   console.log( data.name ); // John
    //   console.log( data.time ); // 2pm
    // }, "json");


    event.preventDefault();
  })
});
