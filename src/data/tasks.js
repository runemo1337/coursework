export const tasks = [
  // Backend (logic)
  {
    id: 1,
    skill: "logic",
    title: "Найди ошибку в коде",
    description: "Что не так в этой функции?\n\ndef get_user(id):\n    user = users[id]\n    return user",
    options: ["Нет обработки ошибок", "Синтаксическая ошибка", "Всё правильно"],
    correctIndex: 0,
    points: 15
  },
  {
    id: 2,
    skill: "logic",
    title: "Что выведет код?",
    description: "x = [1, 2, 3]\nprint(x[3])",
    options: ["1", "3", "Ошибка"],
    correctIndex: 2,
    points: 15
  },
  
  // Frontend (creativity)
  {
    id: 3,
    skill: "creativity",
    title: "Как сделать кнопку красной?",
    description: "Какой CSS цвет сделает кнопку красной?",
    options: ["green", "red", "blue"],
    correctIndex: 1,
    points: 15
  },
  {
    id: 4,
    skill: "creativity",
    title: "Что делает JavaScript?",
    description: "JavaScript отвечает за...",
    options: ["Стили", "Структуру", "Интерактивность"],
    correctIndex: 2,
    points: 15
  },

  // DevOps (systems)
  {
    id: 5,
    skill: "systems",
    title: "Что такое Docker?",
    description: "Docker — это инструмент для...",
    options: ["Виртуализации", "Контейнеризации", "Эмуляции"],
    correctIndex: 1,
    points: 15
  },
  {
    id: 6,
    skill: "systems",
    title: "GitHub Actions — это...",
    description: "GitHub Actions используется для...",
    options: ["Хранения кода", "CI/CD", "Базы данных"],
    correctIndex: 1,
    points: 15
  },

  // Data Science (analytics)
  {
    id: 7,
    skill: "analytics",
    title: "Что делает модель?",
    description: "Модель машинного обучения...",
    options: ["Хранит данные", "Находит закономерности", "Рисует графики"],
    correctIndex: 1,
    points: 15
  },
  {
    id: 8,
    skill: "analytics",
    title: "Pandas — это...",
    description: "Библиотека для...",
    options: ["Анализа данных", "Веб-разработки", "Игр"],
    correctIndex: 0,
    points: 15
  },

  // QA (attention)
  {
    id: 9,
    skill: "attention",
    title: "Что такое баг?",
    description: "Баг — это...",
    options: ["Новая фича", "Ошибка в программе", "Документация"],
    correctIndex: 1,
    points: 15
  },
  {
    id: 10,
    skill: "attention",
    title: "Jira — это...",
    description: "Инструмент для...",
    options: ["Тестирования", "Отслеживания багов", "Написания кода"],
    correctIndex: 1,
    points: 15
  }
];