import { useEffect, useRef } from "react";



export default function DOMRef(){
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        inputRef.current?.focus()
    }, [])

    return <input type="text" ref={inputRef}/>
}