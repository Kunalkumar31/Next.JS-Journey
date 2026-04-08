"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Route } from 'next'

interface UserProps {
  name: string
}

const HomePage = () => {
  const router = useRouter();
  const navigate = (route_name: Route) => {
    router.push(route_name);
  }

  return (
    <div>
      <User name="Kunal" />
      <User name="Ram" />
      <User name="Shyam" />
      <User name="Mohan" />
      <User name="Rani" />
      <h1 className='text-center text-3xl bg-amber-500 text-black'>HomePage</h1>
      {/* <Link href="/1">Go to 1 page</Link> */}
      <br />
      {/* <Link href="/2">Go to 2 page</Link> */}

      {/* <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { router.push("/1") }}>Go to 1</button>
      <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { router.push("/2") }}>Go to 2</button> */}

      {/* through function */}

      <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { navigate("/1") }}>Go to 1</button>
      <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { navigate("/2") }}>Go to 2</button>
      <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { navigate("/login") }}> Login Page</button>
      <button className='m-2 p-2 border-4 rounded cursor-pointer' onClick={() => { navigate("/about") }}>Go to About</button>

      <h1 className='text-3xl text-center'>Fetch Data with API in client component </h1>
      <Link className='text-blue-400 border-3 rounded' href="/productlist">Go to product lis-1</Link>

      <h1 className='text-3xl text-center'>Fetch Data with API in Server component </h1>
      <Link className='text-blue-400 border-3 rounded' href="/productlist2">Go to product list-2</Link>

     
    </div>
  )
}
export default HomePage;

const User = (props: UserProps) => {
  return (
    <div>
      <h2 className='text-2xl border-2 m-2.5 p-2 rounded'>User name is: {props.name}</h2>

    </div>
  )
}
