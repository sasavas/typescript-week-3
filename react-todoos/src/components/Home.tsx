import Button from "../shared/components/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToTodosPage = () => {
        navigate('/todos');
    };

    return (
        <div>
            <h1>Home</h1>
            <Button title="Todos" onClickHandler={goToTodosPage} />
        </div>
    );
};

export default Home;
