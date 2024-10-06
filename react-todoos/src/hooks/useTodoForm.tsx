import { useState } from "react";

const useTodoForm = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState('');

    const resetForm = () => {
        setTitle('');
        setContent('');
    }

    return {
        title,
        setTitle,
        content,
        setContent,
        resetForm,
    }
}

export default useTodoForm;