INSERT INTO product_cart
(cart_id, product_id, quantity, start_date, end_date)
VALUES
($1, $2, 1, $3, $4);
-- SELECT * FROM product_cart pc
-- JOIN products p ON pc.product_id = p.product_id
-- WHERE pc.cart_id = $1
-- ORDER BY pc.product_id;