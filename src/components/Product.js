import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Cartstate} from './Context'
function Product({item}) {
  const{state:{cart},dispatch}=Cartstate()
  return (
   <div>
    <div className='col'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={item.image} />   
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.desc}
          <p>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star-half-stroke text-warning"></i></p>
          </Card.Text>
        <div className='d-flex'>
          <div className='flex-grow-1'>${item.price}</div>
        
          <div>
            {cart.some((p)=>p.id===item.id)? <Button variant="danger" onClick={()=>dispatch({
            type:"removefromcart",
            payload:item})}>-Remove</Button>:
            <Button variant="success" disabled={!item.stock}onClick={()=>dispatch({
            type:"addtocart",
            payload:item})}>+ADD</Button>}</div>
        </div>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}



export default Product
