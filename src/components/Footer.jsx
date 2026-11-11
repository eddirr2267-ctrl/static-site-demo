import React, { useEffect, useState } from 'react';

function Footer() {
    const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        localStorage.setItem('systemInfo', JSON.stringify(info));
        setSysInfo(info);
    }, []);

    return (
        <footer style={{ marginTop: '40px', padding: '20px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
            <p>&copy; 2026 Саша Ковальчук. Всі права захищені.</p>

            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Сайт розгорнуто на Vercel
            </p>

            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                <p><strong>Браузер/Система (User Agent):</strong> {sysInfo.userAgent}</p>
                <p><strong>Платформа:</strong> {sysInfo.platform}</p>
            </div>
        </footer>
    );
}

export default Footer;