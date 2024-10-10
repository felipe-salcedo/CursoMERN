import express from "express";
import {
    createItem,
    getItems,
    updateItem,
    deleteItem,
    deleteAllItems
} from "../controllers/item.controller.js"

const router = express.Router();

//Cria um novo item
router.post("/items", createItem);

//Pega (get) todos os itens
router.get("/items", getItems);

//Atualiza um item
router.put("/items/:id", updateItem);

//Deleta um item
router.delete("/items/:id", deleteItem);

//Deleta todos os itens
router.delete("/items/:id", deleteAllItems);

export default router;