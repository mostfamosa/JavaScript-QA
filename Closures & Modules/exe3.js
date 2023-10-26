//Let’s make a simple SongsManager
//Effectively, you will be creating a hyper-specific, YouTube Song Manager object
//Did you notice that each URL starts the same way?
//Inside of SongsManager there should be a songs object
//Of course, when we call getSong - it should give us the full URL!

const SongsManager = function () {
    const _prefix = "https://www.youtube.com/watch?v="
    let _songs = {}

    const addSong = (songName, songUrl) => _songs[songName] = songUrl.slice(songUrl.indexOf("=") + 1)
    const getSong = (songName) => prefix + _songs[songName]

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ