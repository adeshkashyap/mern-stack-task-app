import React from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onEdit }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <TaskItem 
                            key={task._id} 
                            task={task} 
                            onDelete={onDelete} 
                            onEdit={onEdit} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;