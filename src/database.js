const mongoose = require("mongoose");
const config = require("./config");

(async () => {
  try {
    const db = await mongoose.connect(config.MONGODB_URI, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
