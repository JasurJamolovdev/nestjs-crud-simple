DROP TABLE IF EXISTS books;
CREATE TABLE books(
    id VARCHAR(100) PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_title VARCHAR(100) NOT NULL,
    book_description VARCHAR(100) NOT NULL,
    book_author VARCHAR(100) NOT NULL,
    book_price VARCHAR NOT NULL,
    created_by_user VARCHAR NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT fk_users FOREIGN KEY (created_by_user) REFERENCES users(user_id)
);

INSERT INTO books(
    book_title,
    book_description,
    book_author,
    book_price,
    created_by_user
) VALUES (
    'Nodejs',
    'very progressive learning book',
    '345$',
    'Jasurbek Jamolov',
    '7e2f087e-62f9-4144-b442-5bee6131e7ce'
);