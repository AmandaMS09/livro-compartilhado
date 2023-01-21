// Configuração do express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
  })
);

// Configuração do cloud firestore
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Configuração do meu app no firebase
const firebaseConfig = {
  apiKey: "AIzaSyD71Lo8v9xiHluEkT21tau8v14rHiFwTBg",
  authDomain: "web-livro-compartilhado.firebaseapp.com",
  projectId: "web-livro-compartilhado",
  storageBucket: "web-livro-compartilhado.appspot.com",
  messagingSenderId: "832168917364",
  appId: "1:832168917364:web:6ed72fc9cecbea19a35421",
  measurementId: "G-L5KJY4J17R"
};
// Inicialização do firebase
const firebase = initializeApp(firebaseConfig);
// Inicialização do cloud firestore
const db = getFirestore(firebase);

// Rotas