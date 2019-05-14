-- \i '/Users/oxjoe/Desktop/data-postgres.sql';
-- \ echo 'start'
-- \c postgres;
-- DROP DATABASE data;
-- CREATE DATABASE data;
DROP TABLE IF EXISTS chordprogression;
CREATE TABLE chordprogression (
  id SERIAL PRIMARY KEY,
  numbers TEXT NOT NULL ,
  names TEXT NOT NULL ,
  notes TEXT NOT NULL
);
-- \echo 'Created Table'
