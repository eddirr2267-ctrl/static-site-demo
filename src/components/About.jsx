function About() {
    return (
        <section className="relative bg-purple-50/80 p-6 border-2 border-purple-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-purple-300">

            <img
                src="/kuromi.png"
                alt=""
                className="absolute -bottom-4 -right-4 w-28 h-28 object-contain opacity-10 pointer-events-none"
            />

            <h2 className="text-2xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-200 relative z-10">
                Коротко про мене
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3 relative z-10">
                Я студентка Національного університету «Львівська політехніка», цікавлюся інформаційними технологіями, програмуванням та кібербезпекою.
            </p>
            <p className="text-gray-700 leading-relaxed relative z-10">
                Під час навчання працюю з різними мовами програмування, базами даних та комп'ютерними мережами. Мені подобається отримувати практичні навички та застосовувати отримані знання під час виконання навчальних проєктів.
            </p>
        </section>
    );
}

export default About;