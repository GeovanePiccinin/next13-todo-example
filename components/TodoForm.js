"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function TodoForm() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{ flex: "1", padding: "5px", marginRight: "10px" }}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
