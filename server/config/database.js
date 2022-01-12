const mongoose = require("mongoose");

const connection = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;

/* mongoose
  .connect(uri, {})
  .then(() => {
    console.log("Database Connect!");
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  }); */
