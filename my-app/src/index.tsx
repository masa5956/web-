import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');

    const openModal = (): void => {
        setIsModalOpen(true);
        document.body.classList.add('dark-mode');
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        document.body.classList.remove('dark-mode');
    };

    const handleSend = (): void => {
        if (comment.trim() === '') {
            alert('コメントを入力してください');
        } else {
            console.log(comment);
            setComment('');
            closeModal();
        }
    };

    return (
        <div>
            <button onClick={openModal}>コメントを入力</button>

            {isModalOpen && (
                <>
                    <div className="overlay" onClick={closeModal}></div>
                    <div className="modal">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows={4}
                            cols={50}
                            placeholder="コメントを入力してください"
                        ></textarea>
                        <br />
                        <button onClick={handleSend}>送信</button>
                        <button onClick={closeModal}>閉じる</button>
                    </div>
                </>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
