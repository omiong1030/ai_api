import React from 'react'
import "../../css/index/used.css"
import Imgae1 from "./images/a.png"
import Imgae2 from "./images/b.png"
import Imgae3 from "./images/c.png"

export const Used = () => {
  return (
      <React.Fragment>
          <div className="used_title">
              <h1>
                  {/* <a href="/">Home /</a> */}
                  Home
              </h1>
          </div>
          <div class="used_main_img">
              <div class="subContainer2-1">
                  <img src={Imgae1} alt="グラフ" className="sampleImg"></img>
              </div>
              <div class="subContainer2-2">
                  <img src={Imgae2} alt="グラフ" className="sampleImg"></img>
              </div>
              <div class="subContainer2-3">
                  <img src={Imgae3} alt="グラフ" className="sampleImg"></img>
              </div>
          </div>
      </React.Fragment>
  )
}
