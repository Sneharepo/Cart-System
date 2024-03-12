import React from 'react'
import Filters from './Filters'
import { Cartstate } from './Context'
import Product from './Product'
function Home() {
  const {state:{products},productstate:{sort,stock,searchQuery}}=Cartstate() 
  console.log(products)
  const transformproducts=()=>{
    let sortedproducts=products
    if(sort){
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==="lowToHigh"?a.price-b.price:b.price-a.price)
    }
    if(!stock)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedproducts
  }
  return (
    <div>
      <div className='row pt-5'>
      <div className='col-2 bg-dark text-white position-fixed p-3 vh-100 z-1'>
        <Filters/>
        </div>
      <div className='col-10 ms-auto'> 
      <div className='row row-cols-1 row row-cols-sm-5 gap-4'>
      {
        transformproducts().map((item,index)=>{
          return(
            <Product item={item} key={index}/>
          )
        })
      }
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
