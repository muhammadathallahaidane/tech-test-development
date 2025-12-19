CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    join_date DATE,
    release_date DATE,
    year_of_experience NUMERIC(4,1), -- Menggunakan numeric agar bisa simpan 2.5
    salary NUMERIC(15, 2)
);