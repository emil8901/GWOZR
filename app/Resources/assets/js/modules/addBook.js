export function addBook(values) {
  $('.book-list').append(`
    <div class="col-lg-4 col-sm-6">
      <div class="book">
        <div class="book-nested">
          <p class="book-info">
            <span class="book-info--question">przedmiot</span>
            <span class="book-info--answer">${values['subject']}</span>
          </p>
          <p class="book-info">
            <span class="book-info--question">poziom</span>
            <span class="book-info--answer">${values['school']}</span>
          </p>
          <p class="book-info">
            <span class="book-info--question">rodzaj</span>
            <span class="book-info--answer">${values['type']}</span>
          </p>
          <p class="book-info">
            <span class="book-info--question">liczba stron</span>
            <span class="book-info--answer">${values['pages_count']}</span>
          </p>
          <p class="book-info">
            <span class="book-info--question">ISBN</span>
            <span class="book-info--answer">${values['isbn']}</span>
          </p>
          <p class="book-info">
            <span class="book-info--question">MEN</span>
            <span class="book-info--answer">${values['men']}</span>
          </p>
          <a href="${values['url']}" class="button-link" target="_blank">Przejdź do księgarni</a>
        </div>
        <img class="book__img" src="${values['cover']}" alt="">
        <span class="book-title">${values['title']}</span>
        <span class="book-author">${values['author']}</span>
      </div>
    </div>
  `);
}
