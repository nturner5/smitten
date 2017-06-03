drop table if exists products;

CREATE TABLE products (
    id serial PRIMARY KEY,
    name text,
    price int,
    image1 text,
    image2 text,
    image3 text,
    backgroundurl text,
    desc1 text,
    desc2 text,
    desc3 text
);

INSERT INTO products (name, price, image1) VALUES 
('VINTAGE FLORAL', 20, 'https://s3.amazonaws.com/smittenmedia/vintageready.jpg'),
('RETRO POPPY', 20, 'https://s3.amazonaws.com/smittenmedia/poppyready.jpg'),
('FRESH BLOSSOMS', 20, 'https://s3.amazonaws.com/smittenmedia/blossoms+ready.jpg');