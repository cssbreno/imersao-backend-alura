import express from 'express';
import { listarPosts } from '../controller/postsController.js';

const routes = (app) => {
    app.use(express.json()); 
// Configura o middleware para que o Express entenda requisições com corpo no formato JSON.
    app.get("/posts",listarPosts);
}

export default routes;