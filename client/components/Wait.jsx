import React from 'react'

function Wait() {
  return (
    <>
      <br />
      <div>
        <h1>WELCOME TO SILENT SPRING</h1>
        <h2 className="about">
          Listen to native bird recordings from Aotearoa with your preferred
          audio device
        </h2>
      </div>
      <div className="container">
        <br></br>
        <div className="card">
          <h2 className="interaction">INTERACTION FEATURES</h2>
          <p>
            Press <b>ENTER</b> to begin
          </p>
          <p>
            <b>Approach</b> and <b>click on</b> cubes to learn more
          </p>
          <p>
            Press <b>SPACE</b> to travel forward in time
          </p>
          <p>
            Press <b>R</b> to return the homepage
          </p>
        </div>
        <div className="card">
          <h2 className="interaction">SPACE NAVIGATION</h2>
          <p>
            <b>Move mouse: </b>Navigate the camera
          </p>
          <p>
            <b>Hold down left click:</b> Move forward
          </p>
          <p>
            <b>Hold down right click:</b> Move backward
          </p>
        </div>
      </div>
    </>
  )
}

export default Wait
