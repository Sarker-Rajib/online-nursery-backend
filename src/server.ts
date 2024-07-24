import mongoose from "mongoose";
import app from "./app";
import myConfig from "./app/myConfig";

async function main() {
  try {
    await mongoose.connect(myConfig.DBURL as string);

    app.listen(myConfig.port, () => {
      console.log(`Online Nursery server running on port ${myConfig.port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
}

main();
