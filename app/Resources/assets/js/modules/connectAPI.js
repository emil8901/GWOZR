import { validation, assignmentOfInformation } from './helpersFunctions';

$(document).ready(function() {
  $('#find-book').on('submit', function(e) {
    let searchValue = $('#book-title').val(),
        encodeSearchValue = encodeURI(searchValue),
        values = {};

    $.ajax({
      type: 'GET',
      url: `https://gwo.pl/booksApi/v1/search?query=${encodeSearchValue}`,
      beforeSend: function() {
        $('.spinner').fadeIn(100);
        $('.book-list *').remove();
      },
      complete: function() {
        $('.spinner').fadeOut(200);
      },
      success: function(data) {
        if(data.length) {
          $('.main').removeClass('empty');
          assignmentOfInformation(data, values);
        } else {
          $('.main').addClass('empty');
        }
      }
    });

    e.preventDefault();
  });
});
