import React, { useEffect, useState } from "react";
import SlicePizza from "./components/SlicePizza";
import InputsData from "./components/InputsData";
import { mainModule } from "process";
function App() {
  const [rotateDeg, setRotateDeg] = useState<number>(-0.5);
 const [randNumState, setRandNumState] = useState<number>(0);
const [textes,setTextes]=useState<string[]>(["","",""])
const [winner,setWinner]=useState<string>("")
  useEffect(() => {
    if (rotateDeg >= -1080-randNumState*(360/textes.length) && randNumState >= 0) {
      const timer = setTimeout(() => {
        setRotateDeg((prev) => prev - 10);
      }, -rotateDeg / 30);
      return () => clearTimeout(timer);
    } else {
      console.log(randNumState)
      console.log(((rotateDeg-1080)*(textes.length/360)+1)%textes.length)
      console.log(textes)
      setWinner(textes[randNumState])

    }
    console.log(rotateDeg)

  }, [randNumState,rotateDeg]);



  const randomize = () => {
    setWinner("wait for luck")
    setRotateDeg(0)
   setRandNumState(Math.floor(Math.random() * textes.length));
  };


  const nmbrSvg = textes.length;
  const length = Math.sin((360 / nmbrSvg / 2) * (Math.PI / 180)) * 150;
  const lengthY = Math.sqrt(150 ** 2 - length ** 2);


const toArrayList = (data:string,idx:number) => {
const shallowData=textes
shallowData[idx]=data
setTextes(()=>[...shallowData])
}

const deleteVal= (idx:number)=> {
  
console.log(idx)
const shallowData=textes
shallowData.splice(idx,1)
setTextes(()=>[...shallowData])
}


  return (
    <>
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",backgroundColor:"#d499ff"}}>
    <div style={{ width:2*lengthY+"px",height:2*lengthY+"px",marginTop:"5rem",     marginLeft:lengthY/1.5+"px",
          marginRight:textes.length<5?"10rem":"0rem"}}>
      <div
        style={{ 
          aspectRatio: "1/1",
          position: "relative",
     
        }}
      >
 <div style={{position:"absolute",top:"-2rem",left:lengthY/15,height:"50px",width:"50px",backgroundColor:"red",transform:"rotate(75deg)", borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",clipPath:"polygon(0 100%, 0 0, 100% 46%)"}}></div>
        {textes.map((item, idx) => {
          return (
            <SlicePizza
              xAxis={length}
              yAxis={lengthY}
              rotate={(360 / nmbrSvg) * idx}
              key={idx}
              id={idx}
              textes={item}
              generalRotate={rotateDeg}
            />
          );
        })}
   
      </div>
    </div>

    <div style={{marginTop:"5rem"}}>
      {textes.map((item,idx)=>
      <InputsData key={idx} name={(data:string)=>toArrayList(data,idx)} deleteVal={()=>deleteVal(idx)} id={idx} />
    )}
    <button  style={{minWidth:"300px",width:"100%",height:"3rem",backgroundColor:"tomato",borderRadius:"3rem",border:"none",marginTop:"1rem",color:"white",fontWeight:"600"}} onClick={()=>setTextes((prev)=>[...prev,""])}>Add</button></div>
     <button style={{marginTop:"3rem",minWidth:"100px", height:"100px",borderRadius:"50%",backgroundColor:"yellow",border:"1px red dotted"}} onClick={randomize}>Spin</button>
     <div>Winner is {winner}</div>
     </div>
     </>
  );
}

export default App;
