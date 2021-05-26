## 2. Previewing Results ##

SELECT * FROM invoice_line LIMIT 10;

## 3. The Order of Clauses ##

FROM invoice_line SELECT *
 LIMIT 5

## 4. The Order of Execution ##

SELECT 2

## 5. Unique Rows ##

SELECT DISTINCT unit_price FROM invoice_line;

## 6. SQL Dialects ##

SELECT invoice_id, track_id FROM invoice_line LIMIT 3;