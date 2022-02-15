create table Users (
    id SERIAL PRIMARY KEY ,
    admin Boolean NOT NULL DEFAULT false,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);

-- INSERT INTO USERS(id, admin, name, email, password) VALUES(1, false, 'aurelio', 'aurelio@email.com', '123');
-- INSERT INTO USERS(id, admin, name, email, password) VALUES(2, true, 'daniel', 'daniel@email.com', '1234');
-- INSERT INTO USERS(id, admin, name, email, password) VALUES(3, true, 'pedro', 'pedro@email.com', '12345');