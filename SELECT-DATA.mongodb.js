// DEFINE O NOME DO BANCO DE DADOS
// const database = 'libri-database';

// ACESSA O BANCO DE DADOS livri-database 
// use(database);

// SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION 
db['libri-colletion'].find();

// ##################################################################################################################################

// SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA
// const database = 'libri-database';
// use(database);
db['libri-colletion'].find({"Categoria": "Ficção Científica"} );

// SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA
// const database = 'libri-database';
// use(database);
db['libri-colletion'].find({"Categoria": "Ficção Científica"} , {"_id":0, "codigo":0, "imagem":0} );

// SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA
// const database = 'libri-database';
// use(database);
db['libri-colletion'].find({} , {"_id":0, "codigo":0, "imagem":0} );

// ##################################################################################################################################

// SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA POR UMA PARTE DE SISTEMAS DE UM CAMPO
const database = 'libri-database';
use(database);
db['libri-colletion'].find({"titulo":/robôs/i} , {"_id":0, "codigo":0, "imagem":0} );