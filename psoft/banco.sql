DATABASE db_loja;

  USE db_loja;

  CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(10) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
     endereco VARCHAR(200) NOT NULL,
     nome VARCHAR(100) NOT NULL
  );

    CREATE TABLE instrumento (
        id_instrumento INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        estoque INT NOT NULL,
        preco DECIMAL(10, 2) NOT NULL
    );

    CREATE TABLE  roupas(
        id_roupas INT PRIMARY KEY,
        preco DECIMAL (10,2) NOT NULL
    );

     CREATE TABLE venda (
        id_venda INT PRIMARY KEY AUTO_INCREMENT,
        id_produto INT NOT NULL,
        id_usuario INT NOT NULL FOREIGN KEY,
        id_instrumento INT NOT NULL FOREIGN KEY,
        data_venda DATETIME NOT NULL,
        forma_pagamento VARCHAR(50) NOT NULL,
        quantidade INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
        FOREIGN KEY (id_instrumento) REFERENCES instrumento(id_instrumento)
     );

     CREATE TABLE produto(
        id_produto INT PRIMARY KEY AUTO_INCREMENT,
        nome_produto VARCHAR(100) NOT NULL,
         estoque VARCHAR(100) NOT NULL,
         data_cadastro DATETIME NOT NULL
         customizacao NOT NULL FOREIGN KEY,
     );

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

     USE db_loja;


      /* INSERINDO OS USUÁRIOS*/

 INSERT INTO usuario (nome,cpf, telefone, email) 
     VALUES  ('usuario 1', '123.456.789-00', '1234567890', 'usuario1@email.com' );

 INSERT INTO usuario (nome, cpf, telefone, email, endereco)  
     VALUES ( 'usuario 2', '987.654.321-00', '0987654321', 'usuario2@email.com', 'Rua 1, 100' );

 INSERT INTO usuario (nome, cpf, telefone, email, endereco) 
     VALUES  ('usuario 3', '111.222.333-44', '1112223334', 'usuario3@email.com', 'Rua 2, 200' );




     /* INSERINDO OS INSTRUMENTOS */

     INSERT INTO instrumento (nome, estoque, preco) 
        VALUES ('Guitarra', 10, 1500.00);

     INSERT INTO instrumento (nome, estoque, preco) 
        VALUES ('Bateria', 5, 3000.00);

     INSERT INTO instrumento (nome, estoque, preco)
        VALUES ('Teclado', 8, 2000.00);



 /* INSERINDO AS VENDAS */

INSERT INTO venda (id_usuario, id_instrumento, data_venda) 
  VALUES (1, 1, '2023-01-01 10:00:00');

INSERT INTO venda (id_usuario , id_instrumento, data_venda)
    VALUES (2, 2, '2023-01-02 11:00:00');

INSERT INTO venda (id_usuario, id_instrumento, data_venda)
     VALUES (3, 3, '2023-01-03 12:00:00');  


 /* INSERINDO OS PRODUTOS */

 INSERT INTO produto (estoque, data_cadastro) 
    VALUES ('Produto 1', '2023-01-01 10:00:00');

 INSERT INTO produto (estoque, data_cadastro)
    VALUES ('Produto 2', '2023-01-02 11:00:00');

 INSERT INTO produto (estoque, data);



 /*


  /* INSERINDO AS FORMAS DE PAGAMENTO */

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




