import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import backIcon from '../../assets/icons/back.svg';
import './Header.css';

function Header({ title }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="header">
      <button onClick={handleGoBack} className="header__back-button">
        <img className="header__back-icon" src={backIcon} />
      </button>
      <span className="header__title">{title}</span>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
