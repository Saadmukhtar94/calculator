$(document).ready(function () {
    $('#sum').click(function () {
      let a = Number($('#number1').val());
      let b = Number($('#number2').val());
      let c = a + b;
      $('#result').text(c);
    });
    $('#subtract').click(function () {
      let a = Number($('#number1').val());
      let b = Number($('#number2').val());
      let c = a - b;
      $('#result').text(c);
    });
    $('#multiply').click(function () {
      let a = Number($('#number1').val());
      let b = Number($('#number2').val());
      let c = a * b;
      $('#result').text(c);
    });
    $('#divide').click(function () {
      let a = Number($('#number1').val());
      let b = Number($('#number2').val());
      let c = a / b;
      $('#result').text(c);
    });
    $('#reset').click(function () {
        
        $('#result').text("");
      });
    
  });