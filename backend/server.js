const express = require("express");
const cors = require("cors");
const path = require("path");
const pets = require("./petsdata"); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

// GET all pets
app.get("/api/breeds", (req, res) => {
  res.json(pets);
});

// GET single pet by ID
app.get("/api/breeds/:id", (req, res) => {
  const pet = pets.find((p) => p.id === parseInt(req.params.id));
  if (!pet) return res.status(404).json({ error: "Pet not found" });
  res.json(pet);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
