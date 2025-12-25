import express from "express";
// ====================================
import { DeveloperController } from "./controllers";
const app = express();
const port = 3000;

app.get("/format/toon", DeveloperController.all);
app.get("/format/json", DeveloperController.json);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
