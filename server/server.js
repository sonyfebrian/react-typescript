const express = require("express");
const cors = require("cors")

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}


app.use(express.json());

app.use(express.urlencoded({extended: true}));
const db = require("./app/models")

db.sequelize.sync()
.then(() => {
    console.log("Synced db.")
})
.catch((err) => {
    console.log("failed to sync db: " + err.message);
})
app.get("/", (req, res) => {
    res.json({message:"Welcome user"})
});

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


// const db = require("./app/models");
// db.sequelize.sync({force: true})
// .then(() => {
//     console.log("Drop and re-sync db.")
// })
// .then(() => {
//     console.log("Synced db.");

// })
// .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
// })