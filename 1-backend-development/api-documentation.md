# Employee Management API Documentation

**Base URL**: `http://localhost:3000/api`

---

## 1. Get All Employees

Mengambil daftar seluruh karyawan yang tersimpan.

- **URL**: `/employees`
- **Method**: `GET`
- **Success Response**: `200 OK`

### Request Example (cURL)
```bash
curl --location 'http://localhost:3000/api/employees'
```

### Response Example
```json
{
  "message": "Data successfully retrieved",
  "data": [
    {
      "id": 1,
      "name": "Aji",
      "position": "Manager",
      "salary": 15000000,
      "createdAt": "2025-12-19T10:15:27.513Z"
    },
    {
      "id": 2,
      "name": "Rio",
      "position": "Supervisor",
      "salary": 10000000,
      "createdAt": "2025-12-19T10:15:27.513Z"
    }
  ],
  "totalData": 2
}
```

## 2. Add New Employee

Menambahkan data karyawan baru ke dalam sistem.

- **URL**: `/employees`
- **Method**: `GET`
- **Success Response**: `200 OK`

### Request Example (cURL)
```bash
curl --location 'http://localhost:3000/api/employees' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Budi",
    "position": "Staff",
    "salary": 5000000
}'
```

### Response Example
```json
{
  "message": "Data successfully submitted",
  "data": {
    "id": 3,
    "name": "Budi",
    "position": "Staff",
    "salary": 5000000,
    "createdAt": "2025-12-20T08:00:00.000Z"
  },
  "totalData": 3
}
```

## 3. Error Handling
### Case 1: Missing Required Fields
Terjadi jika salah satu field (name, position, salary) tidak disertakan.
### Request Example
```bash
curl --location 'http://localhost:3000/api/employees' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Budi"
}'
```
### Response Example (400 Bad Request)
```json
{
  "message": "Data submission failed",
  "error": "Missing required fields: position, salary"
}
```
---
### Case 2: Invalid Data Type
Terjadi jika tipe data yang dikirim tidak sesuai (misalnya salary dikirim sebagai string, seharusnya number).
### Request Example
```bash
curl --location 'http://localhost:3000/api/employees' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Budi",
    "position": "Staff",
    "salary": "Lima Juta"
}'
```
### Response Example (400 Bad Request)
```json
{
  "message": "Data submission failed",
  "error": [
    "Field 'salary' must be a number"
  ]
}
```

