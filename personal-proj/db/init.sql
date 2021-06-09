DROP TABLE IF EXISTS product_cart;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
email VARCHAR(200),
password VARCHAR(500)
);

CREATE TABLE locations (
location_id SERIAL PRIMARY KEY,
location_name VARCHAR(200)
);

CREATE TABLE carts (
cart_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
active BOOLEAN
);

-- CREATE TABLE products (
-- product_id SERIAL PRIMARY KEY,
-- product_name VARCHAR(200),
-- product_type VARCHAR(100),
-- location_id INT REFERENCES locations(location_id),
-- zipcode INT,
-- product_price INT,
-- product_img TEXT,
-- start_date DATE,
-- end_date DATE
-- );

CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(200),
product_type VARCHAR(100),
location_id INT REFERENCES locations(location_id),
product_description VARCHAR(100),
rating INT,
zipcode INT,
product_price INT,
product_img TEXT,
product_img2 TEXT,
product_img3 TEXT,
product_img4 TEXT,
product_img5 TEXT,
product_img6 TEXT,
start_date DATE,
end_date DATE
);

CREATE TABLE product_cart (
product_cart_id SERIAL PRIMARY KEY,
product_id INT REFERENCES products(product_id),
cart_id INT REFERENCES carts(cart_id),
quantity INT,
start_date DATE,
end_date DATE
);

CREATE TABLE extras (
extras_id SERIAL PRIMARY KEY,
product_name VARCHAR(100),
product_type VARCHAR(100),
product_img TEXT,
product_description VARCHAR(100),
extra_products_price INT
);