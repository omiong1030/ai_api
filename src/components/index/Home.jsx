import React from 'react'
import { Used } from './Used'
import { Logs } from './Logs'
import "../../css/index/home.css"

export const Home = () => {
  return (
    <div className='home'>
      <Used />
      <Logs />
    </div>
  )
}
