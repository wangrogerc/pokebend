import React, {useEffect, useState} from "react";

export default function MainGame(){
    const [randomNumber, setRandomNumber] = useState(1)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [currentPokemonPic, setCurrentPokemonPic] = useState()
    const [currentPokemonTypes, setCurrentPokemonTypes] = useState([])
    const [elementBend, setElementBend] = useState()
    const [currentPokemonVulernabilities, setCurrentPokemonVulnerabilities] = useState([])
    const [currentVulNames, setcurrentVulNames] = useState([])
    const [normalAmmo, setNormalAmmo] = useState(1)
    const [fireAmmo, setFireAmmo] = useState(1)
    const [waterAmmo, setWaterAmmo] = useState(1)
    const [grassAmmo, setGrassAmmo] = useState(1)
    const [electricAmmo, setElectricAmmo] = useState(1)
    const [iceAmmo, setIceAmmo] = useState(1)
    const [fightingAmmo, setFightingAmmo] = useState(1)
    const [poisonAmmo, setPoisonAmmo] = useState(1)
    const [groundAmmo, setGroundAmmo] = useState(1)
    const [flyingAmmo, setFlyingAmmo] = useState(1)
    const [psychicAmmo, setPsychicAmmo] = useState(1)
    const [bugAmmo, setBugAmmo] = useState(1)
    const [rockAmmo, setRockAmmo] = useState(1)
    const [ghostAmmo, setGhostAmmo] = useState(1)
    const [darkAmmo, setDarkAmmo] = useState(1)
    const [steelAmmo, setSteelAmmo] = useState(1)
    const [fairyAmmo, setFairyAmmo] = useState(1)
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
            if(elementBend != undefined){

            }
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
            .then(setCurrentPokemonVulnerabilities);
            
    
        
    }, [currentPokemonTypes])

    useEffect(()=> {
        return bendInteraction()

        
    }, [elementBend]
    )

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

    function bendInteraction(){
        console.log(elementBend)
        console.log(currentPokemonVulernabilities)
        console.log(currentPokemonTypes)
        if (currentPokemonVulernabilities.includes(elementBend)){
            console.log("bend inter")
            currentPokemonTypes.forEach((type) =>{
                console.log(type.type.name);
                if (type == "normal"){
                    console.log("plus normal")
                    setNormalAmmo(normalAmmo+1)
                }
                if (type.type.name == "fire"){
                    console.log("plus flames")
                    setFireAmmo(fireAmmo+1)
                }
                if (type == "water"){
                    setWaterAmmo(waterAmmo+1)
                }
                if (type.type.name == "grass"){
                    console.log("good grass")
                    setGrassAmmo(grassAmmo+1)
                }
                if (type == "electric"){
                    setElectricAmmo(electricAmmo+1)
                }
                if (type == "ice"){
                    setIceAmmo(iceAmmo+1)
                }
                if (type == "fighting"){
                    setFightingAmmo(fightingAmmo+1)
                }
                if (type == "poison"){
                    setPoisonAmmo(poisonAmmo+1)
                }
                if (type == "ground"){
                    setGroundAmmo(groundAmmo+1)
                }
            })
            }
    }

    function normalBend(){
        if (normalAmmo > 0){
            setNormalAmmo(normalAmmo-1)
            setElementBend("normal")
        }
    }
    function fireBend(){
        if (fireAmmo > 0){
            setFireAmmo(fireAmmo-1)
            setElementBend("fire")
        }
    }
    function waterBend(){
        if (waterAmmo > 0){
            setWaterAmmo(waterAmmo -1)
            setElementBend("water")
        }
    }
    function grassBend(){
        if (grassAmmo > 0){
            setGrassAmmo(grassAmmo-1)
            setElementBend("grass")
        }
    }
    function electricBend(){
        if (electricAmmo > 0){
            setElectricAmmo(electricAmmo -1)
            setElementBend("electric")
        }
    }
    function iceBend(){
        if (iceAmmo > 0){
            setIceAmmo(iceAmmo-1)
            setElementBend("ice")
        }
    }
    function fightingBend(){
        if (fightingAmmo > 0){
            setFightingAmmo(fightingAmmo-1)
            setElementBend("fighting")
        }
    }
    function poisonBend(){
        if (poisonAmmo > 0){
            setPoisonAmmo(poisonAmmo-1)
            setElementBend("poison")
        }
    }
    function groundBend(){
        if (groundAmmo > 0){
            setGroundAmmo(groundAmmo-1)
            setElementBend("ground")
        }
    }
    function flyingBend(){
        if (flyingAmmo > 0){
        setFlyingAmmo(flyingAmmo-1)
        setElementBend("flying")
        }
    }
    function psychicBend(){
        if (psychicAmmo > 0){
            setPsychicAmmo(psychicAmmo-1)
            setElementBend("psychic")
        }
    }
    function bugBend(){
        if (bugAmmo > 0){
            setBugAmmo(bugAmmo-1)
            setElementBend("bug")
        }        
    }
    function rockBend(){
        if (rockBend > 0){
            setRockAmmo(rockAmmo-1)
            setElementBend("rock")
        }
    }
    function ghostBend(){
        if (ghostBend > 0){
            setGhostAmmo(ghostAmmo-1)
            setElementBend("ghost")
        }
    }
    function darkBend(){
        if (darkBend > 0){
            setDarkAmmo(darkAmmo-1)
            setElementBend("dark")
        }
    }
    function dragonBend(){
        if (dragonAmmo > 0){
            setDragonAmmo(dragonAmmo-1)
            setElementBend("dragon")
        }
    }
    function steelBend(){
        if (steelAmmo > 0){
            setSteelAmmo(darkAmmo-1)
            setElementBend("steel")
        }
    }
    function fariyBend(){
        if (fairyAmmo > 0){
            setFairyAmmo(fairyAmmo-1)
            setElementBend("fairy")
        }
    }
    
    return (
        <>
        {currentPokemonTypes?.map(currentPokemonType => {
            return (
                <div>{currentPokemonType.type.name}</div>
            )
        })}
        <img src = {currentPokemonPic}/>
        <button type="button" className="btn btn-primary" onClick = {setRandomPokemon}>Reroll</button>
        <button type="button" className="btn btn-primary btn-primary-normal" onClick = {() => {normalBend(); setRandomPokemon()}}>Normal</button>
        <button type="button" className="btn btn-primary btn-primary-water" onClick = {() => {waterBend(); setRandomPokemon()}}>Water</button>
        <button type="button" className="btn btn-primary btn-primary-fire" onClick = {() => {fireBend(); setRandomPokemon();}}>Fire</button>
        <button type="button" className="btn btn-primary btn-primary-grass" onClick = {() => {grassBend(); setRandomPokemon();}}>Grass</button>
        <button type="button" className="btn btn-primary btn-primary-electric" onClick = {() => {electricBend(); setRandomPokemon();}}>Electric</button>
        <button type="button" className="btn btn-primary btn-primary-ice" onClick = {() => {iceBend(); setRandomPokemon();}}>Ice</button>
        <button type="button" className="btn btn-primary btn-primary-fighting" onClick = {() => {fightingBend(); setRandomPokemon();}}>Fighting</button>
        <button type="button" className="btn btn-primary btn-primary-poison" onClick = {() => {poisonBend(); setRandomPokemon();}}>Poison</button>
        <button type="button" className="btn btn-primary btn-primary-ground" onClick = {() => {groundBend(); setRandomPokemon();}}>Ground</button>
        <button type="button" className="btn btn-primary btn-primary-flying" onClick = {() => {flyingBend(); setRandomPokemon();}}>Flying</button>
        <button type="button" className="btn btn-primary btn-primary-psychic" onClick = {() => {psychicBend(); setRandomPokemon();}}>Psychic</button>
        <button type="button" className="btn btn-primary btn-primary-bug" onClick = {() => {bugBend(); setRandomPokemon();}}>Bug</button>
        <button type="button" className="btn btn-primary btn-primary-rock" onClick = {() => {rockBend(); setRandomPokemon();}}>Rock</button>
        <button type="button" className="btn btn-primary btn-primary-ghost" onClick = {() => {ghostBend(); setRandomPokemon();}}>Ghost</button>
        <button type="button" className="btn btn-primary btn-primary-dark" onClick = {() => {darkBend(); setRandomPokemon();}}>Dark</button>
        <button type="button" className="btn btn-primary btn-primary-dragon" onClick = {() => {dragonBend(); setRandomPokemon();}}>Dragon</button>
        <button type="button" className="btn btn-primary btn-primary-steel" onClick = {() => {steelBend(); setRandomPokemon();}}>Steel</button>
        <button type="button" className="btn btn-primary btn-primary-fairy" onClick = {() => {fairyBend(); setRandomPokemon();}}>Fairy</button>
        </>
    )

}