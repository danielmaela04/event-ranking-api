const db = require("../config/db");

function getData(app) {
    app.get("/rank", (req, res) => {
        const query = `SELECT * FROM event_ranking`
      
        db.query(query, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.send(data);
          }
        })
      })

      app.get("/rankings", (req, res) => {
        const query = `SELECT count(*) FROM event_ranking`

        db.query(query, (error, data) =>{
          if(error) {
            console.error(error)
            res.status(500).send({
              error: true,
              message: "Erro interno do servidor",
              code: 500
            })
          } else {
            res.status(200).send(data);
          }
        })
      })
      
      app.get("/ranking/:uid", (req, res) => {
        const { uid } = req.params;
        const query = `SELECT * FROM rank WHERE uid = '${uid}'`
        db.query(query, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.send(data)
          }
        })
      })
}

module.exports = getData;