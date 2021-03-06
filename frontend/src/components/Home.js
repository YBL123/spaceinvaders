import React, { useState, useEffect } from 'react'

import ShipNew from './ship/ShipNew'
import { getShip } from '../lib/api'

const Home = () => {

  const [gridState, setGridState] = useState([])
  const [shipState, setShipState] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const gridWidth = 16
    const gridHeight = 11
    let grid = []

    //* creating a 2 dimentional grid. x and y. 
    //* creating arrays within an array. The first array represents the y axis and the arrays nested within represent the x axis.
    for (let i = 0; i < gridHeight; i++) {
      //* This loop will create the number of rows representing the y axis as arrays. This will loop 6 times as stated in gridHeight. 
      grid.push([])
      for (let ii = 0; ii < gridWidth; ii++) {
        grid[i].push({
          //* i represents the first loop which creates the y axis array. ii represents the second loop which creates the x axis arrays
          x: ii, y: i
        })
      }
    }

    //* reversing the order of the cells so that the bottom left corner will start at 0,0
    //* setting the reversed cells to state
    setGridState(grid.reverse())
  }, [])


  useEffect(() => {
    const fetchShip = async () => {
      try {
        const res = await getShip()
        let ships = []
        //* mapping through array of rovers, and pushing the roverId, currentPosition and the empty roverMovements into the rovers array
        res.data.map(ship => {
          ships.push({
            shipId: ship._id,
            currentPosition: {
              x: ship.x,
              y: ship.y,
              position: ship.position
            }
          })
          setShipState(ship) //* setting the rovers array to state -> rovers is a local variable used inside the map above with the result set to state
        })
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    //* if gridstate's length is larger than 1 then call fetchShip function
    if (gridState.length > 1) {
      fetchShip()
    }
  }, [gridState])


  return (
    <div className="app-wrap">
      <div className="title-logo-wrapper">

        <h1 className="title">SPACE INVADERS</h1>
      </div>
      <div className="grid-deploy-wrapper">
        <ShipNew />
        {!isLoading ?
          <div className='grid-wrapper'>
            {gridState.map((cells, i) => {
              return <GridRow key={i} cells={cells} ships={shipState} />
            })}
          </div>
          : null}
      </div>
    </div>

  )

}


export default Home



// //! GridRow & GridCell components start here 

// //* In this component I am using props to map over cells array to get the cell object. I am then mapping throw the rovers array to get the rover object.
// //* Then I am comparing the x and y keys in the rover and cell object to see if they match.  //* A rover will then be created in the GridCell component each time  rovers.map finds a match 
// //* If they do then I am creating the new roverObj and passing it as props to GridCell component
// //* Inside GridRow component -> by returning mainContent I am also returning the GridCell compoenent. 
// //* Returning GridCell 6 times as a result of cells.map

const GridRow = (props) => {
  const { cells, ships } = props

  let mainContent = (
    <div className="grid-cell-row">
      {
        cells.map((cell, i) => {
          let shipObj
          ships.map((ship) => {

          })
          return <GridCell key={i} cell={cell}
          />
        })
      }
    </div>
  )

  return (
    <div>
      {mainContent}
    </div>
  )
}

const GridCell = (props) => {
  const { cell } = props




  return (
    <div className={'grid-cell-item'}>
      <div className="cell-wrapper">
        <div className="cell-id">
          {`${cell.x} , ${cell.y}`}
        </div>
        <div className="box-root">
        </div>
      </div>
    </div>
  )

}