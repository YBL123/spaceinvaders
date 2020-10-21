const ErrorResponse = require('../middleware/errorResponse')
const Ship = require('../models/ship')
const { notFound } = require('../lib/errorMessages') 
const asyncHandler = require('../middleware/async')

// * Create the controllers for your resouce here (index, create), (show, update delete optional)

const shipIndex = asyncHandler(async(req, res, next) => {
  //* returns every document existing inside collection of ships (array)
  //* In larger databases/future it would be better to add pagination and limit the number of documents returned. 

  const ships = await Ship.find() 
  
  if (!ships) {
    return next(new ErrorResponse(notFound, 404))
  }
  res.status(200).json(ships)
})

const shipCreate = asyncHandler(async(req, res, next) =>  {
  //* checking to see if req.body contains positions x & y & position or if it is undefined
  if (!req.body.x || req.body.x === undefined) {
    return next(new ErrorResponse('missing position x', 400))
  }
  if (!req.body.y || req.body.y === undefined) {
    return next(new ErrorResponse('missing position y', 400))
  }
  if (!req.body.position || req.body.position === undefined) {
    return next(new ErrorResponse('missing rover facing position', 400))
  } 

  const newShip = {
    //* Turning x and y into ints and turning position to upperCase
    //* By assigning these keys to the newRover const I am making sure that these are the only 3 params that will be accepted when creating a new Rover, regardless of whatever the req.body may contain 
    x: parseInt(req.body.x),
    y: parseInt(req.body.y),
    position: req.body.position.toUpperCase() 
  }


  //* INVALID IF COORDINATES ARE OUTSIDE OF THE 5*5 GRID 
  if (req.body.x > 5 || req.body.x < 0) {
    return next(new ErrorResponse('Outside of grid parameters', 400))
  }
  if (req.body.y > 5 || req.body.y < 0) {
    return next(new ErrorResponse('Outside of grid parameters', 400))
  }

  //* CREATE ROVER
  const createdShip = await Ship.create(newShip) 

  res.status(201).json(createdShip)
  
})

const shipShow = asyncHandler(async(req, res, next) => {
  //* this id is the object id
  //* whatever goes into /:id is referred to as the req.params.id
  const shipId = req.params.id
  //* if there's a valid mongo id but it's not a 'currently valid' one it will still error now
  const ship = await Ship.findById(shipId)
  if (!ship) {
    return next(new ErrorResponse(notFound, 404))
  }
  res.status(200).json(ship)
})


// //* finds rover by id by params as the id is already contained within the url used by the delete request.
// //* if roverToDelete = true await roverToDelete.remove()
// const roversDelete = asyncHandler(async(req, res, next) => {
//   const roverId = req.params.id
//   const roverToDelete = await Rover.findById(roverId)
//   if (!roverToDelete){
//     return next(new ErrorResponse(notFound, 404))
//   }
//   await roverToDelete.remove()
//   res.sendStatus(204)
// })



// * export your controllers for use in the router

module.exports = {
  index: shipIndex,
  create: shipCreate,
  show: shipShow
  // movement: roversMovement,
  // delete: roversDelete
}