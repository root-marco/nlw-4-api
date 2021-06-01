import strftime from "strftime";

export async function getHello(req, res) {

  res.json({
    greeting: 'hello API',
  });

}

export async function getDate(req, res) {

  let date = new Date();

  if (/^\d*$/.test(req.params.date)) {
    date.setTime(req.params.date);
  } else {
    date = new Date(req.params.date);
  }

  res.set({
    'Content-Type': 'application/json',
  })

  if (!date.getTime()) {
    res.json({
      error: "Invalid date given",
    });
  } else {
    res.json({
      unix: date.getTime(),
      natural: strftime('%B %d, %Y', date),
    });
  }

}