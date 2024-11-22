import PropTypes from 'prop-types'

function Cards({cartes}) {
    return (
        <div className="cartes">
            <img src={cartes.image} />
            <div>
                <img src={cartes.star} />
                <p>
                    <span>{cartes.ratings * 1.0}</span>
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

Cards.prototypes = {
    cartes: PropTypes.shape ({
        image: PropTypes.string.isRequired,
        star: PropTypes.string.isRequired,
        ratings: PropTypes.integer.isRequired,
        persons: PropTypes.integer.isRequired

    })
}

export default Cards;