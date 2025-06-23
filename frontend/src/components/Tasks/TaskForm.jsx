import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './TaskForm.css';

const initialTaskState = {
    title: '',
    description: '',
    completed: false,
};

const TaskForm = ({ currentTask, onSubmit, clearCurrent }) => {
    const [task, setTask] = useState(initialTaskState);

    useEffect(() => {
        if (currentTask) {
            setTask(currentTask);
        } else {
            setTask(initialTaskState);
        }
    }, [currentTask]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        Swal.fire(
            'Success',
            currentTask ? 'Task updated successfully!' : 'Task added successfully!',
            'success'
        );
        setTask(initialTaskState);
        clearCurrent();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '18px', color: '#1976d2', textAlign: 'center' }}>
                {currentTask ? 'Edit Task' : 'Add New Task'}
            </h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Enter task title"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    placeholder="Enter task description"
                    required
                />
            </div>
            <div className="form-group checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        name="completed"
                        checked={task.completed}
                        onChange={handleChange}
                    />
                    <span style={{ marginLeft: 8 }}>Completed</span>
                </label>
            </div>
            <div className="form-actions">
                <button type="submit" className="primary-btn">
                    {currentTask ? 'Update Task' : 'Add Task'}
                </button>
                {currentTask && (
                    <button type="button" className="secondary-btn" onClick={() => {
                        setTask(initialTaskState);
                        clearCurrent();
                    }}>
                        Clear
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskForm;