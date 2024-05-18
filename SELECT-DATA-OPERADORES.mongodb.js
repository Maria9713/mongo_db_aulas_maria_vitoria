// SELECIONA LIVROS COM VALOR MAIOR QUE 100 REAIS
use('libri-database');
db['libri-colletion'].find({valor:{$gt:100}});

//SELECIONA LIVROS COM VALOR MENOR QUE 100 REAIS 
use('libri-database');
db['libri-colletion'].find({valor:{$lt:100}});

// SELECIONA LIVROS COM VALORES MAIOR OU IGUAL A 100 REAIS
use('libri-database');
db['libri-colletion'].find({valor:{$gte:100}});

//SELECIONA LIVROS COM VALORES MENORES OU IGUAL A 100 REAIS
use('libri-database');
db['libri-colletion'].find({valor:{$lte:100}});

//SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES EDE 100 ATÉ 150
use('libri-database');
db['libri-colletion'].find({valor:{$gte:100, $lte:150}});

//SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES EDE 100 ATÉ 150 -ordenação ascendete
use('libri-database');
db['libri-colletion'].find({valor:{$gte: 100, $lte: 150}}).sort({valor:1});

//SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES EDE 100 ATÉ 150 -ordenação decrecente
use('libri-database');
db['libri-colletion'].find({valor:{$gte: 100, $lte: 150}}).sort({valor:-1});

//SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES EDE 100 ATÉ 150 -ordenação ascendete
use('libri-database');
db['libri-colletion']
.find({valor:{$gte: 100, $lte: 150}},{'_id':0, 'codigo': 0})
.sort({valor:1});

