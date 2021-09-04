import express from "express";
import { json } from "body-parser";
import routes from "./routes/index.routes";
const app = express();
app.use(json());
app.use(routes);

const port = 4000;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port || 3333, () => {
  console.info(`Server is Online\n PORT: ${port || 3333}`);
});
