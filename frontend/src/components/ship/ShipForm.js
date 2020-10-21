import React from 'react'

const ShipForm = ({ formData, handleChange, handleSubmit, buttonText, errorMessageX, errorMessageY, errorMessagePosition }) => (
  <div>
    <form className="rover-deployment-form" onSubmit={handleSubmit}>
      <div>
        <label className="label">X :</label>
        <h3 className="form-h3">( 0 - 5 )</h3>
        <div>
          <input
            className="input"
            placeholder="Rover's x axis position"
            name="x"
            onChange={handleChange}
            value={formData.x}
          />
        </div>
        {errorMessageX ? <div className="err-msg-wrapper" style={{ color: 'red' }}>{errorMessageX}</div> : null}
      </div>
      <div className="field">
        <label className="label">Y :</label>
        <h3 className="form-h3">( 0 - 5 )</h3>
        <div className="control">
          <input
            className="input"
            placeholder="Rover's y axis position"
            name="y"
            onChange={handleChange}
            value={formData.y}
          />
        </div>
        {errorMessageY ? <div className="err-msg-wrapper" style={{ color: 'red' }}>{errorMessageY}</div> : null}
      </div>
      <div className="field">
        <label className="label">Position :</label>
        <h3 className="form-h3">( N, E, S, W )</h3>
        <div className="control">
          <input
            className="input"
            placeholder="Rover Facing Position"
            name="position"
            onChange={handleChange}
            value={formData.position}
          />
        </div>
        {errorMessagePosition ? <div className="err-msg-wrapper" style={{ color: 'red' }}>{errorMessagePosition}</div> : null}
      </div>

      <div className="field">
        <button type="submit" className="deploy-button">{buttonText}</button>
      </div>
    </form>
  </div>
)

export default ShipForm