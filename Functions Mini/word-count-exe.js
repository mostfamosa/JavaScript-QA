const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};


function cleanText(text) {
    return text.toLowerCase().replace(new RegExp(`[${specialChars.join('')}]`, 'g'), ' ');
}

function countWords(text) {
    const words = text.split(/\s+/).filter(word => word !== '');
    for (const word of words) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }
}

function startWordCounting() {
    const cleanedText = cleanText(story);
    countWords(cleanedText);
    console.log(wordCounts);
}

startWordCounting();
