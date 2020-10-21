import React from 'react'
import { createShip } from '../../lib/api'

import ShipForm from './ShipForm'


class ShipNew extends React.Component {
  state = {
    formData: {
      x: '',
      y: '',
      position: ''
    },
    errorMessageX: null,
    errorMessageY: null,
    errorMessagePosition: null
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }

    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })

  }

  handleSubmit = async event => {
    event.preventDefault() //* prevents page reload

    const x = this.state.formData.x
    const y = this.state.formData.y
    const position = this.state.formData.position.toUpperCase().split('').join('')

    if (x > 5 || x < 0) {
      return this.setState({ errorMessageX: 'Invalid x input' })
    } else if (y > 5 || y < 0) {
      return this.setState({ errorMessageY: 'Invalid y input' })
    } else if (position.includes('N')) {
    } else if (position.includes('E')) {
    } else if (position.includes('S')) {
    } else if (position.includes('W')) {
    } else {
      return this.setState({ errorMessagePosition: 'Invalid position input' })
    }
    try {
      this.setState({ errorMessage: null })
      const res = await createShip(this.state.formData) //! request to backend and creates new rover with data supplied in form
      if (res.status === 201) {
        window.location.reload() //* refreshes the page immediately to show the created rover
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  render() {
    return (
      <section className="form-section">
        <div className="form-container">
          <ShipForm
            formData={this.state.formData}
            errorMessageX={this.state.errorMessageX}
            errorMessageY={this.state.errorMessageY}
            errorMessagePosition={this.state.errorMessagePosition}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Deploy Ship"
          />
        </div>
      </section>
    )
  }

}


export default ShipNew

