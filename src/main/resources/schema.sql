-- \i '/Users/oxjoe/Desktop/data.sql';
-- \ echo 'start'
-- \c postgres;
-- DROP DATABASE data;
-- CREATE DATABASE data;
DROP TABLE IF EXISTS ChordProgression;
CREATE TABLE ChordProgression (
  id INTEGER,
  numbers TEXT,
  names TEXT,
  notes TEXT
);
-- \echo 'Created Table'
