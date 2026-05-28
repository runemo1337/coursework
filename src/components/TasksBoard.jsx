import { useState, useEffect } from "react";
import { tasks } from "../data/tasks";
import { addSkillPoints } from "../utils/gameLogic";
import "./TasksBoard.css";

const TasksBoard = ({ onClose, skills, setSkills, playerName, onCompleteIntroduction }) => {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem(`completedTasks_${playerName}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem(`completedTasks_${playerName}`, JSON.stringify(completedTasks));
  }, [completedTasks, playerName]);

  const tasksWithStatus = tasks.map(task => ({
    ...task,
    done: completedTasks.includes(task.id)
  }));

  // Функция: какие задания показывать в теме "Знакомство"
  const getVisibleTasksForTheme = (theme, taskList) => {
    if (theme !== "🌟 Знакомство с командой") return taskList;
    
    const mentorTasks = taskList.filter(t => t.action === 'startDialogue');
    const introTask = taskList.find(t => t.action === 'completeIntroduction');
    const allMentorDone = mentorTasks.every(t => completedTasks.includes(t.id));
    const isIntroDone = introTask ? completedTasks.includes(introTask.id) : false;
    
    // Если все знакомства выполнены И задание завершения ещё не выполнено → показываем его
    if (allMentorDone && !isIntroDone) {
      return [...mentorTasks, introTask];
    }
    
    // Если задание завершения уже выполнено → показываем все задания
    if (isIntroDone) {
      return taskList;
    }
    
    // Иначе — только задания на знакомство
    return mentorTasks;
  };

  // Группировка по темам с учётом видимости заданий
  const groupedByTheme = tasksWithStatus.reduce((acc, task) => {
    const theme = task.theme || "Прочие задания";
    if (!acc[theme]) acc[theme] = [];
    acc[theme].push(task);
    return acc;
  }, {});

  // Проверка: все ли знакомства выполнены
  const allMentorTasksDone = () => {
    const mentorTasks = tasks.filter(t => t.action === 'startDialogue');
    return mentorTasks.every(task => completedTasks.includes(task.id));
  };

  const introTask = tasks.find(t => t.action === 'completeIntroduction');
  const isIntroCompleted = introTask ? completedTasks.includes(introTask.id) : false;
  const showCompleteButton = allMentorTasksDone() && !isIntroCompleted;

  const handleTaskClick = (task) => {
    if (task.done) return;
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleAnswer = (selectedIndex, task) => {
    const isCorrect = selectedIndex === task.correctIndex;
    if (isCorrect) {
      const updatedSkills = addSkillPoints(skills, task.skill, task.points);
      setSkills(updatedSkills);
      setCompletedTasks((prev) => [...prev, task.id]);
    } else {
      alert("Неверно! Попробуйте другую задачу.");
    }
    setShowModal(false);
    setSelectedTask(null);
  };

  const toggleDescription = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div className="tasks-board-overlay" onClick={onClose}>
      <div className="tasks-board-container" onClick={(e) => e.stopPropagation()}>
        <div className="board-header">
          <h2>📋 Доска задач</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="board-categories">
          {Object.entries(groupedByTheme).map(([theme, fullTaskList]) => {
            const visibleTasks = getVisibleTasksForTheme(theme, fullTaskList);
            const allTasksInThemeCompleted = visibleTasks.length > 0 && visibleTasks.every(t => t.done);
            
            return (
              <div key={theme} className="category">
                <h3>
                  {theme} {allTasksInThemeCompleted && <span className="theme-completed">✅</span>}
                </h3>
                <div className="tasks-list">
                  {visibleTasks.map((task) => (
                    <div key={task.id} className={`task-item ${task.done ? "completed" : ""}`}>
                      <div className="task-header" onClick={() => toggleDescription(task.id)}>
                        <div className="task-title">{task.title}</div>
                        <div className="task-reward">+{task.points} {task.skill}</div>
                        <div className="task-expand-icon">
                          {expandedTaskId === task.id ? "▲" : "▼"}
                        </div>
                      </div>
                      {expandedTaskId === task.id && (
                        <div className="task-description">
                          <p>{task.description}</p>
                          {!task.done && task.action === "openTaskModal" && (
                            <button className="task-start-btn" onClick={() => handleTaskClick(task)}>
                              Выполнить задание
                            </button>
                          )}
                          {!task.done && task.action === "startDialogue" && (
                            <div className="task-hint">💡 Найди ментора в офисе и поговори с ним</div>
                          )}
                          {task.action === "completeIntroduction" && !task.done && (
                            <div className="task-hint">✨ Нажми кнопку ниже, чтобы завершить знакомство</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {showCompleteButton && (
                  <button className="complete-stage-btn" onClick={onCompleteIntroduction}>
                    ✅ Завершить знакомство
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {showModal && selectedTask && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedTask.title}</h3>
              <p>{selectedTask.description}</p>
              <div className="options">
                {selectedTask.options?.map((opt, idx) => (
                  <button key={idx} onClick={() => handleAnswer(idx, selectedTask)}>
                    {opt}
                  </button>
                ))}
              </div>
              <button className="close-modal" onClick={() => setShowModal(false)}>Закрыть</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksBoard;