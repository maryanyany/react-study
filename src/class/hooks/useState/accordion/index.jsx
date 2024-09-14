import "./style.css"
import { useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function Accordion(){

    const [isOpen, setIsOpen] = useState(false) 

    return(
        <div className="accordion-container">
            <div className="accordion-title">
              <p>Novidades</p>

              <button onClick={ () => setIsOpen(!isOpen) }> {isOpen ? <ArrowUp color="red" size={18} /> : <ArrowDown color="red" size={18}/>} </button>
            </div>

            {isOpen && (
            <div className="accordion-content">
               <p>Sei fazer accordion jsx com hook</p>
            </div>
            )}

        </div>
    )
}
