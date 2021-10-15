
import './character.styles.css';

function Character( props ) {
    const { name, birth_year, hair_color } = props;
    return (
      <div className="character container">
          <div className="name">{name}</div>
          <div className="birth-year">{birth_year}</div>
          <div className="hair-color">{hair_color}</div>
      </div>
    );
}


export default Character
