CREATE OR REPLACE FUNCTION generate_chords() RETURNS void AS
'
    DECLARE
        c          text := '','';
        u1         text := U&''\2160'';
        u2         text := U&''\2161'';
        u3         text := U&''\2162'';
        u4         text := U&''\2163'';
        u5         text := U&''\2164'';
        u6         text := U&''\2165'';
        u7         text := U&''\2166'';
        l1         text := U&''\2170'';
        l2         text := U&''\2171'';
        l3         text := U&''\2172'';
        l4         text := U&''\2173'';
        l5         text := U&''\2174'';
        l6         text := U&''\2175'';
        l7         text := U&''\2176'';
        flat       text := U&''\266D'';
        natural    text := U&''\266E'';
        sharp      text := U&''\266F'';
        diminished text := U&''\00B0'';

    BEGIN
        INSERT INTO chordprogression (numbers, names, notes)
        VALUES (concat(u1, c, u5), ''C,G'', ''Feels strong moving from the root to the fifth'')
                ,
               (concat(u1, c, u4), ''C,F'', ''Moves to the predominant'')
                ,
               (concat(u4, c, u5), ''F,G'', ''Predominant to dominant movement'')
                ,
               (concat(u1, c, u4, c, u5), ''C,F,G'',
                ''This is the normal 1-4-5 progression the overall feeling of it is - Feels strong moving from the root to the fifth '');
    END;
' language plpgsql;
SELECT generate_chords();

-- https://github.com/spring-projects/spring-boot/issues/6217
-- https://stackoverflow.com/questions/52228470/exception-in-jpa-when-using-seed-file-for-postgresql
