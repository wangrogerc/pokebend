import React, {useEffect, useState} from "react";

export default function MainGame(){
    const [score, setScore] = useState(0)
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
    const [dragonAmmo, setDragonAmmo] = useState(1)
    const [steelAmmo, setSteelAmmo] = useState(1)
    const [fairyAmmo, setFairyAmmo] = useState(1)
    const [ammoSystem, setAmmoSystem] = useState(false)
    let [currentlyBending, setCurrentlyBending] = useState(false)
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
        
    }
    )
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
        return bendInteraction();
        

        
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
    function ToggleAmmoSystem(){
        if (ammoSystem == false){
            setScore(0)
            setAmmoSystem(true)
            setNormalAmmo(1)
            setFireAmmo(1)
            setWaterAmmo(1)
            setGrassAmmo(1)
            setElectricAmmo(1)
            setIceAmmo(1)
            setFightingAmmo(1)
            setPoisonAmmo(1)
            setGroundAmmo(1)
            setFlyingAmmo(1)
            setPsychicAmmo(1)
            setBugAmmo(1)
            setRockAmmo(1)
            setGhostAmmo(1)
            setDarkAmmo(1)
            setDragonAmmo(1)
            setSteelAmmo(1)
            setFairyAmmo(1)
        }
        else{
            setScore(0)
            setAmmoSystem(false)
            setNormalAmmo(1)
            setFireAmmo(1)
            setWaterAmmo(1)
            setGrassAmmo(1)
            setElectricAmmo(1)
            setIceAmmo(1)
            setFightingAmmo(1)
            setPoisonAmmo(1)
            setGroundAmmo(1)
            setFlyingAmmo(1)
            setPsychicAmmo(1)
            setBugAmmo(1)
            setRockAmmo(1)
            setGhostAmmo(1)
            setDarkAmmo(1)
            setDragonAmmo(1)
            setSteelAmmo(1)
            setFairyAmmo(1)
        }
    }
    
    while (currentlyBending){
        bendInteraction()
        currentlyBending = false
    }

    function bendInteraction(){
        console.log(elementBend)
        console.log(currentPokemonVulernabilities)
        console.log(currentPokemonTypes)
        if (currentPokemonVulernabilities.includes(elementBend) && elementBend != "nothing"){
            setScore(score+1)
            
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
                if (type == "flying"){
                    setFlyingAmmo(flyingAmmo+1)
                }
                if (type == "psychic"){
                    setPsychicAmmo(psychicAmmo+1)
                }
                if (type == "bug"){
                    setBugAmmo(bugAmmo+1)
                }
                if (type == "rock"){
                    setRockAmmo(rockAmmo+1)
                }
                if (type == "ghost"){
                    setGhostAmmo(ghostAmmo+1)
                }
                if (type == "dark"){
                    setDarkAmmo(darkAmmo+1)
                }
                if (type == "dragon"){
                    setDragonAmmo(dragonAmmo+1)
                }
                if (type == "steel"){
                    setSteelAmmo(steelAmmo+1)
                }
                if (type=="fairy"){
                    setFairyAmmo(fairyAmmo+1)
                }
            })
            setElementBend("nothing")
            }
        else if (elementBend == "nothing") {
            
        }
        else{
            console.log("lose")
            setScore(0)
        }
    }

    function normalBend(){
        if (normalAmmo > 0){
            if (ammoSystem){
            setNormalAmmo(normalAmmo-1)}
            setElementBend("normal")
            setRandomPokemon()
            
        }
    }
    function fireBend(){
        
        if (fireAmmo > 0){
            if (ammoSystem){
            setFireAmmo(fireAmmo-1)}
            setElementBend("fire")
            setRandomPokemon()
            
        }
    }
    function waterBend(){
        if (waterAmmo > 0){
            if (ammoSystem){
            setWaterAmmo(waterAmmo -1)}
            setElementBend("water")
            setRandomPokemon()
            
        }
    }
    function grassBend(){
        if (grassAmmo > 0){
            if (ammoSystem){
            setGrassAmmo(grassAmmo-1)}
            setElementBend("grass")
            setRandomPokemon()
            
        }
    }
    function electricBend(){
        if (electricAmmo > 0){
            if (ammoSystem){
            setElectricAmmo(electricAmmo -1)}
            setElementBend("electric")
            setRandomPokemon()
            
        }
    }
    function iceBend(){
        if (iceAmmo > 0){
            if (ammoSystem){
            setIceAmmo(iceAmmo-1)}
            setElementBend("ice")
            setRandomPokemon()
            
        }
    }
    function fightingBend(){
        if (fightingAmmo > 0){
            if (ammoSystem){
            setFightingAmmo(fightingAmmo-1)}
            setElementBend("fighting")
            setRandomPokemon()
            
        }
    }
    function poisonBend(){
        if (poisonAmmo > 0){
            if (ammoSystem){
            setPoisonAmmo(poisonAmmo-1)}
            setElementBend("poison")
            setRandomPokemon()
        }
    }
    function groundBend(){
        if (groundAmmo > 0){
            if (ammoSystem){
            setGroundAmmo(groundAmmo-1)}
            setElementBend("ground")
            setRandomPokemon()
            
        }
    }
    function flyingBend(){
        if (flyingAmmo > 0){
            if (ammoSystem){
            setFlyingAmmo(flyingAmmo-1)}
            setElementBend("flying")
            setRandomPokemon()
        
        }
    }
    function psychicBend(){
        if (psychicAmmo > 0){
            if (ammoSystem){
            setPsychicAmmo(psychicAmmo-1)}
            setElementBend("psychic")
            setRandomPokemon()
            
        }
    }
    function bugBend(){
        if (bugAmmo > 0){
            if (ammoSystem){
            setBugAmmo(bugAmmo-1)}
            setElementBend("bug")
            setRandomPokemon()
            
        }        
    }
    function rockBend(){
        if (rockAmmo > 0){
            if (ammoSystem){
            setRockAmmo(rockAmmo-1)}
            setElementBend("rock")
            setRandomPokemon()
            
        }
    }
    function ghostBend(){
        if (ghostAmmo > 0){
            if (ammoSystem){
            setGhostAmmo(ghostAmmo-1)}
            setElementBend("ghost")
            setRandomPokemon()
            
        }
    }
    function darkBend(){
        if (darkAmmo > 0){
            if (ammoSystem){
            setDarkAmmo(darkAmmo-1)}
            setElementBend("dark")
            setRandomPokemon()
            
        }
    }
    function dragonBend(){
        if (dragonAmmo > 0){
            if (ammoSystem){
            setDragonAmmo(dragonAmmo-1)}
            setElementBend("dragon")
            setRandomPokemon()
            
        }
    }
    function steelBend(){
        if (steelAmmo > 0){
            if (ammoSystem){
            setSteelAmmo(darkAmmo-1)}
            setElementBend("steel")
            setRandomPokemon()
            
        }
    }
    function fairyBend(){
        if (fairyAmmo > 0){
            if (ammoSystem){
            setFairyAmmo(fairyAmmo-1)}
            setElementBend("fairy")
            setRandomPokemon()
            
        }
    }
    function AmmoList(){
    if (ammoSystem){ return <ul>
            <li> Normal Ammo: {normalAmmo}</li>
            <li>Water Ammo: {waterAmmo}</li>
            <li>Fire Ammo: {fireAmmo}</li>
            <li>Grass Ammo: {grassAmmo}</li>
            <li> Electric Ammo: {electricAmmo}</li>
            <li>Ice Ammo: {iceAmmo}</li>
            <li>Fighting Ammo: {fightingAmmo}</li>
            <li>Poison Ammo: {poisonAmmo}</li>
            <li>Ground Ammo: {groundAmmo}</li>
            <li>Flying Ammo: {flyingAmmo}</li>
            <li>Psychic Ammo: {psychicAmmo}</li>
            <li>Bug Ammo: {bugAmmo}</li>
            <li>Rock Ammo: {rockAmmo}</li>
            <li>Ghost Ammo: {ghostAmmo}</li>
            <li>Dark Ammo: {darkAmmo}</li>
            <li>Dragon Ammo: {dragonAmmo}</li>
            <li>Steel Ammo: {steelAmmo}</li>
            <li>Fairy Ammo: {fairyAmmo}</li>
        </ul>}
    }

    function TableGame(){
        return <table class = "table table-sm">
            <thead>
                <tr>
                    <th scope = "col">Attack</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><button type="button" className="btn btn-primary btn-primary-fighting" onClick = {() => {fightingBend();}}>Fighting</button></th>
                </tr>
            </tbody>



        </table>
    }
    //current problem: bend interaction executes before selected bend state is recognized
    //if we put bend interaction in useeffect when elementBend changes, the game won't recognize if we do an element twice in a row
    return (
        <>
        <h1>Score: {score}</h1>
        <button type="button" className="btn btn-primary" onClick = {ToggleAmmoSystem}>Toggle Ammo System</button>
        {currentPokemonTypes?.map(currentPokemonType => {
            return (<>
                <div>{currentPokemonType.type.name}</div>
                <div>weaknesses: {currentPokemonVulernabilities} </div>
                </>
            )
        })}
        <img src = {currentPokemonPic}/>
        <TableGame />
        <ul>
        <button type="button" className="btn btn-primary" onClick = {setRandomPokemon}>Reroll</button>
        <li><button type="button" className="btn btn-primary btn-primary-normal" onClick = {() => {normalBend();}}>Normal</button></li>
        <li><button type="button" className="btn btn-primary btn-primary-water" onClick = {() => {waterBend();}}>Water</button></li>
        <li><button type="button" className="btn btn-primary btn-primary-fire" onClick = {() => {fireBend();}}>Fire</button></li>
        <li><button type="button" className="btn btn-primary btn-primary-grass" onClick = {() => {grassBend();}}>Grass</button></li>
        <li><button type="button" className="btn btn-primary btn-primary-electric" onClick = {() => {electricBend();}}>Electric</button></li>
        <li><button type="button" className="btn btn-primary btn-primary-ice" onClick = {() => {iceBend();}}>Ice</button></li>
        <button type="button" className="btn btn-primary btn-primary-fighting" onClick = {() => {fightingBend();}}>Fighting</button> 
        <button type="button" className="btn btn-primary btn-primary-poison" onClick = {() => {poisonBend();}}>Poison</button> 
        <button type="button" className="btn btn-primary btn-primary-ground" onClick = {() => {groundBend();}}>Ground</button> 
        <button type="button" className="btn btn-primary btn-primary-flying" onClick = {() => {flyingBend();}}>Flying</button> 
        <button type="button" className="btn btn-primary btn-primary-psychic" onClick = {() => {psychicBend();}}>Psychic</button> 
        <button type="button" className="btn btn-primary btn-primary-bug" onClick = {() => {bugBend();}}>Bug</button> 
        <button type="button" className="btn btn-primary btn-primary-rock" onClick = {() => {rockBend();}}>Rock</button> 
        <button type="button" className="btn btn-primary btn-primary-ghost" onClick = {() => {ghostBend();}}>Ghost</button> 
        <button type="button" className="btn btn-primary btn-primary-dark" onClick = {() => {darkBend();}}>Dark</button> 
        <button type="button" className="btn btn-primary btn-primary-dragon" onClick = {() => {dragonBend();}}>Dragon</button> 
        <button type="button" className="btn btn-primary btn-primary-steel" onClick = {() => {steelBend();}}>Steel</button> 
        <button type="button" className="btn btn-primary btn-primary-fairy" onClick = {() => {fairyBend();}}>Fairy</button> 
        </ul>
        <AmmoList/>
        <img src = "https://i.imgur.com/0lmGBa1.png"/>
        <img src = "https://i.redd.it/zh41uur9deb71.jpg"/>
        </>
    )

}