# MusicFeelsBackend

How to run:
`mvn spring-boot:run` I had problems if I didn't `mvn clean` beforehand.

Access at: http://localhost:8086/

Maybe use this?:https://auth0.com/blog/integrating-spring-data-jpa-postgresql-liquibase/

##### ToDo

- [ ] Incorporate tests (put spring-test back into pom)
---

###### Database Related

- [ ] Figure out how to hold ChordProgression object in database to lookup other chord data
    - Either JSON or tables http://www.postgresqltutorial.com/postgresql-data-types/
    - https://blog.codeship.com/unleash-the-power-of-storing-json-in-postgres/

- [ ] Need to abstract out names column in SQL query

###### Final Stages

- [ ] Add a suggested chord progression chart like https://i.stack.imgur.com/XNCwK.png


---

Websites I referenced:


https://spring.io/guides/gs/accessing-data-jpa/#initial (A lot of the guides)

http://zetcode.com/springboot/postgresql/

https://www.baeldung.com/spring-bean

https://www.callicoder.com/spring-boot-jpa-hibernate-postgresql-restful-crud-api-example/

https://www.baeldung.com/spring-boot-angular-web

