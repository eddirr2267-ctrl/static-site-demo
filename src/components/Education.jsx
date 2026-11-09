function Education() {
    return (
        <section
            className="relative p-6 border-2 border-purple-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-purple-300 bg-cover bg-center"
            style={{ backgroundImage: `url('/kuromi-bg.png')` }}
        >

            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>


            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-200">
                    Освіта
                </h2>
                <article className="space-y-2">
                    <h3 className="text-lg font-semibold text-purple-800">
                        Національний університет «Львівська політехніка»
                    </h3>
                    <p className="text-gray-700">
                        <strong className="text-purple-900">Напрям:</strong> кібербезпека та захист інформації
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-purple-900">Період навчання:</strong> 2025 – 2029
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Education;