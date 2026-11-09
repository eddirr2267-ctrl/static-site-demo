import React, { useEffect, useState } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts/7/comments')
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка завантаження:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p style={{ textAlign: 'center' }}>Завантаження відгуків...</p>;
    }

    return (
        <section style={{ margin: '30px 0', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Відгуки роботодавців</h2>
            <div style={{ display: 'grid', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
                {comments.map((item) => (
                    <div key={item.id} style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{item.name}</h4>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 10px 0' }}>Email: {item.email}</p>
                        <p style={{ margin: 0, color: '#444' }}>{item.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;