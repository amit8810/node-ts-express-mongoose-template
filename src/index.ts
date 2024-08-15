import db from "./db/database.js";
import { app } from "./app.js";

const port: number = Number(process.env.PORT) || 4000;

db.connect()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is listening at PORT : ",port);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed ", err.message);
    process.exit(1);
  });
