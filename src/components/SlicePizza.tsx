
import React, { FC } from "react"

interface Props {
    xAxis:number,
    yAxis:number,
    rotate:number,
    textes:string,
    generalRotate:number,
    id:number
}


const SlicePizza:FC<Props> = ({ xAxis, rotate, yAxis,textes,generalRotate,id }) => {
        return (

          <div
            style={{
              position: "absolute",
              transformOrigin: "center bottom",
              transform: `rotate(${rotate+generalRotate}deg)`,
              margin:"0",
              padding:"0",
              top:"0",
              left:"0",
           
            }}
          >
            <svg width={xAxis * 2} height={yAxis}>
              <path
                d={`M${xAxis} ${yAxis} L0 0 M${xAxis} ${yAxis} L${xAxis * 2} 0 Z`}
                stroke="black" 
              />
              <text x={xAxis-textes.length*2.5} y={15}>
                {textes}
              </text>
            </svg>
          </div>
  
        );
      };


export default SlicePizza