
//Make a request to the API and get a random word
//Then use that word to make a request to the Google Books API
//You should request a book whose title has that random word
//https://random-word-api.herokuapp.com/word
//https://www.googleapis.com/books/v1/volumes?q=intitle:WORD_HERE

function getRandomWord() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://random-word-api.herokuapp.com/word",
        method: "GET",
        success: function (data) {
          const randomWord = data[0]; 
          resolve(randomWord);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
  
  function searchBookByTitle(randomWord) {
    return new Promise((resolve, reject) => {
      const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`;
  
      $.ajax({
        url: googleBooksApiUrl,
        method: "GET",
        success: function (data) {
          if (data.totalItems > 0) {
            const book = data.items[0];
            resolve(book);
          } else {
            resolve(null);
          }
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
  
  // Usage
  getRandomWord()
    .then((randomWord) => {
      console.log("Random Word:", randomWord);
      return searchBookByTitle(randomWord);
    })
    .then((book) => {
      if (book) {
        console.log("Book Title:", book.volumeInfo.title);
        console.log("Book Author:", book.volumeInfo.authors[0]);
      } else {
        console.log("No books found with the random word in the title.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  