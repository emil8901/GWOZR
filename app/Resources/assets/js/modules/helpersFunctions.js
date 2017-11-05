import { addBook } from './addBook';

export function validation(value, values, attr) {
  if(value) {
    values[attr] = value;
  } else {
    values[attr] = 'brak danych';
  } 
}

export function assignmentOfInformation(data, values, returnBook = true) {
  data.forEach(function(obj) {
    for (let attr in obj) {

      // jezeli obiekt ponownie jest tablica
      if(obj[attr] instanceof Array) {
        let newData = obj[attr];
        assignmentOfInformation(newData, values, false);
      } else {
        validation(obj[attr], values, attr);
      }
    }

    if(returnBook) {
      addBook(values);
    }
  });
}
