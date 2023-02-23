const express = require("express");
const { BookingModel } = require("../models/Booking.model");

const bookRouter = express.Router();


bookRouter.use(express.json());

bookRouter.post("/booking", async (req, res) => {
    const payload = req.body;
    try {
        const booking = new BookingModel(payload)
        await booking.save()
        res.status(201).send("Booked flight successfully");
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

bookRouter.get("/dashboard", async (req, res) => {
    const query = req.query;
    try {
        const booking= await BookingModel.find(query)
        res.status(200).send({Dashboard: booking})
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

module.exports = {
    bookRouter
}