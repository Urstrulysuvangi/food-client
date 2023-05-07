import React, {useState , useEffect} from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'

export default function Homescreen() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])


  return (
    <div>
        <div class="row">

            {pizzas.map(pizza=>{

                return <div className="col-md-4 p-3">
                    <div className='m-3'>
                        <Pizza pizza={pizza}/>
                    </div>    
                </div>

            })}    
        </div>
    </div>
  )
}
