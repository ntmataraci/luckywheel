import React, { FC,useEffect,useState } from "react"
interface Props {
    name:(x:string)=>void,
    deleteVal:(x:number)=>void,
    id:number
}

const InputsData:FC<Props> = ({name,deleteVal,id}) => {
const [val,setVal]=useState("")

useEffect(()=>{
    val.length>1&&name(val)
},[val])


    return (
        <div>
        <input type="text" style={{minWidth:"300px"}} onBlur={(e)=>setVal(e.target.value)} />
        {id>3&&
        <button onClick={()=>deleteVal(id)}>X</button>
}
        </div>
    )
}

export default InputsData