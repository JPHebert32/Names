-- DROP EXISTING TABLES

DROP TABLE IF EXISTS year_of_birth;
DROP TABLE IF EXISTS state_names;

-- CREATE TABLES

CREATE TABLE year_of_birth (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL, 
	sex VARCHAR(1) NOT NULL,
	count INT NOT NULL,
	year INT NOT NULL
);

SELECT * FROM year_of_birth LIMIT 50;

CREATE TABLE state_names (
	id BIGSERIAL PRIMARY KEY,
	state VARCHAR(2) NOT NULL,
	sex VARCHAR(2) NOT NULL,
	year INT NOT NULL,
	name VARCHAR(255) NOT NULL,
	count INT NOT NULL
);

SELECT * FROM state_names LIMIT 50;


SELECT state, MAX(count) FROM state_names GROUP BY state;

CREATE VIEW top_names_state AS
SELECT s.state, s.name, s.year, s.count FROM state_names s
INNER JOIN (SELECT state, MAX(count) FROM state_names GROUP BY state) g
ON g.state = s.state and s.count = g.max;

SELECT * FROM top_names_state;


