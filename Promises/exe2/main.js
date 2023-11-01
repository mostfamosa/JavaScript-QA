let word = null
let book = null
let gif = null

function getRandomGif(searchTerm) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search",
            data: {
                q: searchTerm,
                api_key: "3pCy6CJ5u0L1pYMutgeq4cx7VGPlBR2q",
                limit: 5
            },
            success: function (data) {
                if (data.data.length > 0) {
                    console.log(data.data[0])
                    gif = data.data[0]
                    resolve(data.data[0]);
                } else {
                    reject("No GIF found for the random word.");
                }
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

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

function getRandomBook(word) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes",
            data: {
                q: word,
                maxResults: 1
            },
            success: function (bookData) {
                if (bookData.items && bookData.items.length > 0) {
                    console.log(bookData.items[0].volumeInfo.title)
                    book = bookData.items[0].volumeInfo.title
                    resolve(bookData.items[0].volumeInfo.title);
                } else {
                    reject("No book found for the random word.");
                }
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

getRandomWord()
    .then((generatedWord) => {
        word = generatedWord;
        $("#searchInput").val(word);
        return Promise.all([getRandomBook(word), getRandomGif(word)]);
    })
    .then(([bookTitle, gifData]) => {

        $("#bookTitle").text("Book Title: " + bookTitle);

        if (gifData) {
            $("#gifImg").attr("src", gifData.embed_url);
        } else {
            $("#gifImg").attr("src", "");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
        if (error == "No GIF found for the random word.") {
            $("#gifImg").attr("src", "https://giphy.com/embed/zLCiUWVfex7ji");
            $("#bookTitle").text("Book Title: Check The Console!" );
        }
        if (error == "No book found for the random word.") {
            $("#bookTitle").text("Book Title: No Match Found !" );
        }
        
    });