// * manage incoming requests here 

const router = require('express').Router()
const ship = require('../controllers/ship')

router.route('/ship') //* any route that comes in with that, if its a GET hand it off to index etc. Handing off to the correct one by verb.
  .get(ship.index)
  .post(ship.create)

router.route('/ship/:id')
  .get(ship.show)
//   .delete(ships.delete)

// router.route('/ships/movement')
//   .post(ships.movement)


module.exports = router //* export entire router


// * Export your router! you will need to register this as middleware in "index.js" !