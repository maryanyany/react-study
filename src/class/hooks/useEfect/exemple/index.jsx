import { useEffect } from "react"


export default function Exemple() {
 
useEffect(() => {
    console.log("useEfect rodando")
},[])

    return(
        <h1>Sou uma UseEfect</h1>
    )
}