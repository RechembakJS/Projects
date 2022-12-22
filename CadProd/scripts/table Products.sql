create table products(
id int primary key auto_increment,
name varchar(200) not null,
price float not null,
unity varchar(15),
stock int,
description text(500) not null,
statusProd boolean not null
)