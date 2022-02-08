create table Users (
    user_id SERIAL PRIMARY KEY ,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL
);

INSERT INTO Users VALUES(1, 'aurelio', 'aurelio@email.com', '123');
INSERT INTO Users VALUES(2, 'daniel', 'daniel@email.com', '1234');
INSERT INTO Users VALUES(3, 'pedro', 'pedro@email.com', '12345');
