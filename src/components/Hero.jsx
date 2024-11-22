import PropTypes from 'prop-types'
import '../styles/hero.css'

function Hero({hero_info}) {
    return (
        <section className="site-hero">
            <div className='hero-image'>
            <img
                src={hero_info.image}
                alt={`image de couverture de ${hero_info.name}`}
            />
            </div>
            <div className='hero-text'>
                <h1 className="hero-title">
                    {hero_info.title}
                </h1>
                <p className="hero-description">
                    {hero_info.description}
                </p>
            </div>
        </section>
    );
};

Hero.prototypes = {
    hero_info: PropTypes.shape ({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Hero;