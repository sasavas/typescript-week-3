import styles from './Button.module.css';

interface ButtonProps {
    title: string;
    onClickHandler: () => void;
}

const Button: React.FC<ButtonProps> = (
    {
        title,
        onClickHandler,
    }) => {
    return (
        <button
            className={styles.addTodoBtn}
            id="add-todo-btn" onClick={onClickHandler}
        >
            {title}
        </button>
    );
};

export default Button;
