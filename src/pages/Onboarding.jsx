import styles from '../styles/onboarding.module.scss';
import cineEaseLogo from '../assets/cine-ease-logo.svg';
import Button from '../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();  

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles.mainContainer}>
        <img src={cineEaseLogo} alt="CineEase Logo" />
        <p>Your number one movie destination.</p>
        <Button label={'Watch Movies'}  handleBtnClick={handleNavigate}/>
    </div>
  )
}

export default Onboarding