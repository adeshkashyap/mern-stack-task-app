import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';
import API from '../api';
import Swal from 'sweetalert2';
import './Home.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const userEmail = localStorage.getItem('email');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/login');
            return;
        }
        const fetchTasks = async () => {
            try {
                const response = await API.get('/tasks', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTasks(response.data);
            } catch (err) {
                Swal.fire('Error', 'Failed to fetch tasks.', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [history]);

    const addTask = async (task) => {
        const token = localStorage.getItem('token');
        try {
            const response = await API.post('/tasks', {
                ...task,
                completed: !!task.completed
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks([...tasks, response.data]);
            Swal.fire('Success', 'Task added!', 'success');
            setCurrentTask(null);
        } catch (err) {
            Swal.fire('Error', 'Failed to add task.', 'error');
        }
    };

    const editTask = (task) => {
        setCurrentTask(task);
    };

    const updateTask = async (updatedTask) => {
        const token = localStorage.getItem('token');
        try {
            const response = await API.put(`/tasks/${updatedTask._id}`, {
                ...updatedTask,
                completed: !!updatedTask.completed
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(tasks.map(task => task._id === updatedTask._id ? response.data : task));
            setCurrentTask(null);
            Swal.fire('Success', 'Task updated!', 'success');
        } catch (err) {
            Swal.fire('Error', 'Failed to update task.', 'error');
        }
    };

    const deleteTask = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await API.delete(`/tasks/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(tasks.filter(task => task._id !== id));
            setCurrentTask(null);
            Swal.fire('Deleted!', 'Task deleted successfully!', 'success');
        } catch (err) {
            Swal.fire('Error', 'Failed to delete task.', 'error');
        }
    };

    const handleFormSubmit = (task) => {
        if (currentTask) {
            updateTask(task);
        } else {
            addTask(task);
        }
    };

    const clearCurrent = () => setCurrentTask(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        Swal.fire('Logged out', 'You have been logged out.', 'info');
        history.push('/login');
    };

    return (
        <div className="home-dashboard-bg">
            <div className="home-container">
                <div className="home-header">
                    <h1>
                        <span role="img" aria-label="tasks" style={{ marginRight: 8 }}></span>
                        Task Management Dashboard
                    </h1>
                    <div>
                        <span style={{ marginRight: 16, color: '#1976d2', fontWeight: 'bold' }}>
                            {userEmail}
                        </span>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="dashboard-left">
                        <TaskForm
                            onSubmit={handleFormSubmit}
                            currentTask={currentTask}
                            clearCurrent={clearCurrent}
                        />
                    </div>
                    <div className="dashboard-right">
                        {loading ? <p>Loading...</p> : (
                            <TaskList
                                tasks={tasks}
                                onEdit={editTask}
                                onDelete={deleteTask}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;