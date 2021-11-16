import React, {useState} from 'react'
import { SaborTarta } from './SaborTarta';

export const TartaSelector = ({tarta, settarta}) => {
  const [saborTarta, setSaborTarta] = useState("fresa");

  const handleClickTarta =()=>{
    settarta(!tarta)
  }
  const sobreLaTarta=tarta?'elegir sabor':'incluir tarta'

  const colorSabor = {
    'limon': '#E5FBB8',
    'chocolate': '#E2C2B9',
    'fresa': '#FFCCD2',
  }


  return (
   <div>
    <button
      onClick={handleClickTarta}
        style={{ backgroundColor: tarta ? colorSabor[saborTarta] : "#F4EEE8" }}


    >
      {sobreLaTarta}
    </button>
    { tarta && <SaborTarta setSaborTarta={setSaborTarta} /> }
   </div>
  )
}
