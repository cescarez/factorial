var factorial = 1;

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();

    var inputNum = parseInt($('input#number').val());

    if (inputNum < 0) {
      $('#output').text('A factorial cannot be calculated from a negative number. Please enter a non-negative integer.');
    } else if (inputNum === 0) {
      $('#output').text('0! = 1');
    } else if (inputNum > 0) {
      for (i = inputNum; i > 1 ; i--) {
        factorial *= i;
      }
      $('#output').text(inputNum + '! = ' + factorial);
    }
  });
});
