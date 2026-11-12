import { useState } from 'react';

export function Gols({time}){
    const [placar, setPlacar] = useState(0); 
 
   function somargols() { 
     setPlacar(placar + 1); 
   } 

      

    return(
        <div>
            <h2>Time {time}</h2>
            <p>Placar: {placar}</p>
            <button onClick={somargols}> 
      </button>
        </div>
    )
}