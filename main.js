import { task1, name } from "./1.js";
import t2 from "./2.js";
import * as skills from "./3.js";

setTimeout(task1, 2000);
setTimeout(() => {
  console.log(name);
}, 1500);
setTimeout(t2, 1000);
console.log(skills);
