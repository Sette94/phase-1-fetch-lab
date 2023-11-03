function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

}

function renderBooks(books) {
  const main = document.querySelector('main');
  // books.forEach(book => {
  //   const h2 = document.createElement('h2');
  //   h2.innerHTML = book.name;
  //   main.appendChild(h2);
  // });

  console.log(main)

  console.log(books)

  books.forEach(e => {
    console.log(e)
    p = document.createElement('p')
    p.textContent = e.name

    p.classList.add('pages')

    li = document.createElement('li')
    li.textContent = `Pages ${e.numberOfPages}`

    p.append(li)
    main.append(p)

    // liPages = document.querySelector('pages')
    // console.log(liPages)
    // liPages.textContent = e.numberOfPages



  })

}

document.addEventListener('DOMContentLoaded', function () {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))

});
