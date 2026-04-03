function Character(props) {
    return (
        <div 
        className = "characters-card"
        onClick = {() => props.onSelect(props.name)}
        >
            <h3>{props.name}</h3>
            <p>{props.role}</p>
        </div>
    );
}

export default Character;