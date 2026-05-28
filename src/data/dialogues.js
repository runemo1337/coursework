export const dialogues = {
  Егор: {
    start: {
      text: "О, здарова! Это же ты, [Имя]? Мне сказали, новенького дадут?",
      type: "mentor",
      showNextButton: true,
      nextStep: "playerResponse"
    },
    playerResponse: {
      playerText: "Да, это я меня зовут [Имя]",
      type: "player",
      showNextButton: true,
      nextStep: "greetingResponse1",
    },
    greetingResponse1: {
      text: "Меня зовут Егор, я сеньор бэкенда. Но тебе разрешаю называть меня 'папочка'. Шучу, конечно.",
      type:"mentor",
      showNextButton: true,
      nextStep: "questions",
    },
    questions: {
      type: "player",
      options: [
        {
          text: "Слушай, а почему ты выбрал бекэнд?",
          nextStep: "question1Answer"
        },

        {
          text: "Какой твой любимый язык программирования?",
          nextStep: "question2Answer",
        },
        {
          text: "Что можешь рассказать о компании?",
          nextStep: "question3Answer",
        },

        {
          text: "Я узнал все, что хотел",
          nextStep: "task"

        }
      ],
    },

    question1Answer: {
      text: "Ну как, бэкенд — это фундамент. Без него интерфейс — просто красивая картинка. Нужно, чтобы данные с серверов подтягивались — бэкенд. Нужна бизнес-логика — бэкенд. Нужна надёжность как у швейцарских часов — бэкенд. Ни в одном направлении нет столько ответственности. Поэтому если выбираешь бэкенд — готовься, львиная доля держится на тебе. Надеюсь, не испугал.",
      type: "mentor",
      showNextButton: true,
      nextStep: "questions",
    },
    
    question2Answer: {
      text: "В моём случае нет какого-то любимого. Всё зависит от задачи. Если нужна кроссплатформенность — Java. Если лаконичность — Python. Если хочешь быть на стиле — Go. Ну а если ты вздумал переписать весь интернет — то это бесспорно C. Совет: не вздумай переписывать интернет, тебе не понравится.",
      type: "mentor",
      showNextButton: true,
      nextStep: "questions",
    },
    question3Answer: {
      text: "Наша компания называется Star Vision. Миссия — создать систему видения со спутников. Звучит космически, да? Но пока больше похоже на космические бюджеты.",
      type: "mentor",
      showNextButton: true,
      nextStep: "questions",
    },
    task: {
      text: "А теперь тест на внимательность. Допустим, ты пишешь на Python. Что выведет этот код?\n\ndef add(a, b):\n    return a + b\n\nresult = add(5, '3')\nprint(result)",
      options: [
        {
          text: "8",
          nextStep: "taskWrong",
          skill: "",
          points: 0,
          secondarySkill: null,
          secondaryPoints: 0,
        },
        {
          text: "53",
          nextStep: "taskWrong",
          skill: "",
          points: 0,
          secondarySkill: null,
          secondaryPoints: 0,
        },
        {
          text: "Ошибка",
          nextStep: "taskCorrect",
          skill: "logic",
          points: 15,
          secondarySkill: "attention",
          secondaryPoints: 5
        },
      ],
    },

    taskCorrect: {
      text: "Верно! Python — строгий, он не складывает число со строкой просто так. Вылетит TypeError. В этом его плюс — меньше магии, меньше багов.",
      type: "mentor",
      showNextButton: true,
      nextStep: "sayGoodbye",

    },
    taskWrong: {
      text: "Неа. В Python число и строку так просто не сложишь. Вылетит TypeError. В JavaScript бы сработало, но мы тут про серьёзные языки. Запомни.",
      type: "mentor",
      showNextButton: true,
      nextStep: "sayGoodbye",
    },

    sayGoodbye: {
      playerText: "Спасибо, я пойду пока познакомлюсь с другими.",
      type: "player",
      showNextButton: true,
      nextStep: "farewell",
    },

    farewell: {
      text: "Давай. Если захочешь узнать что-то про бэкенд или просто зачиллиться — приходи. Папочка всегда на связи. Шучу.",
      type: "mentor",
      showNextButton: true,
      nextStep: "close",
    },
  },

  Маша: {
  start: {
    text: "Ооооо, привет! Ты же новенький, да?",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse"
  },
  playerResponse: {
    playerText: "Ну да, меня только назначили на стажировку в вашу компанию.",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse1"
  },
  greetingResponse1: {
    text: "Класс! Я всегда знала, что у меня будет ученик. Ой, прости, я что-то сразу тебя к себе определила. Ты же на ознакомительной стажировке?",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse2"
  },
  playerResponse2: {
    playerText: "Да.",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse2"
  },
  greetingResponse2: {
    text: "Ой, прости-прости, просто часто забегаю вперёд... Давай сначала познакомимся. Я — Маша. А тебя как зовут?",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse3"
  },
  playerResponse3: {
    playerText: "Я — [Имя].",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse3"
  },
  greetingResponse3: {
    text: "Очень приятно, [Имя]! А у нас тут, как видишь, работа идёт полным ходом. Все стараются, дедлайны горят — надо кровь из носу успеть к сдаче. Ой, я только с тобой познакомилась, а уже пугаю. Прости.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  questions: {
    type: "player",
    options: [
      { text: "Что ты можешь рассказать про фронтенд?", nextStep: "question1Answer" },
      { text: "На каких языках вы пишете?", nextStep: "question2Answer" },
      { text: "Что ты любишь делать в свободное время?", nextStep: "question3Answer" },
      { text: "Я узнал всё, что хотел", nextStep: "task" }
    ]
  },
  question1Answer: {
    text: "Нууууу... если вкратце, то фронтенд — это то, что видит пользователь. Мы делаем кнопки, окошки, картинки, анимации — всё, с чем ты взаимодействуешь на сайте. Когда ты что-то вводишь или нажимаешь — фронтенд собирает это и отправляет на сервер. А когда сервер отвечает — мы показываем эти данные красиво и понятно. Ну и ещё мы делаем так, чтобы на разных устройствах и в разных браузерах всё отображалось одинаково круто. Здесь есть где разгуляться, если ты творческая личность.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question2Answer: {
    text: "Весь фронтенд держится на трёх китах — HTML, CSS и... барабанная дробь... JavaScript! Мой любимый язык, потому что с его помощью ты можешь написать что угодно — любой эффект и любую штуку. Сделать так, чтобы сайт был интересным. И ограничено там всё только твоим воображением!",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question3Answer: {
    text: "Ой, знаешь, я так люблю смотреть аниме. Мои самые любимые — «Наруто», «Магическая битва» и «Волейбол».",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  task: {
    text: "И раз уж ты пришёл ко мне, то вот тебе мини-задача. У тебя есть кнопка на сайте. При клике на неё должен появляться текст «Привет, мир!». Какой язык программирования для этого нужен?",
    type: "mentor",
    options: [
      { text: "HTML", nextStep: "taskWrong", skill: "", points: 0 },
      { text: "CSS", nextStep: "taskWrong", skill: "", points: 0 },
      { text: "JavaScript", nextStep: "taskCorrect", skill: "creativity", points: 15, secondarySkill: "attention", secondaryPoints: 5 }
    ]
  },
  taskCorrect: {
    text: "Да! Молодец! JavaScript делает сайт живым. Без него кнопка была бы просто картинкой.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  taskWrong: {
    text: "Неа. HTML — это скелет, CSS — это кожа, а JavaScript — это сердце. Без него ничего не оживёт. Правильный ответ — JavaScript!",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  sayGoodbye: {
    playerText: "Спасибо, я пойду пока познакомлюсь с другими.",
    type: "player",
    showNextButton: true,
    nextStep: "farewell"
  },
  farewell: {
    text: "До скорого, мой надеюсь будущий ученик!",
    type: "mentor",
    showNextButton: true,
    nextStep: "close"
  },
},

  Андрей: {
  start: {
    text: "Привет! Рады тебя видеть в нашем офисе. Молодая кровь всегда нужна большим проектам! Я — Андрей, специалист по внедрению DevOps-практик.",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse"
  },
  playerResponse: {
    playerText: "Привет, я [Имя], стажёр.",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse"
  },
  greetingResponse: {
    text: "Приятно познакомиться, [Имя]. Я готов быть твоим проводником в сферу DevOps — самую тяжёлую, как мне кажется, сферу IT.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  questions: {
    type: "player",
    options: [
      { text: "Почему это самая тяжёлая сфера IT?", nextStep: "question1Answer" },
      { text: "Какие харды должны быть у DevOps-инженера?", nextStep: "question2Answer" },
      { text: "Тяжело быть DevOps-инженером?", nextStep: "question3Answer" },
      { text: "Я узнал всё, что хотел", nextStep: "task" }
    ]
  },
  question1Answer: {
    text: "Потому что задача DevOps — это оптимизация тестирования, доставки и релиза кода. Мы, по сути, должны связывать все направления, чтобы они работали слаженно. А ещё отвечать за серверную часть и своевременный выкат фич и дебаггинг.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question2Answer: {
    text: "Ну, во-первых, Git — это там где лежит код, без него никуда. CI/CD системы — они забирают код из Git, прогоняют тесты и доставляют на сервер. И ещё Docker — упаковываешь проект в контейнер, и он работает одинаково на любом устройстве. Ну и Linux, куда без него.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question3Answer: {
    text: "Если честно — да. Работа девопса — это всегда развитие. Ты должен знать многие технологии, которые выходят за уровень твоего профиля. Также очень важны навыки коммуникации, ведь тебе надо будет тесно общаться с отделом разработки, тестирования и сис-админами. Ну и вообще крутиться как белка в колесе. Хотя с другой стороны, в этом есть много плюсов — ты сможешь расширить свой профиль и быстрее выйти на профессиональный уровень.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  task: {
    text: "А теперь тест на внимательность. Представь, что у нас есть контейнер Docker. Какой командой можно запустить контейнер?",
    type: "mentor",
    options: [
      { text: "docker run", nextStep: "taskCorrect", skill: "systems", points: 15, secondarySkill: "logic", secondaryPoints: 5 },
      { text: "docker start", nextStep: "taskWrong", skill: "", points: 0 },
      { text: "docker build", nextStep: "taskWrong", skill: "", points: 0 }
    ]
  },
  taskCorrect: {
    text: "Верно! docker run — это основная команда для запуска контейнера. Ты быстро схватываешь.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  taskWrong: {
    text: "Неа. docker build — это сборка образа, docker start — запуск остановленного контейнера. А для запуска нового нужен docker run. Запомни, пригодится.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  sayGoodbye: {
    playerText: "Спасибо, я пойду пока познакомлюсь с другими.",
    type: "player",
    showNextButton: true,
    nextStep: "farewell"
  },
  farewell: {
    text: "Я надеюсь, у нас с тобой в будущем будет много продуктивной работы!",
    type: "mentor",
    showNextButton: true,
    nextStep: "close"
  },
},

  Вова: {
  start: {
    text: "Привет",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse"
  },
  playerResponse: {
    playerText: "Здравствуйте.",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse1"
  },
  greetingResponse1: {
    text: "Ты новичок, что ли?",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse2"
  },
  playerResponse2: {
    playerText: "Да, меня взяли на место стажёра в этой компании.",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse2"
  },
  greetingResponse2: {
    text: "А, пон, пон. И типо я тебе должен объяснять, кто я такой и чем я занимаюсь? Гений-создатель... Ну ладно. Меня зовут Вова, я специалист по Data Science. Умею писать SQL-запросы и знаю, что такое градиентный спуск.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  questions: {
    type: "player",
    options: [
      { text: "Расскажи поподробнее про ваше направление.", nextStep: "question1Answer" },
      { text: "Какие инструменты вы используете в своём профиле?", nextStep: "question2Answer" },
      { text: "Вам нравится ваша профессия?", nextStep: "question3Answer" },
      { text: "Я узнал всё, что хотел", nextStep: "fakeSayGoodbye" }
    ]
  },
  question1Answer: {
    text: "Ну что сказать. Представь, у тебя есть 100 терабайт данных от какого-то сервиса. И тебе нужно проанализировать эти данные и сделать так, чтобы этот сервис работал эффективнее — путём выдвижения и проверки гипотез и машинного обучения с нейронками.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question2Answer: {
    text: "Ну, самая база — это Python, знание SQL и способность к ML. Ну и что-то про нейронки.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question3Answer: {
    text: "Даааа... это так, по приколу больше. Вот моя мечта была быть топ-1 в Brawl Stars на Грее, но, к сожалению, я ушёл из киберспорта.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },

  fakeSayGoodbye: {
    text: "Ну всё, теперь можешь идти.",
    type: "mentor",
    showNextButton: true,
    nextStep: "whyGoodbye"
  },

  whyGoodbye: {
    playerText: "А вы разве не будете давать задачу, как другие?",
    type: "player",
    showNextButton: true,
    nextStep: "task"
  },

  task: {
    text: "А, точно. Ну смотри... У нас есть график ошибок модели. Training error падает, а Validation error растёт. Что это значит?",
    type: "mentor",
    options: [
      { text: "Модель недообучена", nextStep: "taskWrong", skill: "", points: 0 },
      { text: "Модель переобучена", nextStep: "taskCorrect", skill: "analytics", points: 15, secondarySkill: "logic", secondaryPoints: 5 },
      { text: "Модель работает идеально", nextStep: "taskWrong", skill: "", points: 0 }
    ]
  },
  taskCorrect: {
    text: "О, а ты шаришь. Да, это переобучение. Модель выучила тренировочные данные наизусть, а новые не понимает.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  taskWrong: {
    text: "Не, это переобучение. Модель выучила тренировочные данные как свои пять пальцев, а на новых данных тупит. Бывает, лечится регуляризацией.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  sayGoodbye: {
    playerText: "Спасибо, я пойду.",
    type: "player",
    showNextButton: true,
    nextStep: "farewell"
  },
  farewell: {
    text: "Всё, пока.",
    type: "mentor",
    showNextButton: true,
    nextStep: "close"
  },
},

  Дмитрий: {
  start: {
    text: "Здравствуй, меня зовут Дима, рад знакомству. Я так понимаю, ты стажёр?",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse"
  },
  playerResponse: {
    playerText: "Здравствуйте, да, меня только наняли. Я [Имя].",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse1"
  },
  greetingResponse1: {
    text: "Ой, у вас воротник у рубашки немного задрался. Позвольте, поправлю.",
    type: "mentor",
    showNextButton: true,
    nextStep: "playerResponse2"
  },
  playerResponse2: {
    playerText: "Видимо, когда собирался, забыл выправить...",
    type: "player",
    showNextButton: true,
    nextStep: "greetingResponse2"
  },
  greetingResponse2: {
    text: "Ничего страшного в том, чтобы что-то забывать и ошибаться. Самое главное — отслеживать ошибки и вовремя их исправлять. Такая уж у меня работа — я специалист по QA.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  questions: {
    type: "player",
    options: [
      { text: "Что вы можете рассказать про QA?", nextStep: "question1Answer" },
      { text: "Какие инструменты используются в QA?", nextStep: "question2Answer" },
      { text: "Почему вы выбрали именно QA?", nextStep: "question3Answer" },
      { text: "Я узнал всё, что хотел", nextStep: "task" }
    ]
  },
  question1Answer: {
    text: "QA — это часть разработки проекта, которая отвечает за тестирование продукта. Всякие пограничные случаи, исключения, в общем, все непредвиденные ситуации мы должны предвидеть и описать, чтобы отдел разработки мог исправить все ошибки и код стал чистым и рабочим.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question2Answer: {
    text: "Наши инструменты — это баг-трекеры вроде Jira, системы для тест-кейсов (TestRail, Qase), автотесты на Selenium или Cypress. Иногда всё делаем вручную — зависит от задачи. Ну и SQL с Linux часто нужны для понимания, что происходит под капотом.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  question3Answer: {
    text: "Ну, я по своей сущности перфекционист и склонен к изучению любой мелочи, которая плохо лежит. Это можно сказать, мой софт-скилл. Ну а так мне нравится ломать программы, которые пишут наши программисты. А мои врождённые навыки помогают найти путь к этому.",
    type: "mentor",
    showNextButton: true,
    nextStep: "questions"
  },
  task: {
    text: "А теперь проверка на внимательность. На сайте есть форма регистрации. Поле email принимает адрес без символа @. Это баг или фича?",
    type: "mentor",
    options: [
      { text: "Баг", nextStep: "taskCorrect", skill: "attention", points: 15, secondarySkill: "analytics", secondaryPoints: 5 },
      { text: "Фича", nextStep: "taskWrong", skill: "", points: 0 }
    ]
  },
  taskCorrect: {
    text: "Точно! Без @ это не email. Ты внимателен. Хороший тестировщик должен замечать такие мелочи.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  taskWrong: {
    text: "Неа. Это баг. Email без @ не существует. QA должен замечать такие очевидные вещи.",
    type: "mentor",
    showNextButton: true,
    nextStep: "sayGoodbye"
  },
  sayGoodbye: {
    playerText: "Спасибо, я пойду.",
    type: "player",
    showNextButton: true,
    nextStep: "farewell"
  },
  farewell: {
    text: "До скорого. Заходи, как будет время.",
    type: "mentor",
    showNextButton: true,
    nextStep: "close"
  },
},
Робот: {
  // ========== АВТОМАТИЧЕСКИЙ ТУТОРИАЛ (ПЕРВЫЙ ДИАЛОГ) ==========
  tutorialStart: {
    text: "Приветствую тебя, стажёр! Меня зовут B.A.G! Binary Algorithmic Guide — бинарный алгоритмический гид!",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialIntro1"
  },
  tutorialIntro1: {
    text: "Я специально разработан и внедрён для того, чтобы помогать тем, кто приходит к нам на распределительную стажировку.",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialIntro2"
  },
  tutorialIntro2: {
    text: "Сейчас у компании сложный период, и у нас почти нет денег, чтобы нанять много узкоквалифицированных специалистов.",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialIntro3"
  },
  tutorialIntro3: {
    text: "Поэтому ты будешь проходить стажировку по всем нашим пяти направлениям!",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialIntro4"
  },
  tutorialIntro4: {
    text: "Это Backend, Frontend, DevOps, Data Science и QA!",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialIntro5"
  },
  tutorialIntro5: {
    text: "Пойдём, покажу наш офис и ребят, у которых ты будешь обучаться.",
    type: "mentor",
    showNextButton: true,
    nextStep: "tutorialShowOffice"
  },
  tutorialShowOffice: {
    text: "У нас простенький офис. Если что-то понадобится — просто кликни! Для начала можешь на меня!)",
    type: "mentor",
    action: "showRobotMap",
    showNextButton: true,
    nextStep: "close"
  },

  // ========== ПОСЛЕ КЛИКА ПО РОБОТУ НА КАРТЕ ==========
  afterClick: {
    text: "Это твой первый айтем на сегодня — доска с заданиями. Нажми на неё!",
    type: "mentor",
    action: "moveRobotToTaskBoard",
    action: "showTaskButton",
    action: "highlightTaskBoard",
    options: [
      { text: "Понял", nextStep: "close" }
    ]
  },

  // ========== ВНУТРИ ДОСКИ ЗАДАЧ (ТУТОРИАЛ) ==========
  insideTaskBoard: {
    text: "Каждый раз на ней будут появляться новые задания, выполняя которые ты сможешь получать опыт и двигаться дальше. О смотри, у тебя уже первое задание есть: надо познакомиться со всеми, пошли быстрее! Чтобы выйти - нажми на крестик",
    type: "mentor",
    nextStep: "close" 
    
  },

  // ========== ПРОЩАНИЕ РОБОТА ==========
  goodbye: {
    text: "Ну, пока я тебя оставлю. Иди знакомься с менторами. Как закончишь — я снова приду. Удачи!",
    type: "mentor",
    options: [
      { text: "Понял, спасибо!", nextStep: "close" }
    ]
  },
  afterIntroduction: {
  text: "И снова здравствуй! Я вижу, ты уже познакомился с командой! Ну как тебе наша организация?",
  type: "mentor",
  options: [
    { text: "Все отлично, мне понравилось, хорошие ребята", nextStep: "reactionPositive" },
    { text: "Неплохо, рабочий коллектив", nextStep: "reactionNeutral" },
    { text: "Мне не особо зашло", nextStep: "reactionNegative" }
  ]
},
reactionPositive: {
  text: "Это замечательно! Такими темпами ты быстро вольёшься в команду и сможешь освоиться!",
  type: "mentor",
  showNextButton: true,
  nextStep: "chooseMentorIntro"
},
reactionNeutral: {
  text: "Да, самое главное — это работоспособность, и здесь ты её прокачаешь на максимум!",
  type: "mentor",
  showNextButton: true,
  nextStep: "chooseMentorIntro"
},
reactionNegative: {
  text: "Не спеши с выводами, это только начало, тебе нужно просто почувствовать этот вайб!",
  type: "mentor",
  showNextButton: true,
  nextStep: "chooseMentorIntro"
},
chooseMentorIntro: {
  text: "А теперь по контракту стажировки ты должен выбрать ментора для дальнейшего обучения. Подумай прежде чем выбрать!",
  type: "mentor",
  options: [
    { 
      text: "Далее", 
      nextStep: "close",
      action: "openMentorSelection"
    }
  ]

  
},
afterMentorChoice: {
  text: "Ну что ж, я желаю тебе удачи в твоей первой распределительной стажировке. Сейчас основные задачи у тебя будут по выбранному направлению, также возможны смежные задачи. Если заскучаешь, на доске иногда будут появляться дополнительные задания. И да, если ты поймёшь, что хочешь поменять ментора, просто скажи ему об этом. Но я бы советовал пройти до конца обучение у всех, так потом будет проще. До встречи!",
  type: "mentor",
  options: [
    { text: "Спасибо, до встречи!", nextStep: "close" }
  ]
},
}

}
