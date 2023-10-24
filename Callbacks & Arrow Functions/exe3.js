const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

  const alertData = function (data) {
    alert(data);
  };
  
  const logData = function (data) {
    console.log(data);
  };
  
  displayData(alertData, logData, "I like to party")