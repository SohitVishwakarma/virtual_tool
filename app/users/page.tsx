import Link from 'next/link'
import React from 'react'

interface User{
 id:number;
 name:string; 
}

const page = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users' ,
    /* {cache: "no-store"} */
    {next:{revalidate:10} }
    );
 const users:User[]= await res.json();
 console.log(users)

  return (
   <>
   <p className='ml-4 mt-4'>{new Date().toLocaleTimeString()} </p>
   <p className='ml-4 -mb-4'>{new Date().toLocaleDateString()}</p>

   <h1 className=' ml-5 mt-4 mb-4 font-bold text-blue-500'>Users Page</h1>
   <ul className='ml-5'>
    {users.map(user=> <li key={user.id}>{user.id} -{user.name}</li>)}
   </ul>
   
   </>
   
  )
}

export default page
