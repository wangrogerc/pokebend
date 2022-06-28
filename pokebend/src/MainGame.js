import React, {useEffect, useState} from "react";

export default function MainGame(){
    const [randomNumber, setRandomNumber] = useState(1)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [currentPokemonPic, setCurrentPokemonPic] = useState()
    const [currentPokemonTypes, setCurrentPokemonTypes] = useState([])
    const [ElementBend, setElementBend] = useState()
    const [currentPokemonVulernabilities, setCurrentPokemonVulnerabilities] = useState([])
    const [currentVulNames, setcurrentVulNames] = useState([])
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
      
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(response => setCurrentPokemon(response));
        
        
        // .then(response => setCurrentPokemonPic(response.sprites.front_default))
        // .then(response => console.log(response))
        // .catch(e => console.error(e));
        // fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
        // .then(response => response.json())
        // .then(response => setCurrentPokemonTypes(response.types))
        // .catch(e => console.error(e));
        
        
    }, [randomNumber])


    useEffect(()=>{
        if (currentPokemon != undefined){
            setCurrentPokemonPic(currentPokemon.sprites.front_default);
            setCurrentPokemonTypes(currentPokemon.types)    
        }

    }, [currentPokemon])
    
    function getWeaknesses(){
        return Promise.all(
        currentPokemonTypes.map((type) =>
            fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`)
                .then(response => response.json()))
                // .then(data => {console.log(data); return data})
                // .then(data => data.damage_relations.double_damage_from)
        )
    }


    useEffect(()=> {
        // const arrayOfArraysOfObjects = []
        getWeaknesses()
            .then(data =>
                data.flatMap(type => type.damage_relations.double_damage_from)
                    .map(weakness => weakness.name))
            .then(setCurrentPokemonVulnerabilities)
            
        // for (const type of currentPokemonTypes){
        //     // console.log(type.type.name);
        //     fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`)
        //     .then(response => response.json())
        //     // .then(response => console.log(response.damage_relations.double_damage_from))
        //     .then(response => arrayOfArraysOfObjects.push(response.damage_relations.double_damage_from))
            
            
        // }
        // // setCurrentPokemonVulnerabilities(arrayOfArraysOfObjects)
        // const temp = []
        // // console.log(arrayOfArraysOfObjects)
        // // console.log(Array.isArray(arrayOfArraysOfObjects))
        // for (const arrayOfObjects of arrayOfArraysOfObjects){
        //     console.log("anything")
        //     console.log(arrayOfObjects)
        //     for (const anObject of arrayOfObjects){
        //         console.log(anObject.name)
        //     }
        // }
        // console.log(temp)
    
        
    }, [currentPokemonTypes])


    function setRandomPokemon(){
        const number = Math.floor(getRandomNumber(1,151))
        setRandomNumber(number)
        console.log(randomNumber)
        console.log(currentPokemon)
        // console.log("clicked")
        // console.log(currentPokemonTypes[0].type.name)
    }
    // function bend(){
    //     if (setElementBend in currentPokemonVulernabilities)
    // }
    function normalBend(){
        setElementBend("normal")
    }
    function fireBend(){
        setElementBend("fire")
    }
    function waterBend(){
        setElementBend("water")
    }
    function grassBend(){
        setElementBend("grass")
    }
    function electricBend(){
        setElementBend("electric")
    }
    function iceBend(){
        setElementBend("ice")
    }
    function fightingBend(){
        setElementBend("fighting")
    }
    function poisonBend(){
        setElementBend("poison")
    }
    function groundBend(){
        setElementBend("ground")
    }
    function flyingBend(){
        setElementBend("flying")
    }
    function psychicBend(){
        setElementBend("psychic")
    }
    function bugBend(){
        setElementBend("bug")
    }
    function rockBend(){
        setElementBend("rock")
    }
    function ghostBend(){
        setElementBend("ghost")
    }
    function darkBend(){
        setElementBend("dark")
    }
    function dragonBend(){
        setElementBend("dragon")
    }
    function steelBend(){
        setElementBend("steel")
    }
    function fariyBend(){
        setElementBend("fairy")
    }
    
    return (
        <>
        {currentPokemonTypes?.map(currentPokemonType => {
            return (
                <div>{currentPokemonType.type.name}</div>
            )
        })}
        <img src = {currentPokemonPic}/>
        
        <button type="button" className="btn btn-primary btn-primary-normal" onClick = {setRandomPokemon}>Normal</button>
        <button type="button" className="btn btn-primary" onClick = {setRandomPokemon}>Reroll</button>
        <button type="button" className="btn btn-primary" onClick = {() => {waterBend(); setRandomPokemon()}}>Water</button>
        <button type="button" className="btn btn-primary btn-primary-fire" onClick = {() => {fireBend(); setRandomPokemon();}}>Fire</button>
        <button type="button" className="btn btn-primary btn-primary-grass" onClick = {() => {grassBend(); setRandomPokemon();}}>Grass</button>
        <button type="button" className="btn btn-primary btn-primary-electric" onClick = {() => {electricBend(); setRandomPokemon();}}>Electric</button>
        <button type="button" className="btn btn-primary btn-primary-ice" onClick = {() => {iceBend(); setRandomPokemon();}}>Ice</button>
        <button type="button" className="btn btn-primary btn-primary-fighting" onClick = {() => {fightingBend(); setRandomPokemon();}}>Ice</button>
        <button type="button" className="btn btn-primary btn-primary-poison" onClick = {() => {poisonBend(); setRandomPokemon();}}>Poison</button>
        <button type="button" className="btn btn-primary btn-primary-ground" onClick = {() => {groundBend(); setRandomPokemon();}}>Ground</button>
        <button type="button" className="btn btn-primary btn-primary-flying" onClick = {() => {flyingBend(); setRandomPokemon();}}>Ground</button>


        </>
    )

}