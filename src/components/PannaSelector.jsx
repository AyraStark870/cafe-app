import React from 'react'

export const PannaSelector = ({panna, setpanna}) => {

  const handleClickPanna =()=>{
    setpanna(!panna)
  }
  let elegirpana=panna?'quitar panna':'agregar pana'

  return (
    <div>
      <button
        onClick={handleClickPanna}
        className='panna'
      >
        {elegirpana}
      </button>

    </div>
  )
}
