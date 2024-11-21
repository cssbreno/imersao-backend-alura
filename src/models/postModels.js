import conectarAoBanco from "../config/dbConfig.js";
// Importa a função `conectarAoBanco`, que é responsável por configurar e conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando uma string de conexão fornecida pelas variáveis de ambiente.
// A conexão é armazenada na constante `conexao`.

export default async function getTodosPosts() {
  // Define uma função para buscar todos os posts do banco de dados.
  const db = conexao.db("imersao-instabytes");
  // Seleciona o banco de dados chamado 'imersao-instabytes'.
  const colecao = db.collection("posts");
  // Acessa a coleção (equivalente a uma tabela) chamada 'posts' no banco.
  return colecao.find().toArray();
  // Retorna todos os documentos da coleção como um array.
}
