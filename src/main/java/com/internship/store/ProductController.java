package com.internship.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private JdbcTemplate db;

    @GetMapping("/haine")
    public List<Product> listaHaine() {
        return db.query("SELECT id, name, category, price, stock FROM products",
                new BeanPropertyRowMapper<>(Product.class));
    }
}