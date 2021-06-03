import strftime from "strftime";

export async function getHello(req, res) {

  res.json({
    greeting: 'hello API',
  });

}

export async function getDate(req, res) {

  const date = req.params.date;

  res.json({
    "unix": new Date(date).getTime(),
    "utc": new Date(date).toUTCString(),
  });

}