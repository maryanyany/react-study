import { useEffect, useState } from "react"

export default function CountEffect(){

const [count, setCount] = useState(0)

function handleCount(){
    setCount(count+1)
}
useEffect(() => {
    console.log("useEffect ativo pela decendencia count")
},[count])
    return(

        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={handleCount}>Click Aqui</button>
        </div>
    )
}
 