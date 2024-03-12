import React, { useEffect, useState } from 'react'
import {Cartstate} from './Context'
import{AiOutlineDelete}from "react-icons/ai"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Cart() {
   const {state:{cart},dispatch}=Cartstate()
   const[total,setTotal]=useState(0)
   useEffect(()=>{
    setTotal(
      cart.reduce((acc,curr)=>acc+Number(curr.price*curr.qty),0)
    )
  },[cart])
  return (
    <div>
     <div className='row pt-5'>
     <div className='col-10'>
 {
 cart.map((item,index)=>{
 return (
 <div className='row align-items-center'>
 <div className='col-2'><img src={item.image} alt='' className='img-fluid h-50 w-50'/></div>
 <div className='col-2'>{item.name}</div>
 <div className='col-2'> 
 <Form.Select aria-label="Default select example"
 value={item.qty}
 onChange={(e)=>{
 dispatch({
 type:"changeqty",
 payload:{id:item.id,qty:e.target.value}
 })
 }}>
 {[...Array(item.stock).keys()].map((q)=>{
 return <option key={q+1}>{q+1}</option>
 })}
 
 
 </Form.Select></div>
 <div className='col-2'>$ {item.price}</div>
 <div className='col-2'>< AiOutlineDelete className='text-primary' onClick={()=>dispatch({
 type:"removefromcart",
 payload:item
 })}/></div>
 </div>
 )
 })
}
 
 

 </div>
 <div className='col-2 bg-dark text-white p-3 fs-5'>
 <span>Subtotal of {cart.length} items</span><br/><br/>
 <span className='mt-4'>Amount: $ {total}</span>
 <span><Button variant="success" className='mt-4'>Proceed to Pay</Button></span>
 </div>
</div>
 </div>
 )
}

export default Cart
