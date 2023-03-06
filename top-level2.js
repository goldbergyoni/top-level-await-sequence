import { setTimeout } from "timers/promises";

export const todos = await bring();

async function bring() {
  const startTime = new Date();
  console.log("Starting bring2", startTime.getSeconds(), startTime.getMilliseconds());
  await setTimeout(1000);
  console.log("Ending bring", );
}
