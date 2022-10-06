const { randomUUID } = require("crypto");
const db = require("../config/db")
module.exports = (app) => {
app.post("/add", (req, res) => {
    const {name, opinion} = req.body
    const uid = randomUUID();
  
    const query = "INSERT INTO `event_ranking`(`uid`, `name`, `opinion`) VALUES (?,?,?)"
  
    return db.query(query, [uid, name, opinion], (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "true",
          message: "ok",
          code: "500"
        })
      } else {
        res.send({
          error: false,
          message: "ok",
        });
      }
    })
  })
}