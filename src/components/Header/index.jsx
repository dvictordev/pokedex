import './index.css'
import logo from '../../assets/images/Logo.svg'


export function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo pokemon" />

           <nav className='navbar'>
                <ul className='nav'>
                    <button>Home</button>
                    <button>Pokedex</button>
                    <button>Legendaries</button>
                    <button>Documentation</button>
                </ul>
           </nav>
        </header>
    )
}