const Cat=({
    cat:{name,origin,life_span,description,weight,temperament}
})=>{
    
    console.log(description)
    console.log(weight.metric)
    console.log(temperament)
    
    
    return(
        <div className='user-card1'>
           
            <h1>{name}</h1>
            <h2>{origin}</h2> 
            <p>{temperament}</p>
            <h3>{life_span}</h3>
            <h4>{weight.metric}</h4>
            <p>{description}</p>

        </div>
    )
}
export default Cat