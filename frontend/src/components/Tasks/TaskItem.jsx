import React from 'react';
import Swal from 'sweetalert2';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This task will be deleted permanently!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d32f2f',
            cancelButtonColor: '#1976d2',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(task._id);
                Swal.fire('Deleted!', 'Task deleted successfully!', 'success');
            }
        });
    };

    return (
        <li className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <div>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;