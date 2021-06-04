export async function getHello (req, res) {

  res.json({
    greeting: 'hello API',
  });

}

export async function getDate (req, res) {

  let resObj = {};
  let dateString = req.params.date;
  let timeStamp;
  let timeStampUnix;
  let timeStampUTC;
  let isNum = /^\d+$/.test(dateString);

  if (isNum){
    timeStamp = new Date(parseInt(dateString));
    timeStampUnix = timeStamp.valueOf();
    timeStampUTC = timeStamp.toUTCString();
  } else {
    timeStamp = new Date(dateString);
    timeStampUnix = timeStamp.valueOf();
    timeStampUTC = timeStamp.toUTCString();
  }

  console.log(timeStampUTC)
  if (timeStampUTC == "Invalid Date") {
    resObj["error"] = "Invalid Date";
    res.json(resObj);
  } else {
    resObj["unix"] = timeStampUnix;
    resObj["utc"] = timeStampUTC;
    res.json(resObj);
  }

}

export async function getTimestamp (req, res) {

  res.json({
    "unix": new Date().getTime(),
    "utc": new Date().toUTCString(),
  });

}