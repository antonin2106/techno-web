import { getTasks, createTask } from "@/lib/tasks";

export default async function () {
  const tasks = await getTasks();

  return (
    <section>
      <h1 className="text-2x1 text-green-500">Mes tâche</h1>

      <ul className=" list-disc list-inside">
        {tasks.map((task) => (
          <li key={task}> {task} </li>
        ))}
      </ul>

      <form action={createTask}>
        Tâche:
        <input name="title" />
        <input name="bonjour_lur" />
        <button> ajouter </button>
      </form>
    </section>
  );
}
