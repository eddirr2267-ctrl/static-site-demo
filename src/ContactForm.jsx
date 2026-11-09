import React, { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h3 style={{ margin: '0 0 8px 0', color: '#581c87', fontFamily: 'Cinzel, serif', fontSize: '20px' }}>
                    Зворотний зв'язок
                </h3>
                <p style={{ fontSize: '13px', color: '#6b21a8', marginBottom: '16px' }}>
                    Будь ласка, заповніть форму, і повідомлення надішлеться мені на пошту:
                </p>

                { }
                <form action="https://formspree.io/f/mvkkrynj" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input type="text" name="name" placeholder="Ваше ім’я" required style={inputStyle} />
                    <input type="email" name="email" placeholder="Ваш Email" required style={inputStyle} />
                    <input type="tel" name="phone" placeholder="Номер телефону" required style={inputStyle} />
                    <textarea name="message" placeholder="Ваше повідомлення..." rows="3" required style={inputStyle}></textarea>

                    <button type="submit" style={submitBtnStyle}>Надіслати</button>
                </form>

                <button onClick={() => setIsOpen(false)} style={closeBtnStyle}>Закрити</button>
            </div>
        </div>
    );
}

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(46, 16, 101, 0.4)', backdropFilter: 'blur(4px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};

const modalContentStyle = {
    backgroundColor: '#ffffff', padding: '28px', borderRadius: '20px',
    width: '400px', maxWidth: '90%', position: 'relative',
    boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.2)',
    border: '2px solid #e9d5ff'
};

const inputStyle = {
    padding: '10px 14px', borderRadius: '12px',
    border: '1px solid #d8b4fe', fontSize: '14px', outline: 'none',
    backgroundColor: '#faf5ff', color: '#2e1065'
};

const submitBtnStyle = {
    padding: '10px', backgroundColor: '#7e22ce', color: '#fff',
    border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '600',
    transition: 'background 0.2s'
};

const closeBtnStyle = {
    marginTop: '8px', width: '100%', padding: '8px',
    backgroundColor: '#f3e8ff', border: 'none', borderRadius: '12px',
    cursor: 'pointer', color: '#6b21a8', fontWeight: '500'
};

export default ContactForm;