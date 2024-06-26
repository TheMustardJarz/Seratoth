DROP TABLE IF EXISTS test CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE test (
    id SERIAL PRIMARY KEY NOT NULL,
    numVal INT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(40),
    hashword VARCHAR(100),
    email VARCHAR(40)
);

INSERT INTO test(id, numVal) VALUES
    (1, 1);