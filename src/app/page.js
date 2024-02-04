"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
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
    <main className={styles.main}>
      <p>Todos</p>
      <input type="text" value={home} onChange={(e) => setHome(e.target.value)} />

      <button onClick={submit}>Submit</button>
    </main>
  );
}
