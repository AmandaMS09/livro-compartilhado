// Configuração do express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname));

app.use(
  cors({
    origin: "*",
  })
);

// Configuração do cloud firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();

// Rotas

app.get("/", function(req, res) {
  res.sendFile("public/index.html")
})