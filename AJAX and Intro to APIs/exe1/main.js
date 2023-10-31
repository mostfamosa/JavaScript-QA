function fetch(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  $.ajax({
    method: "GET",
    url: url,
    success: function (data) {
      if (data.totalItems == 0)
        alert("Error: Unable to fetch book information.");
      else {
        console.log(data);
        $("#bookAuthor").val(data.items[0].volumeInfo.authors)
        $("#bookTitle").text(data.items[0].volumeInfo.title)
        $("#bookDescription").text(data.items[0].volumeInfo.description)
      }
    },
    error: function () {
      alert("Error: Unable to fetch book information.");
    }
  });
}

$(document).ready(function () {
  $("#fetchButton").click(function () {
    fetch($("#fetchInput").val());
  });
});

// You can now call the fetch function with different ISBNs to get book information
// fetch("9780575087057"); // Name of the Wind
// fetch("9782806269171"); // The Little Prince: Book Analysis
// fetch("1440633908");     // Of Mice and Men by John Steinbeck
// fetch("9781945048470"); // The Alchemist by Paulo Coelho
// fetch("9780307417138"); // Hitchhiker’s Guide to the Galaxy
