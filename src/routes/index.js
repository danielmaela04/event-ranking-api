const getData = require("../controllers/getData");
const addData = require("../controllers/addData");
const eventData = require("../controllers/addEventData");
const getEventData = require("./../controllers/getEventData");

module.exports = (app) => {
    getData(app);
    addData(app);
    eventData(app);
    getEventData(app);

    app.get("/", (req, res) => {
        res.status(404).send("No body returned for response")
    })

    app.get("/*", (req, res) => {
        res.status(404).send({
            error: "true",
            code: "404",
            message: "Page not found"
        })
    })
}
