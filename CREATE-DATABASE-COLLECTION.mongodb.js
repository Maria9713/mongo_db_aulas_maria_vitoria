// DEFINE O NOME DO BANCO DE DADOS
const database = 'libri-database';

// DEFINE O NOME DA COLLECTION 
const collection = 'libri-colletion';

// ACESSA O BANCO DE DADOS livri-database 
use(database);

// CRIAR A COLLETION  livri-colletion 

db.createCollection(collection)
