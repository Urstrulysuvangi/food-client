import React from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'

export default function Homescreen() {
  return (
    <div>
        <div class="row">

            {pizzas.map(pizza=>{

                return <div className="col-md-4">
                    <div>
                        <Pizza pizza={pizza}/>
                    </div>    
                </div>

            })}    
        </div>
    </div>
  )
}
