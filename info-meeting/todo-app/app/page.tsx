'use client';
import Image from 'next/image';
import { useState } from 'react';

/**
 *
 * 1. Button to create a todo object -> COMPLETE
 * 2. Show the user the todo objects -> COMPLETE
 * 3. Edit them
 *
 */

type todo = {
    title: string;
    isComplete: boolean;
};

let oldTodos: todo[] = [
    {
        title: 'study',
        isComplete: false,
    },
    {
        title: 'create a docker container',
        isComplete: true,
    },
    {
        title: 'eat dinner',
        isComplete: false,
    },
];

export default function Home() {
    const [newTodo, setNewTodo] = useState<todo>({
        title: 'Test',
        isComplete: false,
    });
    const [todos, setTodos] = useState<todo[]>(oldTodos);
    const [isEdit, setIsEdit] = useState<number>(-1);
    return (
        <div>
            <br />
            <input
                onChange={(event) => {
                    setNewTodo({
                        title: event.target.value,
                        isComplete: false,
                    });
                }}
                style={{
                    color: '#000',
                }}
                value={newTodo.title}
            />
            <button
                onClick={() => {
                    if (isEdit > -1) {
                        const newTodos = [...todos];
                        newTodos[isEdit] = {
                            ...newTodos[isEdit],
                            title: newTodo.title,
                        };
                        setTodos(newTodos);
                        setIsEdit(-1);
                    } else {
                        const newTodos = [...todos, newTodo];
                        setTodos(newTodos);
                    }
                }}
                style={{
                    background: '#EEEE',
                    color: '#000',
                    margin: '20px',
                    padding: '3px',
                }}>
                {isEdit !== -1 ? 'Edit Todo' : 'Add Todo'}
            </button>
            {todos.map((todo, i) => (
                <div key={i}>
                    <p>{todo.title}</p>
                    <button
                        onClick={() => {
                            setNewTodo(todos[i]);
                            setIsEdit(i);
                        }}
                        style={{
                            background: '#EEEE',
                            color: '#000',
                            margin: '20px',
                            padding: '3px',
                        }}>
                        edit
                    </button>
                </div>
            ))}
        </div>
    );
}
