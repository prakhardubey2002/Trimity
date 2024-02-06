"use client"
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Todos() {
    const { user, error, isLoading } = useUser();
    const [home, setHome] = useState("");
    const createTodos = useMutation(api.todos.createTodo)
    function submit(e) {
        e.preventDefault(); // Corrected from e.prevent.default();
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        const hoursIn12HFormat = hours > 12 ? hours - 12 : hours;
        const amPmIndicator = hours >= 12 ? 'PM' : 'AM';

        const timeText = `${hoursIn12HFormat}:${minutes}:${seconds} ${amPmIndicator}`;

        createTodos({
            text: home,
            logs: timeText,
        })

        console.log("Form submitted!");
    }

    return (
        <main >
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
            <p>Todosasccnfosdnokcsndzks</p>
            <input type="text" value={home} onChange={(e) => setHome(e.target.value)} />
            {user && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
            <button onClick={submit}>Submit</button>
        </main>
    );
}
