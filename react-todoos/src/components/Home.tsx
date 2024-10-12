import Button from "../shared/components/Button";
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();

    const goToTodosPage = () => {
        navigate('/todos');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Home</h1>
            <p>Nothing to see here. Go to Todos Page!</p>
            <Button title="Todos" onClickHandler={goToTodosPage} />
        </div>
    );
};

export default Home;
