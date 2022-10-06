  const db = require("../config/db");
  const postData = (app) => {  
app.post("/event_data", (req, res) => {
  const {event_name, event_about, event_date} = req.body

  const query = "INSERT INTO `event_data`(`event_name`, `event_about`, `event_date`) VALUES (?,?,?)"

  return db.query(query, [event_name, event_about, event_date], (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        error: "true",
        message: "There was an error sending the data",
        code: "500"
      })
    } else {
      res.send({
        error: false,
        message: "ok",
        name: event_name
      });
    }
  })
})
}

module.exports = postData;