$(document).ready(function(){
  $('#nameInput').prepend('<button id="newInput">Number of Students</button>');
  $('#nameInput').prepend('<input id="studentcount" placeholder=" X">');
  $('#newInput').click(function(){
    $('#listInputs').empty();
    var number = $('#studentcount').val();
    console.log(number);
    for (var i = 0; i < number; i++){
      $('#listInputs').append('<div class="clear"></div>');
      $('#listInputs').append('<input class="name">');
    }
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
      // $('#outputArea').prepend('<li class="someName">' + element + '</li>');
      $('#' + (index+1)).append('<p class="seatname">' + element + '</p>');

    });
  });
});