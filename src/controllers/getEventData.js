const db = require("../config/db");

function getData(app) {
    app.get("/eventdata", (req, res) => {
        const query = `SELECT * FROM event_data`
      
        db.query(query, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.send(data);
          }
        })
      })

      app.delete("/eventdata/:id", (req, res) => {
        const { id } = req.params;
        const query = "DELETE FROM `event_data` WHERE id = (?)"
        db.query(query, [id], (error) => {
          if (error) {
            console.error(error);
            return res.status(500).send({
                error: 'true',
                message: 'Erro ao eliminar o evento',
                code: '500'
            })
        } else {
            res.status(200).send({
                error: 'false',
                message: 'event deleted in successfull',
                code: '200'
            })
        }
        })
      })
      
    //   app.get("/ranking/:", (req, res) => {
    //     const { uid } = req.params;
    //     const query = `SELECT * FROM rank WHERE uid = '${uid}'`
    //     db.query(query, (err, data) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         res.send(data)
    //       }
    //     })
    //   })
}

module.exports = getData;