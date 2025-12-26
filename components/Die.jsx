 export default function Die(props) {
    return (
        
            <button 
                className="die" 
                style={{backgroundColor: props.isHeld ? "#59E391" : null}} 
                onClick={props.ifHold}
                area-pressed={(props.isHeld).toString()}
                aria-label={`Die with value ${props.value}, 
                ${props.isHeld ? "held" : "not held"}`}
            >{props.value}</button>
         
    );
}