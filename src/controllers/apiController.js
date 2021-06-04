import strftime from "strftime";

export async function getHello(req, res) {

  res.json({
    greeting: 'hello API',
  });

}

export async function getDate(req, res) {

  let resObj = {};
  let date = req.params.date;

  if (date.includes("-")) {
    resObj = {
      "unix": new Date(date).getTime(),
      "utc": new Date(date).toUTCString(),
    };
  } else {
    date = parseInt(date);
    resObj = {
      "unix": new Date(date).getTime(),
      "utc": new Date(date).toUTCString(),
    };
  }

  if (!resObj["unix"] || !resObj["utc"]) {
    res.json({
      "error": "Invalid Date",
    });
  } else {
    res.json(resObj);
  }


}