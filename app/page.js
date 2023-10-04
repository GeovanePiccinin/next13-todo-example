import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main
      style={{
        width: "560px",
        marginRight: "auto",
        marginLeft: "auto",
        border: "1px solid black",
        padding: "16px",
      }}
    >
      <TodoForm />
      <TodoList />
    </main>
  );
}
