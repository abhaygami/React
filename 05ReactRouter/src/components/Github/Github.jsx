import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setdata] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/abhaygami')
        .then(Response => Response.json())
        .then(data => {
            setdata(data)
        })
    },[])

  return (
    <div className='bg-gray-700 text-white'>
      Github Followers : {data.followers}
        <img src={data.avatar_url} width="300" />
    </div>
    
  )
}

export default Github
