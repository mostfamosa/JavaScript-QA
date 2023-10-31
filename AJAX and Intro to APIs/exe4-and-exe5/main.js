$(document).ready(function () {
    let i = 0
    $("#searchButton").click(function () {
        var searchTerm = $("#searchInput").val();

        if (searchTerm.trim() !== "") {
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
                        $("#gifImg").attr("src", data.data[i].embed_url);
                        $("#counter").text(i+1)
                    } else {
                        $("#gifImg").attr("src", ""); // Clear the image if no results are found
                    }
                },
                error: function (error) {
                    console.error("Error", error);
                }
            });
        }
    });


    $("#nextButton").click(function () {
        i += 1
        i %= 5
        $("#searchButton").click()
        $("#counter").text(i+1)
    });

    $("#backButton").click(function () {
        i -= 1
        if (i == -1)
            i = 4
        $("#searchButton").click()
        $("#counter").text(i+1)
    });

});
