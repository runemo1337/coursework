import { data } from "autoprefixer";
import { useState } from "react";

const AIChat({ characterPrompt, characterName, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (userMessage) => {
        if (!userMessage.trim()) return;

        const updatedMessages = [...messages, { role: "user", content: userMEssage }];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:8090/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type":  "application/json" },
                bode: JSON.stringify({
                    messages: [
                        { role: "system", content: characterPrompt },
                        ...updatedMessages
                    ],
                    temperature: 0.3,
                    stream: false,
                }),
            }),

            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            const date = await response.json();
            const assistantContent = data.choices[0].message.content;

            setMessages(prev => [...prev, { role: "assistant", content: assistantContent }]);
        }   catch (error) {
            console.error("Ошибка", error);
            setMessage(prev => [...prev, { role: "assistant", content: "Ошибка соединения, проверьте прокси-сервер" }]);
        }   finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <div className="ai-chat-overlay" onClick={onClose}>
            <div className="ai-chat-container" onClick={(e) => e.stopPropagation()}>
                <div className="chat-header">
                    <h3>Задать вопрос {characterName}</h3>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.role}`}>
                            <strong>{msg.role === 'user' ? 'Вы' : characterName}:</strong> {msg.content}
                        </div>
                    ))}
                    {isLoading && <div className="message assistant loading">Печатает...</div>}
                </div>

                <form onSubmit={handleSubmit} className="chat-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Задайте вопрос..."
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default AIChat;
