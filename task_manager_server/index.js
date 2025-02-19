const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8200;

app.get('/', (req, res) => {
    res.send('Task Manager running ')
})

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
