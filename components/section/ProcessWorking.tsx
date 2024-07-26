import React from "react";

const items = [
  {
    id: 1,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: " Первичная консультация",
    txt: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
  {
    id: 2,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Глубокий анализ и диагностика",
    txt: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
  {
    id: 3,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Разработка стратегии",
    txt: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
  {
    id: 4,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Внедрение изменений",
    txt: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
  {
    id: 5,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Оценка результатов и дальнейшие рекомендации",
    txt: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
];

const ProcessWorking = () => {
  return (
    <section className="container py-24 mx-auto text-gray-600 body-font">
      <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-5">
        Процесс работы
      </h2>
      <div className="flex justify-center">
        <p className="mb-20 leading-relaxed text-center max-w-4xl ">
          Наш процесс начинается с глубокого анализа текущего состояния вашего
          бизнеса, выявления ключевых проблем и разработки стратегий для их
          устранения. Мы работаем в тесном сотрудничестве с вами, чтобы достичь
          устойчивых результатов.
        </p>
      </div>
      <div className=" flex flex-wrap">
        {items.map((e) => (
          <div key={e.id} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              {e.id}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                {e.icon}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {e.title}
                </h2>
                <p className="leading-relaxed">{e.txt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessWorking;
