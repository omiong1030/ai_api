import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "../../css/side/side.css"

// import { Index } from '../main/Index'
// import { Classification } from '../main/Classification'

export const Side = () => {
  return (
    <div className='side'>
      <ul class="sideList">
          <li>
              Home
          </li>
        <li>AI
          <ul>
            <li>
                  Classification
            </li>
            <li>Image Reco</li>
            <li>Object Det</li>
            <li>Semantic Seg</li>
            <li>Instance Seg</li>
            <li>Others</li>
          </ul>
        </li>
        <li>Analysis</li>
        <li>GPUs</li>
        <li>Knowledge</li>
        <li>Usages</li>
    </ul>
      </div>
  )
}

