-- DROP VIEWS 
DROP VIEW IF EXISTS namesAL;

CREATE VIEW namesAL AS
SELECT s.state, s.sex, s.year, s.name, s.count
FROM state_names s
WHERE s.state = s.state = AL;

SELECT * FROM namesAL;