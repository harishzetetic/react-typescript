import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Container(){
    const theme = useContext(ThemeContext)
    return <div style={{backgroundColor: theme.dark.main}}></div>
}