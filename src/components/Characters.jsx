function Character(props) {
    return (
        <div 
        className = "characters-card"
        onClick = {() => props.onSelect(props.name)}
        >
            <img 
            src={`/sprites/${props.name.toLowerCase()}.png`} 
            alt={props.name} 
            className="character-sprite"
            onError={(e) => { e.target.style.display = 'none' }}
            />
            <h3>{props.name}</h3>
            <p>{props.role}</p>
        </div>
    );
}

export default Character;