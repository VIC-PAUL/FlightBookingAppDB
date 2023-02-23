const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.route");
const { flightsRouter } = require("./routes/Flight.route");
const {bookRouter} = require("./routes/Booking.route");
require('dotenv').config()

const app = express();


app.use(express.json());


app.use("/api", userRouter);
app.use("/api", flightsRouter);
app.use("/api", bookRouter);
app.get("/", (req, res) => {
    res.send("Welcome to Flight Booking API");
})


app.listen(process.env.port, async () => {
    try {
       await connection;
       console.log(`Server is running on port ${process.env.port}`);
    }
    catch (err) {
          console.log(err);
          console.log("Some error occured while connecting to the server");
    }
    
})