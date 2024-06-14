import cineEaseLogo from '../../assets/cine-ease-logo.svg';
import { FaRegUserCircle } from "react-icons/fa";
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header>
            <Link to='/dashboard'>
                <img src={cineEaseLogo} alt="CineEase Logo" />
            </Link>
            <FaRegUserCircle size={20} className={styles.userIcon}/>
        </header>
    </>
  )
}

export default Header