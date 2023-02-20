export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) =>{ // 
    return toBeSearchedArray.filter(game => { // loopt door alle games heen die nog gefiltered moeten worden
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){ // 
            return game;
        }
    });
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game =>{    // loopt door alle games heen die nog gefiltered moeten worden
        let foundGame = false;
        game.platforms.forEach(platform =>{  // loopt door alle platforms heen en kijkt of die matchen met de game die de filter nu mee bezig is
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                foundGame = true;
            }
        })
        if(foundGame === true){ // als de game en platform overeenkomen geeft het de game terug 
            return game;
        }
    });
}

export const filterGamesByType = (typeToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game =>{    // loopt door alle games heen die nog gefiltered moeten worden
        let foundType = false;
        game.type.forEach(type =>{  // loopt door alle types heen en kijkt of die matchen met de game die de filter nu mee bezig is
            if(type.toUpperCase() === typeToBeSearched.toUpperCase()){
                foundType = true;
            }
        })
        if(foundType === true){ // als de game en type overeenkomen geeft het de game terug
            return game;
        }
    });
}