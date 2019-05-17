INSERT INTO chordprogression (numbers, names, notes)
VALUES ('1,5', 'C,G', 'Feels strong moving from the root to the fifth')
        ,
       ('1,4', 'C,F', 'Moves to the predominant')
        ,
       ('4,5', 'F,G', 'Predominant to dominant movement')
        ,
       ('1,4,5', 'C,F,G',
        'This is the normal 1-4-5 progression the overall feeling of it is ''Feels strong moving from the root to the fifth'' ');
--   \echo 'Finished Inserts'

-- Write a function that will convert the numbers column into the corresponding roman numerals by using PSQL through variables
-- ERROR:  character with byte sequence 0xe2 0x85 0xa0 in encoding "UTF8" has no equivalent in encoding "WIN1252"
-- https://www.postgresql.org/docs/current/multibyte.html

-- select  u&'\2162' || u&'\266D'
-- Ⅲ♭

-- INSERT INTO chordprogression (numbers, names, notes)
-- VALUES (U&'\2170' ||  ',' || U&'\2170', 'C,G', 'Feels strong moving from the root to the fifth');
-- 	ⅰ,ⅰ	C,G	      Feels strong moving from the root to the fifth

-- const rnONE = U&'\2160'
-- const rnTWO = U&'\2161'
-- const rnTHREE = U&'\2162'
-- const rnFOUR = U&'\2163'
-- const rnFIVE = U&'\2164'
-- const rnSIX = U&'\2165'
-- const rnSEVEN = U&'\2166'

-- const rnOne = U&'\2170'
-- const rnTwo = U&'\2171'
-- const rnThree = U&'\2172'
-- const rnFour = U&'\2173'
-- const rnFive = U&'\2174'
-- const rnSix = U&'\2175'
-- const rnSeven = U&'\2176'

-- const flat = U&'\266D'
-- const natural = U&'\266E'
-- const sharp = U&'\266F'
-- const diminished = U&'\00B0'
