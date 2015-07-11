$(document).ready(function(){
  $('#nameInput').append('<input id="studentcount" placeholder="Enter Number of Students">');
  $('#nameInput').append('<button id="newInput">Input Another Name</button>');
  $('#newInput').click(function(){
    var number = $('#studentcount').val();
    console.log(number);
    for (var i = 0; i < number; i++){
      $('#nameInput').append('<div class="clear"></div>');
      $('#nameInput').append('<input class="name">');
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
      $('#' + (index+1)).append('<p>' + element + '</p>');

    });
  });
});