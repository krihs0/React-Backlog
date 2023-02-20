import { useSelector } from "react-redux"; //import useSelector van react-redux
import "./Display.css"; //import de css
const Display = () => {     // dee eerste display section heeft altijd een blokje in het hoekje met "Play this!" in de video is dit gedaan met JavaScript maar persoonlijk vondt ik het fijner/makkelijker om het met css te doen

    const filteredGames = useSelector(state => {return state}); // pakt de state uit de store, specefiek de games wanneer die gefiltered zijn

    const titlesToBeRendered = filteredGames.map(game =>{ // loopt door alle filtered games heen en maakt voor elke game een display aan met de juiste informatie
        return ( 
        <section key={game.title} className="display">
            <h2 className="display__h2">{game.title}</h2>
            <figure className="display__play">Play this!</figure>
        </section>
        );
    })

    return( // rendered alle displays uit de functie van hierboven
        <>
            {titlesToBeRendered} 
        </>
    )
}

export default Display;