"use server";

import { cacheTag, revalidateTag, updateTag } from "next/cache";

const tasks: string[] = ["apprendre l'async"];

export async function getTasks() {
  "use cache";

  cacheTag("tasks");

  return tasks;
}

export async function createTask(form: FormData) {
  const task = form.get("title")?.toString();

  if (task) {
    tasks.push(task);
  }

  updateTag("tasks");
}
