import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Cartstate } from './Context';
function Filters() {
  const{productDispatch,productstate:{sort,stock},}=Cartstate()
  return (
    <div className='bg-dark text-white p-3'>
      <Form.Check
        type='radio'
        name='r1'
        className='mt-3'
        label='Ascending'
        onChange={()=>productDispatch({
          type:"sortbyprice",
          payload:"lowToHigh",
        })}
        checked={sort==="lowToHigh"?true:false}/>
        <Form.Check
         type='radio'
         name='r1'
         className='mt-3'
         label='Descending'
         onChange={()=>productDispatch({
          type:"sortbyprice",
          payload:"highToLow",
        })}
        checked={sort==="highToLow"?true:false}/>
          <Form.Check
         type='checkbox'
         name='ch1'
         className='mt-3'
         label='Out of Stock'
         onChange={()=>{productDispatch({
          type:"filterbystock",
         })}}
         checked={stock}/>
        <Button variant="secondary" className='mt-5'
          onClick={()=>{productDispatch({
            type:"clearfilters",
          })}}>Clear Filters</Button>
         
    </div>
  )
}

export default Filters
