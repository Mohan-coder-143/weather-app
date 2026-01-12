import React, { useState } from 'react'
import axios from 'axios'


const Read = () => {
  //state
  const[Datas,setDatas]=useState([])
  const handledatas=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setDatas(res.data);
            console.log(Datas);

    })
    

  }
  return (
    <>
        <div>Read</div>
          <ol>

        {Datas.map((val,ind)=>(
          <li key={ind}>{val.email}{val.username}</li>
        ))}
                  </ol>

        <button onClick={handledatas}>get</button>

    </>
  )
}

export default Read

