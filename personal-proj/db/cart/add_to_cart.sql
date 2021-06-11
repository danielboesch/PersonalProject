INSERT INTO product_cart
(cart_id, product_id, date_end, date_start2, quantity)
VALUES
($1, $2, $3, $4, 1);
SELECT * FROM product_cart pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1
ORDER BY pc.product_id;