import React, { useEffect } from 'react'
import { useState } from 'react'
import parameter from "./parameter.json"

export const Params = () => {

    useEffect(() => {
        console.log(parameter["train"])
    }
    )

    const [param, setParam] = useState();

    const handleParam = (event) => {
        var param = event.target.value;
        console.log(param)
    }

  return (
    <div>
        <input type="text" name='title' onChange={handleParam}/>
    </div>
  )
}
