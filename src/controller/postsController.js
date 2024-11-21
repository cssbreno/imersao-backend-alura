import getTodosPosts from "../models/postModels.js";

export async function listarPosts(req, res){ 
    // Define uma rota GET no endpoint '/posts' para retornar todos os posts.
    const posts = await getTodosPosts(); 
    // Busca os posts do banco de dados usando a função `getTodosPosts`.
    res.status(200).json(posts); 
    // Responde à requisição com os posts em formato JSON e o código de status 200 (sucesso).
}