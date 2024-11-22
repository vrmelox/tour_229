import PropTypes from 'prop-types';
import '../styles/navbar.css'

function Navbar({tour_infos}) {
    return (
        <nav className='tour-nav'>
            <img
                src={tour_infos.logo}
                alt={`Logo de ${tour_infos.name}`}
                className="site-logo"
            />
            <h1>
                {tour_infos.name}
            </h1>
        </nav>
    );
};

Navbar.prototypes = {
    tour_infos: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
}

export default Navbar;