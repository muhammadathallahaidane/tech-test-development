
-- 1. Tambahkan satu personal dalam table dengan nama employee Albert dengan posisi enginner, join date 24 Januari 2024, dengan Year of experience 2.5 year. With salary $50
INSERT INTO employees (name, position, join_date, year_of_experience, salary) 
VALUES ('Albert', 'Engineer', '2024-01-24', 2.5, 50);

-- 2. Update table dengan posisi enginner with salaray $85
UPDATE employees 
SET salary = 85 
WHERE position = 'Engineer';

-- 3. Hitung total pengeluaran salary saat tahun 2021 (Asumsi salary adalah yearly)
SELECT SUM(salary) as total_pengeluaran_2021
FROM employees
WHERE EXTRACT(YEAR FROM join_date) <= 2021 
AND (release_date IS NULL OR EXTRACT(YEAR FROM release_date) >= 2021);

-- 4. Sorting menampilkan 3 employee paling banyak yang memiliki Years of Experience
SELECT * FROM employees 
ORDER BY year_of_experience DESC 
LIMIT 3;

-- 5. Tuliskan subquery untuk employee dengan posisi engginer yang memiliki exeperience kurang dari sama dengan 3 tahun
SELECT * FROM (
    SELECT * FROM employees 
    WHERE position = 'Engineer'
) AS engineer_list
WHERE year_of_experience <= 3;