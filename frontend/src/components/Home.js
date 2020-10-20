import React, { useState, useEffect } from 'react'

const Home = () => {

  const [gridState, setGridState] = useState([])

  useEffect(() => {
    const gridWidth = 6
    const gridHeight = 6
    let grid = []


    //* creating a 2 dimentional grid. x and y. 
    //* creating arrays within an array. The first array represents the y axis and the arrays nested within represent the x axis.
    for (let i = 0; i < gridHeight; i++) {
      //* This loop will create the number of rows representing the y axis as arrays. This will loop 6 times as stated in gridHeight. 
      grid.push([])
      for (let ii = 0; ii < gridWidth; ii++) {
        grid[i].push({
          //* i represents the first loop which creates the y axis array. ii represents the second loop which creates the x axis arrays
          x: ii, y: i, active: false //! ref: highlight? may not have used it in the end
        })
      }
    }

    //* reversing the order of the cells so that the bottom left corner will start at 0,0
    //* setting the reversed cells to state
    setGridState(grid.reverse())
    // setGridState(grid)
  }, [])


  return (
    <div className="app-wrap">
      <div className="title-logo-wrapper">

        <h1 className="title">SPACE INVADERS</h1>
      </div>
      <div className="grid-deploy-wrapper">
        <div className='grid-wrapper'>
          {gridState.map((cells, i) => {
            return <GridRow key={i} cells={cells} />
          })}
        </div>
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
  const { cells } = props

  let mainContent = (
    <div className="grid-cell-row">
      {
        cells.map((cell, i) => {
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