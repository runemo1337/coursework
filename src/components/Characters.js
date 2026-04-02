function Character(props) {
    return (
        <div className = "characters-card">
            <h3>{props.name}</h3>
            <p>{props.role}</p>
        </div>
    );
}

export default Character;