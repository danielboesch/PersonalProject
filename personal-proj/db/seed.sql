CREATE TABLE users (
user_id SERIAL PRIMARY KEY
email VARCHAR(200)
password VARCHAR(500)
);

CREATE TABLE locations (
location_id SERIAL PRIMARY KEY
location_name VARCHAR(200)
password VARCHAR(500)
);

CREATE TABLE carts (
cart_id SERIAL PRIMARY KEY
user_id REFERENCES users(user_id)
active BOOLEAN
);


CREATE TABLE products	 (
product_id SERIAL PRIMARY KEY
product_name VARCHAR(200)
product_type VARCHAR(100)
product_price INT
product_img TEXT
start_date DATE
end_date DATE
);


CREATE TABLE product_cart (
product_cart_id SERIAL PRIMARY KEY
product_id INT REFERENCES products(product_id)
cart_id INT REFERENCES carts(cart_id)
quantity INT
);