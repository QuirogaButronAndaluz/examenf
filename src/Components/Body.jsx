import React from 'react'
import '../Style/Body.css'
import señora from '../Assets/señora.png'
import ins from '../Assets/ins.png'
import inv from '../Assets/inv.png'
function Body() {
  return (
    <div className='Body'>
        <div className='Prom'>
            <span className='primertitulo'> Paquete familiar</span>
            <img className='señora' src= {señora} alt="travel" />
        </div>
        <div className='Des'>
            <span className='ti2'>Promocion 2×1</span>
            <img className='destino' src={ins} alt="destinos" />
        </div>
        <div className='Cup'>
            <span className='ti3'>Viaje Boomerang</span>
            <img className='cupones' src={inv} alt="logouno" />
        </div>
    </div>
  )
}

export {Body}
