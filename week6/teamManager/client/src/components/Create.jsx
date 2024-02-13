import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {


    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [ price,setPricer] = useState("")
    

    const nav = useNavigate()
    

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("it is working")
        const tepObjectMovie = {
            title,
            description,
            price,
            
        }

        axios.post("http://localhost:5000/api/Product ", tepObjectMovie)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
        .catch(err=> console.log("❌❌❌❌❌❌",err))
    }



  return (
      <div>
        
         
          <hr />
          <form onSubmit={SubmitHandler}>
              <div>
                  title:
                    <input  value={title} onChange={e =>{setTitle(e.target.value)}}/>
              </div>
              <div>
              description:
                    <input  value={description} onChange={e =>{setDescription(e.target.value)}}/>
              </div>
              <div>
              price:
                    <input type='number'  value={price} onChange={e =>{setPricer(e.target.value)}}/>
              </div>
          
              <button>Add Product  </button>
              
          </form>
      </div>
  )
}

export default Create