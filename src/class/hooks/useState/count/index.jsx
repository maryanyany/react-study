import { useState } from "react"

export default function Count(){

const [count, setCount] = useState(0)

function handleCount(){
    setCount(count+1)
}
    return(

        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={handleCount}>Click Aqui</button>
        </div>
    )
}
 