const mongoose = require('mongoose')
const { Schema } = mongoose

const lunchPlaceSchema = new Schema(
  {
    name: String,
    visits: [Date],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

const LunchPlace = mongoose.model('LunchPlace', lunchPlaceSchema)

module.exports = LunchPlace
