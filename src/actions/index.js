export function selectBook(book) {
  // console.log('a book has been selected: ', book.title);
  // selectbook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
