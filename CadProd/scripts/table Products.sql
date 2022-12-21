create table products(
id int primary key auto_increment,
name varchar(200) not null,
price float not null,
description text(500) not null,
statusProd bolean not null
)