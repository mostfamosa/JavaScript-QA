const getTime = function (func) {
    const currentTime = new Date();
    func(currentTime);
  }

const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
  getTime(returnTime)