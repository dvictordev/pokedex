import './index.css'
import logo from '../../assets/images/Logo.svg'
import {Link } from 'react-router-dom'




export function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo pokemon" />
            <nav className='navbar'>
                    <ul className='nav'>
                        <Link to='/' className='navBtn'>
                            Home    
                        </Link> 
                        <Link to="/pokedex" className='navBtn'>
                            Pokedex 
                        </Link>
                        <Link to="/legendaries" className='navBtn'>
                            Legendaries 
                        </Link>
                        <Link to="/documentation" className='navBtn'>
                            Documentation   
                        </Link>
                    </ul>
            </nav>
        </header>
    )
}