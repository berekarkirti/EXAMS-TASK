import React, { useState } from "react";

const Counter = () => {
let [Counter , setCounter] = useState(0);

  // --prime--
  let Prime = (num) => {
     if (num <= 1) return false;

     if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) 
      {
        return false;
      }
    }
    return true;
  };

  // ---com--
  const Com = (num) => 
  {
    return num > 1 && !Prime(num);
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color:'gray',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600'}}>Counter</h1>
      <h2 style={{color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'40px',border:'none',fontWeight:'600'}}>Count: {Counter}</h2>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%"}}>
            <button onClick={()=>setCounter(Counter > 0 ? Counter - 1 : 0)} style={{color:'gray',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600'}}>-1</button>
            <button onClick={()=>setCounter(0)}                             style={{color:'gray',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600'}}>Reset Count</button>
            <button onClick={()=>setCounter(Counter + 1)}                   style={{color:'gray',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600'}}>+1</button>
      </div>
      <h3 style={{color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600',marginTop:'40px'}}>Composite Number: {Com(Counter) ? "true" : "false"}</h3>
      <h3 style={{color:'teal',padding:'10px 20px',borderRadius:'8px',fontSize:'35px',border:'none',fontWeight:'600',marginTop:'30px'}}>Prime Number: {Prime(Counter) ? "true" : "false"}</h3>
    </div>
  );
};

export default Counter;