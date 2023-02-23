const express = require("express");
const { FlightModel } = require("../models/Flight.model");
const flightsRouter = express.Router();


flightsRouter.use(express.json());


flightsRouter.get("/flights", async (req, res) => {
    const query = req.query;
    try {
       const flights = await FlightModel.find( query );
       res.status(200).send(flights);
    }
    catch (err) {
      console.log("Something went wrong");
      console.log(err);
    }
})

flightsRouter.get("/flights/:id", async (req, res) => {
     const ID = req.params.id;
     try {
        const flights = await FlightModel.findOne( { _id: ID} );
        res.status(200).send(flights);
     }
     catch (err) {
       console.log("Something went wrong");
       console.log(err);
     }
})

flightsRouter.post("/flights", async (req, res) => {
    const payload = req.body;
    try {
       const new_flights = new FlightModel(payload);
       await new_flights.save();
       res.status(201).send("Flight details added successfully");
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

flightsRouter.patch("/flights/:id", async (req, res) => {
    const payload = req.body;
    const ID = req.params.id;
    const flights = await FlightModel.findOne({_id: ID});
    try {
        if(!flights) {
            res.send("Flight details for this ID not found");
        } else {
            const updated_flights = await FlightModel.findByIdAndUpdate({ _id: ID}, payload);
            res.status(204).send("Flight details updated successfully");
        }
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

flightsRouter.delete("/flights/:id", async (req, res) => {
    const ID = req.params.id;
    const flights = await FlightModel.findOne({_id: ID});

    try {
        if(!flights) {
            res.send("Flight details for this ID not found");
        } else {
            const deleted_flight = await FlightModel.findByIdAndDelete({_id:ID});
            res.status(202).send("Flight details deleted successfully");
        }
       
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})


module.exports = {
    flightsRouter
}