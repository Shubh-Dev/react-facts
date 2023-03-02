import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkmode, setDarkmode] = React.useState(true)
    const toggleMode = () => {
        setDarkmode(prevState => !prevState)
    }
    return (
        <div className="container">
            <Navbar darkMode={darkmode} toggleDarkMode={toggleMode}/>
            <Main darkMode={darkmode}/>
        </div>
    )
}