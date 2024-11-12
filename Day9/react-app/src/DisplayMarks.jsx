import React from "react";
import Marks from "./Marks";

function DisplayMarks() {
  const student = [
    {
      m: 8.95,
      m2: 8.05,
      m3: 7.06,
    },
    {
      m: 8.9651,
      m2: 8.0563,
      m3: 7.0536,
    },
    {
      m: 9.9575,
      m2: 3.05,
      m3: 3.0556,
    },
    {
      m: 8.9555,
      m2: 9.015,
      m3: 3.0536,
    },
    {
      m: 6.9875,
      m2: 8.5205,
      m3: 3.0726,
    },
    {
      m: 9.97525,
      m2: 4.5205,
      m3: 3.07526,
    },
    {
      m: 1.95725,
      m2: 3.52705,
      m3: 8.0526,
    },
    {
      m: 8.905,
      m2: 7.4005,
      m3: 2.406,
    },
    {
      m: 4.9405,
      m2: 9.0455,
      m3: 7.0546,
    },
    {
      m: 2.9545,
      m2: 8.05405,
      m3: 7.0046,
    },
    {
      m: 8.9405,
      m2: 8.54005,
      m3: 5.45006,
    },
    {
      m: 8.9455,
      m2: 4.5205,
      m3: 7.056,
    }
  ];
  return( 

        <>
            {student.map((student,index)=>(
                <Marks key={index} m={student.m} m2={student.m2} m3={student.m3} />
            ))}
            
        </>
);
}

export default DisplayMarks;
