import Item from '../models/item.model.js';

//Cria um item novo
export const createItem = async (req, res) => {
    try {
        const { text } = req.body;
        const newItem = new Item({ text });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Pega (get) todos os itens
export const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Atualiza um item
export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, isCompleted } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { text, isCompleted },
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ message: "Item não encontrado." });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Deleta um item
export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item não encontrado." });
        }
        res.json({ message: "Item deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Deleta todos os itens
export const deleteAllItems = async (req, res) => {
    try {
        await Item.deleteMany({});
        res.json({ message: "Todos os itens deletados com sucesso." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};