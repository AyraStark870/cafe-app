
import React, {useState} from 'react'
import { PannaSelector } from '../PannaSelector'
import { TartaSelector } from '../TartaSelector'


export const Card = ({cafecito}) => {
  const {url, title, price} = cafecito

  const [panna, setpanna] = useState(false)
  const [tarta, settarta] = useState(false)
  // const [orden, setorden] = useState((0))


  const pannaPrice = panna ?8 :0
  const tartaPrice = tarta ?12 :0

  const totalPrice = pannaPrice+ tartaPrice+price
  const labelPanna = panna? ' con panna': ''
  const labelTarta = tarta ? ' incluye tarta' : ''

//
  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src= {url} alt={title}/>
      <p > <span style={{ color: '#630000' }} > {`$ ${totalPrice}`} </span> {`${labelPanna}${labelTarta}`}</p>

      <PannaSelector  panna={panna} setpanna={setpanna} />
      <TartaSelector tarta={tarta} settarta={settarta} />

    </div>
  )
}
