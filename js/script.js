$(document).ready(function(){
  $('#nameInput').append('<button id="newInput">Input Another Name</button>');
  $('#newInput').click(function(){
    $('#nameInput').append('<div class="clear"></div>');
    $('#nameInput').append('<input class="name">');
  });

  $('#outputArea').prepend('<button id="outputNames">Randomize Seats!</button>')


  var names = [];

  $('#outputNames').click(function(){
    $('.name').each(function(){
      names.push(this.value);
    });
    $('.name').val('');
    names = randomSeat(names);
    $(names).each(function(index, element){
      $('#outputArea').append('<li class="someName">' + element + '</li>');

    });
  });
});