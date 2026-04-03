CREATE TABLE products (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          category VARCHAR(100),
                          price DECIMAL(10, 2),
                          stock INT
);

INSERT INTO products (name, category, price, stock) VALUES
                                                                 ('Pollo-Tshirt', 'T-Shirt', 49.99, 100),
                                                                 ('Blue Jeans', 'Pants', 129.50, 50),
                                                                 ('Belt', 'Accessories', 299.00, 20);