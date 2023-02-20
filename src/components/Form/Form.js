import { useState } from "react"; //import useState van react
import { useDispatch } from "react-redux"; //import useDispatch van react-redux
import {filterGamesByTitle, filterGamesByPlatform, filterGamesByType} from "../../helpers/filterGames"; //import alle filter functies van de filterGames helper
import { games } from "../../data/games";   //import alle games
import "./Form.css";    //import de css

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle,
            select: false,
        },
        {
            id: "platforms",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
            select: false,
        },
        {
            id: "type",
            value: "",
            label: "Type",
            filter: filterGamesByType,
            select: false,
        },
    ]);

    let dispatch = useDispatch();

    const onInputChanged = (event) =>{
        let copy = [...inputs];
        copy.map(input =>{
            if(input.id === event.target.id){
                input.value = event.target.value
            }
        });
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray =>{  // zorgt dat voor elke input in de inputs state de juiste html gemaakt wordt
        if (objectFromStateArray.select === true) {
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <select className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value}/>
            </div>
        }else{
            return (
                <div key={objectFromStateArray.id} className="form__wrapper">
                    <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                    <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value}/>
                </div>
                );
        }
    });
    
    const submit = (event) =>{
        event.preventDefault();
        let result = games;
        inputs.forEach(input =>{                        // gooit voor elke input een extra filter over de gefilterde games array
            result = input.filter(input.value, result);
            console.log(result)

        })
        dispatch({                  // gooit het resultaat naar de store
            type: "FILTEREDGAMES",
            payload: result
        })
    }

    return(                                             //de html spreekt voor zichzelf, inputsToBeRendered zijn inputs die gemaakt zijn met de data van de inputs array (wat een state is)
        <form className="form" onSubmit={submit}>
            <div className="formInputsWrapper">
                {inputsToBeRendered}
            </div>
            <button className="form__Search" onClick={submit}>Zoeken</button>
        </form>
    )
}



export default Form;