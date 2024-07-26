import React from "react";

const items = [
  {
    id: 1,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    txt: "- Глубокий анализ и диагностика проблем бизнеса",
  },
  {
    id: 2,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    txt: "- Эффективные стратегии для увеличения прибыли",
  },
  {
    id: 3,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    txt: "- Оптимизация бизнес-процессов",
  },
  {
    id: 5,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    txt: "- Высококвалифицированная команда экспертов",
  },
  {
    id: 6,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    txt: "- Индивидуальный подход к каждому клиенту",
  },
];

const BenefitsOfWorkingWithUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Преимущества работы с нами
        </h2>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {items.map((e) => (
            <div className="p-4 md:w-1/3 flex" key={e.id}>
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green mb-4 flex-shrink-0">
                {e.icon}
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {e.txt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfWorkingWithUs;
