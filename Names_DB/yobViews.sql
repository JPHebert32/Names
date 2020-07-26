-- DROP VIEWS 
DROP VIEW IF EXISTS yob1800;

CREATE VIEW yob1800 AS
SELECT y.name,y.sex,y.count,y.year
FROM year_of_birth y
WHERE y.year < 1900;

SELECT * FROM yob1800;

-- 1900
DROP VIEW IF EXISTS yob1900;

CREATE VIEW yob1900 AS
SELECT y.name,y.sex,y.count,y.year
FROM year_of_birth y
WHERE y.year >=1900 AND y.year < 1950;
SELECT * FROM yob1900;

DROP VIEW IF EXISTS yob1950 ;

CREATE VIEW yob1950 AS
SELECT y.name,y.sex,y.count,y.year
FROM year_of_birth y
WHERE y.year >=1950 AND y.year < 2000;
SELECT * FROM yob1950;

DROP VIEW IF EXISTS yob2000 ;
CREATE VIEW yob2000 AS
SELECT y.name,y.sex,y.count,y.year
FROM year_of_birth y
WHERE y.year >=2000 AND y.year < 2020;
SELECT * FROM yob2000;


select * from year_of_birth;

select year_of_birth.year, year_of_birth.name, year_of_birth.sex, year_of_birth.count From public.year_of_birth WHERE year_of_birth.sex = 'M';