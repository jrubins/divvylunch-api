const LunchPlacesRouter = require('./lunchPlaces')

/**
 * The different route handlers for the application.
 *
 * @param {Object} app
 */
module.exports = {
  routeHandlers: app => {
    app.use('/lunch_places', LunchPlacesRouter)
  },
}
