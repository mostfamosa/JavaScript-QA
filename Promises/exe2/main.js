let word = null

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
                console.log("Success, got data\n", data);
                if (data.data.length > 0) {
                    $("#gifImg").attr("src", data.data[0].embed_url);
                } else {
                    $("#gifImg").attr("src", ""); // Clear the image if no results are found
                }
            },
            error: function (error) {
                console.error("Error", error);
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

getRandomWord()
    .then((wordParam) => {
        word = wordParam
        console.log(word)
        $("#searchInput").val(word);
        let gifPromis = getRandomGif(word)
        return Promise.all([gifPromis])
    })
    .then((PromiseResult) => {
        let gif = PromiseResult
        console.log(gif)
    })
