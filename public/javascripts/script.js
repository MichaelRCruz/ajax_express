$(function() {
  $('#submit').click(function(event) {

    console.log('jQuery works')

    var name = $('#city').val();
    var state = $('#state').val();
    var population = $('#population').val();
    var capital = $('#capital').val();

    $.post( "http://localhost:3000/cities", { "name": name, "state": state, "population": population, "capital": capital }, function(event) {
      event.preventDefault()
    }, "json");

    event.preventDefault();
  })
});
