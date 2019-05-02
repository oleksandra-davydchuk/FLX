let $total = $('.total');
$total.val(0);
let $summary = $('.summary');
let $memory;

function calculate(value) {
  $summary.val($summary.val() + value);
}

function calculateResult() {
  $total.val(eval($summary.val()));
}

function clearResult() {
  $total.val(0);
  $summary.val('');
}

function addToMemory() {
  $memory = $total.val(eval($summary.val()));
}

function clearMemory() {
  calculate($memory.val());
  $memory = 0;
}
$('.summary').keypress(function(event) {
  if (event.ctrlKey && event.which === 77) {
    clearMemory();
  }
  let keycode = (event.keyCode ? event.keyCode : event.which);
  switch (keycode) {
    case 13:
      calculateResult();
      break;
    case 10:
      clearResult();
      break;
    case 77:
      addToMemory();
      break;
    case 48:
      calculate('0');
      break;
    case 49:
      calculate('1');
      break;
    case 50:
      calculate('2');
      break;
    case 51:
      calculate('3');
      break;
    case 52:
      calculate('4');
      break;
    case 53:
      calculate('5');
      break;
    case 54:
      calculate('6');
      break;
    case 55:
      calculate('7');
      break;
    case 56:
      calculate('8');
      break;
    case 57:
      calculate('9');
      break;
    case 190:
      calculate('.');
      break;
  }
});