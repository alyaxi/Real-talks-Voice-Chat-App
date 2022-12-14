require("dotenv").config();
const express = require("express");
const app = express()
const router = require("./routes");
const DbConnect = require("./database");
const cors = require("cors");

const PORT = process.env.PORT = 5500;
const corsObject = {
    origin: "http://localhost:3000",
}

app.use(cors(corsObject))



app.use(express.json())
// app.use(express.urlencoded({ extended: false }));

app.use(router)
DbConnect()
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
