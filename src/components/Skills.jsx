function Skills() {
    return (
        <section className="relative bg-purple-100 kuromi-bg-pattern p-6 pb-24 border-2 border-purple-300 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>


            <img
                src="/kuromi-book.png"
                alt="Kuromi reading"
                className="absolute -bottom-5 -right-5 w-32 h-32 object-contain z-20 pointer-events-none opacity-70"
            />

            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-purple-950 mb-4 border-b pb-2 border-purple-300">
                    Технічні навички та якості
                </h2>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Технології та навички</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">HTML та вебсторінки</li>
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">Python, C++, C#</li>
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">SQL та бази даних</li>
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">Мережі та кібербезпека</li>
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">Git та GitHub</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Особисті якості</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">Відповідальність та уважність</li>
                        <li className="bg-purple-50/90 text-purple-950 px-3 py-1.5 rounded-xl border border-purple-200 text-sm font-medium transition-all duration-200 hover:bg-purple-200 hover:scale-105 shadow-sm">Бажання навчатися і самостійність</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;