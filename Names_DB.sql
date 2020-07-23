-- DROP EXISTING TABLES

DROP TABLE IF EXISTS nat_names;
DROP TABLE IF EXISTS state_names;

-- CREATE TABLES

CREATE TABLE nat_names (
	name VARCHAR(255) NOT NULL, 
	sex VARCHAR(1) NOT NULL,
	count INT NOT NULL,
	source VARCHAR(255) NOT NULL,
	year INT NOT NULL
);

CREATE TABLE state_names (
	state VARCHAR(2) NOT NULL,
	sex VARCHAR(2) NOT NULL,
	year INT NOT NULL,
	name VARCHAR(255) NOT NULL,
	count INT NOT NULL
);

SELECT * FROM state_names LIMIT 100;
SELECT state, MAX(count) FROM state_names GROUP BY state;

CREATE VIEW top_names_state AS
SELECT s.state, s.name, s.year, s.count FROM state_names s
INNER JOIN (SELECT state, MAX(count) FROM state_names GROUP BY state) g
ON g.state = s.state and s.count = g.max;

SELECT * FROM top_names_state;


