import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Main = () => {

    const [Products, setProduct] = useState([])
                                        
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/products/")
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => {
            console.log(err)
        })
        
    },[])

    


  return (
      <div>
          ALL products
      <p></p>
          {/* {JSON.stringify(products)} */}

          {
              Products.map((oneProduct) => {
                  return (
                      <div key={oneProduct._id}>
                          <Link to={"/products/" + oneProduct._id} >
                              <h3>{oneProduct.title}</h3>
                              </Link>
                              <h3>{oneProduct.description}</h3>
                          <p>Released: {oneProduct.releasePrice}</p>
                          
                          
                          <br />
                         
                          <hr/>
                      </div>
                  )
              })
          }


    </div>
  )
}

export default Main