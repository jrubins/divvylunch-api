const express = require('express')

const LunchPlace = require('../models/lunchPlace')

const LunchPlacesRouter = express.Router()

/**
 * Returns lunch places.
 */
LunchPlacesRouter.get('/', async (req, res) => {
  try {
    const lunchPlaces = await LunchPlace.find({})

    res.status(200).send(lunchPlaces)
  } catch (err) {
    res.status(500).send(err)
  }
})

/**
 * Creates a new lunch place.
 */
LunchPlacesRouter.post('/', async (req, res) => {
  try {
    const lunchPlace = new LunchPlace(req.body)

    await lunchPlace.save()

    res.status(201).send(lunchPlace)
  } catch (err) {
    res.status(500).send(err)
  }
})

/**
 * Marks a lunch place as visited.
 */
LunchPlacesRouter.post('/:id/visited', async (req, res) => {
  try {
    const { id } = req.params

    const lunchPlace = await LunchPlace.findById(id)
    lunchPlace.visits.push(Date.now())

    await lunchPlace.save()

    res.status(200).send(lunchPlace)
  } catch (err) {
    res.status(500).send(err)
  }
})

/**
 * Deletes a lunch place.
 */
LunchPlacesRouter.delete('/:id', async (req, res) => {
  try {
    await LunchPlace.findByIdAndRemove(req.params.id)

    res.status(200).send({})
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = LunchPlacesRouter
