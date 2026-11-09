function Header() {
    return (
        <header className="flex flex-col items-center bg-purple-100 text-purple-900 p-8 rounded-2xl shadow-lg mb-6 text-center transition-all duration-300 hover:shadow-xl">

            <div className="mb-3 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 cursor-pointer">
                <img
                    src="/kuromi.png"
                    alt="Kuromi"
                    className="w-24 h-24 object-contain"
                />
            </div>

            <h1 className="font-name text-4xl md:text-5xl font-bold mb-2 tracking-wide text-purple-950">
                Саша Ковальчук
            </h1>

            <p className="text-lg opacity-90 mb-5 font-medium" style={{ letterSpacing: '0.5px' }}>
                Студентка першого курсу / Кібербезпека
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <a
                    href="mailto:oleksandra.kovalchuc.kb.2025@lpnu.com"
                    className="flex items-center gap-2 bg-purple-50 border-2 border-purple-300 px-5 py-2.5 rounded-2xl shadow-sm text-purple-900 transition-all duration-300 hover:bg-purple-200 hover:-translate-y-1 hover:shadow-md"
                >
                    <span>✉️</span>
                    <span>Email</span>
                </a>
                <a
                    href="https://github.com/eddirr2267-ctrl"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-50 border-2 border-purple-300 px-5 py-2.5 rounded-2xl shadow-sm text-purple-900 transition-all duration-300 hover:bg-purple-200 hover:-translate-y-1 hover:shadow-md"
                >
                    <span>🐙</span>
                    <span>GitHub</span>
                </a>
            </div>
        </header>
    );
}

export default Header;