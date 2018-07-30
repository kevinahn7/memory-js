import { pingPong } from './ping-pong';
import './styles.css';

$(document).ready(function() {
  $('#ping-pong-form').submit(function(e) {
    e.preventDefault();

    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});