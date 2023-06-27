const tourController = require('../controllers/tour.controller');

const tourRouter = require('express').Router()


tourRouter.get("/", tourController.getTours);
tourRouter.post("/", tourController.postTours)
tourRouter.get("/:id", tourController.getToursById);
tourRouter.patch("/:id", tourController.updateToursById)
tourRouter.delete("/:id", tourController.deleteToursById);

module.exports = tourRouter