const consts = require('./consts');

function handleComplaints(complaint) {
    switch (complaint.type) {
        case consts.FINANCE:
            console.log("Money doesn't grow on trees, you know.");
            break;
        case consts.WEATHER:
            console.log("It is the way of nature. Not much to be done.");
            break;
        case consts.EMOTIONS:
            console.log("It'll pass, as all things do, with time.");
            break;
        default:
            console.log("Unknown complaint type.");
    }
}

module.exports = {
    handleComplaints
};
