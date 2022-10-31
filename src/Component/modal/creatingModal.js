import React from 'react'
import "./modal.css"
export default function CreatingModal() {
  return (
    <div className='container mainContainor mt-5 '>
      {/* <div className='leftImg'>
        <img className='leftImg' width={"238px"} src='Rectangle2.png' alt='rectangleBorder' />

      </div> */}
      <div className='d-flex justify-content-center' >
        <img className='leftImg' width={"238px"} src='Rectangle1.png' alt='rectangleBorder' />
      </div>
      {/* <div className='rightImg'>
        <img width={"238px"} src='rectangle3.png' alt='rectangleBorder' />

      </div> */}
      <div className='row'>
        <div className='col-md-10'>

        </div>
        <div className='col-md-2 mt-2'>
          <button className="btn myConnectButton">
            Connect
          </button>
        </div>
      </div>
      <div className='commingSoonDiv '>

        <div className='comingSoonPic'>
          <img width="138px" className='comingImg' src='comingsoon.png' alt='CommingSoon' />
        </div>

      </div>
      <div className='comingSoonPic d-flex justify-content-center '>
        <p className='randomTextHead'>
          Random Box
        </p>
      </div>
      <div className='row d-flex justify-content-center mb-5 '>
        <div className='col-md-6 firstBox '>
          <div className='firstBoxContainor  d-flex justify-content-center align-items-center'>
            <img width="128px" className='comingImg' src='random.png' alt='CommingSoon' />

          </div>

          <div className='footerDiv border '>

          </div>
        </div>


        <div className='col-md-4 ms-3 firstBox '>
          <div className='topHeaderdiv border'>

          </div>
        </div>

      </div>
    </div >
  )
}
