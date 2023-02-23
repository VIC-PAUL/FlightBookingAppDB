const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "flight",
    required: true,
  },
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
  BookingModel,
};
