function fetchBookInfo(queryType, queryValue) {
  let url;
  if (queryType === "isbn") {
    url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
  } else if (queryType === "title") {
    url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue}`;
  } else {
    console.log("Invalid query type. Supported types are 'isbn' and 'title'.");
    return;
  }

  // Make a fetch request
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(`Title of Book/s (${queryType}) :`)
      data.items.forEach(book => {
        console.log("Title: " + book.volumeInfo.title)
        console.log("Authors: " + book.volumeInfo.authors)

        if (book.volumeInfo.industryIdentifiers == undefined)
          console.log("Identifier: Not Found!")
        else {
          book.volumeInfo.industryIdentifiers.forEach(id => {
            console.log("Identifier: " + id.identifier + ", Type: " + id.type)
          });
        }
        console.log("--------------------")
      });

    })
    .catch(error => {
      console.error("Error: Unable to fetch book information.", error);
    });
}

fetchBookInfo("isbn", 9789814561778); // From Third World to First: The Singapore Story
fetchBookInfo("title", "How to Win Friends and Influence People"); // Dale Carnegie's book
