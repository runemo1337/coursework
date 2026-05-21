import { useState, useEffect } from "react";
import { tasks } from "../data/tasks";
import { addSkillPoints } from "../utils/gameLogic";

const TasksBoard = ({ onClose, skills, setSkills, playerName }) => {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem(`completedTasks_${playerName}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(`completedTasks_${playerName}`, JSON.stringify(completedTasks));
  }, [completedTasks, playerName]);

  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.skill]) acc[task.skill] = [];
    acc[task.skill].push(task);
    return acc;
  }, {});

  const handleTaskClick = (task) => {
    if (completedTasks.includes(task.id)) return;
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleAnswer = (selectedIndex) => {
    if (!selectedTask) return;

    const isCorrect = selectedIndex === selectedTask.correctIndex;
    if (isCorrect) {
      const updatedSkills = addSkillPoints(
        skills,
        selectedTask.skill,
        selectedTask.points,
      );
      setSkills(updatedSkills);
      setCompletedTasks((prev) => [...prev, selectedTask.id]);
    } else {
      alert("Неверно! Попробуйте другую задачу.");
    }
    setShowModal(false);
    setSelectedTask(null);
  };

  return (
    <div className="tasks-board-overlay" onClick={onClose}>
      <div
        className="tasks-board-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="board-header">
          <h2>Доска задач</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="board-categories">
          {Object.entries(groupedTasks).map(([skill, taskList]) => (
            <div key={skill} className="category">
              <h3>{skill}</h3>
              <div className="tasks-list">
                {taskList.map((task) => (
                  <button
                    key={task.id}
                    className={`task-button ${completedTasks.includes(task.id) ? "completed" : ""}`}
                    onClick={() => handleTaskClick(task)}
                    disabled={completedTasks.includes(task.id)}
                  >
                    {task.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedTask && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedTask.title}</h3>
              <p>{selectedTask.description}</p>
              <div className="options">
                {selectedTask.options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleAnswer(idx)}>
                    {opt}
                  </button>
                ))}
              </div>
              <button
                className="close-modal"
                onClick={() => setShowModal(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksBoard;