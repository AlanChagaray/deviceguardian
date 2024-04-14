import React from 'react'
import { Statistics } from './Statistics'
import { Info } from './Info'
import { Log } from './Log'
import { Title } from '../Title'

export const Device = () => {
  return (
    <div>
        <Title value="Dispositivo id" />
      <div className="mb-5">
      <div className="grid grid-cols-2 gap-10">
        <div className='bg-slate-900 p-2'>
            <Statistics/>
        </div>
        <div className='bg-slate-900 p-4'>
          <Info/>
        </div>
      </div>
      </div>
      <div>
        <Title value='Dispositivos logs'/>
      <div className='bg-slate-900 p-2'>
        <Log/>
      </div>
      </div>
    </div>
  )
}
