import * as todos1 from "./top-level1.js";
import * as todos2 from "./top-level2.js";

function start() {
  const startTime = new Date();
  console.log(
    "Starting the app, did the imports ran in parallel?",
    startTime.getSeconds(),
    startTime.getMilliseconds()
  );
}

start();
