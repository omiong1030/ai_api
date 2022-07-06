import React from 'react'
import { Params } from './Params'
import { DropDirectory } from './DropDirectory'
import "../../css/classification/config.css"

export const Config = () => {
  return (
    <div className='config'>
      <form action="http://localhost:5000/classification" method="POST">
        {/* <DropDirectory /> */}
        <Params />
        <button type="submit" className="submit-button">start</button>
      </form>
    </div>
  )
}
