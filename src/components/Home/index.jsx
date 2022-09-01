import './index.css'
import banner from '../../assets/images/banner.svg'
import githubIcon from '../../assets/images/githubIcon.svg'
import {Header} from '../Header'


export function Home(){
    return(
        <div className='mainContainer'> 
        
        <main className="homeMain">
            <aside className="aside">
            <h1>
                <span>Find </span>
                all your favorite 
                <span>Pokemon</span>
            </h1>

            <p>You can Know the type of Pokemon, its strengths, disadvantages and abilites</p>

            <button>See pokemons</button>
            </aside>

            <div className="container">
                <img src={banner} alt="pikachu grande" />
            </div>

        </main>
            <footer className='footer'>
                <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
                <a href="https://github.com/dvictordev"><img src={githubIcon} alt="" /></a>
            </footer>
        </div>
    )
}