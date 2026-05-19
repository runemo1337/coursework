function Character(props) {
  // Определяем класс в зависимости от имени
  const getPositionClass = () => {
    switch(props.name) {
      case 'Егор': return 'character-egor';
      case 'Маша': return 'character-masha';
      case 'Андрей': return 'character-andrey';
      case 'Вова': return 'character-vova';
      case 'Дмитрий': return 'character-dmitry';
      default: return '';
    }
  };

  return (
    <div 
      className={`characters-card ${getPositionClass()}`}
      onClick={() => props.onSelect(props.name)}
    >
      <img 
        src={`/sprites/${props.name.toLowerCase()}.png`} 
        alt={props.name} 
        className="character-sprite"
        onError={(e) => { e.target.style.display = 'none' }}
      />
    </div>
  );
}

export default Character;