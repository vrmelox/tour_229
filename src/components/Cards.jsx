import PropTypes from 'prop-types'
import '../styles/cards.css'

function Cards({cartes}) {
    return (
        <div className="cartes">
            <img src={cartes.image} className='cartes--img'/>
            <div>
                <img src={cartes.star} />
                <p>
                    <span>{`${cartes.ratings * 1.0}`}</span>
                    <span>{`(${cartes.persons})`}</span>
                    <span>{`. ${cartes.city}`}</span>
                </p>
            </div>
            <div>
                <p>{cartes.name}</p>
                <p>
                    <span>{`From $${cartes.prices}`}</span>
                    <span>/person</span>
                </p>
            </div>
        </div>
    );
};

Cards.PropTypes = {
    cartes: PropTypes.shape ({
        image: PropTypes.string.isRequired,
        star: PropTypes.string.isRequired,
        ratings: PropTypes.number.isRequired,
        persons: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        prices: PropTypes.number.isRequired,
    }).isRequired,
};

export default Cards;