-- CREATE DATABASE blog;

USE blog;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
	id INT auto_increment,
    author VARCHAR(255),
    title VARCHAR(255),
    content VARCHAR(255),
    timestamp DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

-- SELECT * FROM posts;