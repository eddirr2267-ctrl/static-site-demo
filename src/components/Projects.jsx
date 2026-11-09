function Projects() {
    return (
        <section className="bg-white p-6 border-2 border-purple-200 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-purple-300">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-100">
                Навчальні роботи та проєкти
            </h2>
            <div className="space-y-4">
                <article className="bg-purple-50 p-4 rounded-xl border border-purple-100 transition-all duration-200 hover:bg-purple-100 hover:scale-[1.01]">
                    <h3 className="text-lg font-semibold text-purple-900 mb-1">Проєктування бази даних</h3>
                    <p className="text-gray-700 text-sm">Розроблення структури реляційної бази даних, визначення таблиць, ключів та зв'язків між даними. Написання SQL-запитів.</p>
                </article>

                <article className="bg-purple-50 p-4 rounded-xl border border-purple-100 transition-all duration-200 hover:bg-purple-100 hover:scale-[1.01]">
                    <h3 className="text-lg font-semibold text-purple-900 mb-1">Програмування</h3>
                    <p className="text-gray-700 text-sm">Виконання навчальних завдань мовами Python, C++ та C#. Робота з алгоритмами та ООП.</p>
                </article>

                <article className="bg-purple-50 p-4 rounded-xl border border-purple-100 transition-all duration-200 hover:bg-purple-100 hover:scale-[1.01]">
                    <h3 className="text-lg font-semibold text-purple-900 mb-1">Комп'ютерні мережі та безпека</h3>
                    <p className="text-gray-700 text-sm">Вивчення мережевих топологій, Ethernet, принципів захисту інформації, хешування та безпеки паролів.</p>
                </article>
            </div>
        </section>
    );
}

export default Projects;