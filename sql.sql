CREATE DATABASE my_database;

USE my_database;

CREATE TABLE page_views (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visit_date DATE NOT NULL,
    count INT DEFAULT 0
);
