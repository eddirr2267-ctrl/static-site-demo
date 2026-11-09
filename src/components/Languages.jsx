function Languages() {
    return (
        <section className="relative bg-purple-100 kuromi-bg-pattern p-6 border-2 border-purple-300 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400 text-purple-950">


            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-purple-950 mb-4 border-b pb-2 border-purple-300">
                    Мови
                </h2>
                <dl className="space-y-2">
                    <div className="flex justify-between items-center bg-purple-50/90 p-3 rounded-xl border border-purple-200 transition-all duration-200 hover:bg-purple-100">
                        <dt className="font-semibold text-purple-950">Українська</dt>
                        <dd className="text-purple-900 font-medium">Рідна</dd>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/90 p-3 rounded-xl border border-purple-200 transition-all duration-200 hover:bg-purple-100">
                        <dt className="font-semibold text-purple-950">Англійська</dt>
                        <dd className="text-purple-900 font-medium">Середній рівень</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default Languages;