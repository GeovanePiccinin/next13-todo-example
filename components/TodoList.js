import TodoItem from "./TodoItem";
/*
export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/posts?_limit=10");
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 10,
  };
}

*/

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list", {
    cache: "no-store",
  });
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();

  console.log("todos", todos);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <TodoItem todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
