import css from './Home.module.css';

const Home = () => {
    
    return(
        <div className={css.main}>
            <div>
                <img src="https://media.cdn.adultswim.com/uploads/20220904/2294143541-RAMMobileHero.png" alt="RickMorty"/>
                <button>API Source</button>
            </div>
        </div>

    )
}

export {Home}