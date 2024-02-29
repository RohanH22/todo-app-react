import { useState } from "react"

export function CreateTodo (){
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    return <div>
        <input style={{padding:10, margin:5, width:130}} type="text" name="" id="title" placeholder="Title" onChange={(e)=>{
            //    const value = e.target.value 
               setTitle(e.target.value)
        }}  /> <br />
        <input style={{padding:10, margin:5, width:130}} type="text" name="" id="description" placeholder="Description" onChange={(e)=>{
            setDesc(e.target.value)
        }}/> <br /><br />

        <button onClick={()=>{
            fetch('http://localhost:3000/todo' , {
                method: "POST",
                body: JSON.stringify({
                    title : title, 
                    description : desc, 
                }),
                headers : {
                    // "Allow-origin": 'http://localhost:5173/',
                    "content-Type": "application/json"
                }
            }
            ).then(async (res)=>{
                const response = await res.json()
            })
        }}>Add Todo</button>
    </div>
}