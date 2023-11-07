import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// http://110.111.3.78:3001/api/register     POST

// "email": string
// "password": string
// age: number
// name: string 

export default function RegisterComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const router = useNavigate()
    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        const res = await fetch('http://10.111.3.78:3001/api/register', {
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password, name, age})
        })
        const data = await res.json()
        console.log(data)
        if(data.msg === 'Users created') {
            router('/login', {replace: true})
        }else{
            setError(data.detail)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="text"placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="number" placeholder='Age' onChange={(e)=>setAge(parseInt(e.target.value))} />
            <input type="text"placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            <button type='submit'>Register</button>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </form>
    </div>
  )
}