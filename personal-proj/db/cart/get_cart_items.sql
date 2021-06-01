SELECT * FROM product_cart pc 
JOIN products p ON pr.product_id = p.product_id
WHERE pc.cart_id = $1;