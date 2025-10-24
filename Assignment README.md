# 🧩 Week 2 Express.js API Assignment — Product Management API

## 📘 Overview
This is a beginner-friendly **Product Management API** built using **Express.js** and **MongoDB (Atlas)**.  
It demonstrates CRUD operations — **Create**, **Read**, **Update**, and **Delete** — along with middleware for **logging, authentication, validation,** and **error handling**.

---

## 📁 Folder Structure

```
project/
│
├── server.js                 # Main entry point
├── .env                      # Environment variables (ignored in GitHub)
├── package.json              # Dependencies and scripts
│
├── config/
│   └── db.js                 # Database connection
│
├── controllers/
│   └── productController.js  # Handles product logic
│
├── models/
│   └── products.js           # Mongoose schema for Product
│
├── routes/
│   └── productRoutes.js      # API routes for Product
│
├── middleware/
│   ├── logger.js             # Logs all requests
│   ├── auth.js               # Simple API key authentication
│   ├── errorHandler.js       # Global error handler
│   └── validation.js         # (Optional) Request validation
│
└── utils/
    └── error.js              # Custom error utilities
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone this repository
```bash
git clone <your-repo-url>
cd project
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create your `.env` file
In the root of your project, create a `.env` file:

```
MONGO_URI=<your_mongodb_atlas_connection_string>
PORT=3000
AUTH_TOKEN=<your_api_key>
```

> 💡 Example:
> ```
> MONGO_URI=mongodb+srv://express-js:password@cluster0.mongodb.net/?appName=Cluster0
> PORT=3000
> AUTH_TOKEN=12345abc
> ```

---

### 4️⃣ Start the server
```bash
npm start
```

If successful, you’ll see:

```
✅ MongoDB connected successfully!
🚀 Server running at http://localhost:3000
```

---

## 🔑 Authentication
Every request to the API must include an API key in the headers:

```
x-api-key: <your_api_key_from_.env>
```

If the key is missing or invalid, you’ll get:

```json
{
  "message": "Unauthorized: Invalid API key"
}
```

---

## 🧠 API Endpoints

### 1️⃣ GET /api/products
- **Description:** Fetch all products.
- **URL:** `http://localhost:3000/api/products`
- **Headers:** `x-api-key: your_api_key`
- **Response Example:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "64f...123",
      "name": "Laptop",
      "description": "High-performance laptop",
      "price": 1200,
      "category": "electronics"
    }
  ]
}
```

---

### 2️⃣ GET /api/products/:id
- **Description:** Get one product by ID.
- **URL:** `http://localhost:3000/api/products/<product-id>`
- **Headers:** `x-api-key: your_api_key`

---

### 3️⃣ POST /api/products
- **Description:** Add a new product.
- **URL:** `http://localhost:3000/api/products`
- **Headers:** `x-api-key: your_api_key`
- **Body (JSON):**
```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic design, long battery life",
  "price": 35,
  "category": "electronics"
}
```

---

### 4️⃣ PUT /api/products/:id
- **Description:** Update an existing product.
- **URL:** `http://localhost:3000/api/products/<product-id>`
- **Headers:** `x-api-key: your_api_key`
- **Body (JSON):**
```json
{
  "price": 40
}
```

---

### 5️⃣ DELETE /api/products/:id
- **Description:** Delete a product.
- **URL:** `http://localhost:3000/api/products/<product-id>`
- **Headers:** `x-api-key: your_api_key`

---

## 🧰 Middleware Features

| Middleware | Purpose |
|-------------|----------|
| `logger.js` | Logs method, URL, and time for each request |
| `auth.js` | Protects routes with an API key |
| `errorHandler.js` | Catches all errors and sends user-friendly messages |
| `validation.js` | Ensures product data is valid before saving |

---

## 🗄️ Database
- **MongoDB Atlas** is used for cloud-based storage.
- **Mongoose** manages schema and data validation.

Example product document:
```json
{
  "_id": "64f...123",
  "name": "Coffee Maker",
  "description": "Programmable coffee maker with timer",
  "price": 50,
  "category": "kitchen",
  "inStock": true
}
```

---

# ☑️ POSTMAN TESTING GUIDE (Step-by-Step)

Here’s how to test your API using **Postman**:

---

### 1️⃣ Open Postman
Make sure your server is running (`npm start`).

---

### 2️⃣ Create a new collection
- Click **“New” → “Collection”**
- Name it **“Product API”**

---

### 3️⃣ Add Authorization Header
For each request, go to **Headers tab** and add:

| Key | Value |
|------|--------|
| x-api-key | your_api_key_from_.env |

---

### 4️⃣ Test the Endpoints

#### 🟢 GET all products
- Method: `GET`
- URL: `http://localhost:3000/api/products`
- Click **Send**
- ✅ You should see a list of products (or an empty array if none exist).

---

#### 🟢 POST (add) a new product
- Method: `POST`
- URL: `http://localhost:3000/api/products`
- Go to **Body → raw → JSON**
- Paste:
```json
{
  "name": "Bluetooth Speaker",
  "description": "Portable speaker with deep bass",
  "price": 60,
  "category": "electronics"
}
```
- Click **Send**
- ✅ You’ll get a new product object with an `_id`.

---

#### 🟢 GET by ID
- Copy the `_id` from your POST response.
- Use URL: `http://localhost:3000/api/products/<_id>`
- Click **Send**
- ✅ You’ll see that specific product.

---

#### 🟢 PUT (update)
- Method: `PUT`
- URL: `http://localhost:3000/api/products/<_id>`
- Body (raw JSON):
```json
{
  "price": 65
}
```
- Click **Send**
- ✅ Product is updated.

---

#### 🟢 DELETE
- Method: `DELETE`
- URL: `http://localhost:3000/api/products/<_id>`
- Click **Send**
- ✅ Product deleted successfully.

---

### 5️⃣ Check Terminal Logs
Each request you make in Postman will also appear in your terminal:
```
[2025-10-24T12:30:00.000Z] GET /api/products
[2025-10-24T12:31:00.000Z] POST /api/products
```

---

# 🧠 Common Errors

| Error | Cause | Fix |
|-------|--------|-----|
| “Unauthorized: Invalid API key” | Missing or incorrect `x-api-key` header | Add correct key |
| “Product not found” | Wrong or deleted `_id` | Check the ID |
| “MongoDB connection failed” | Wrong MONGO_URI | Recheck `.env` |
| “Server Error” | General error | Check terminal logs |

---

# 🏁 Conclusion
✅ Server setup complete  
✅ MongoDB connection established  
✅ CRUD operations working  
✅ Authentication and logging functional  
✅ Postman tested successfully  

You’ve built a **fully functional, professional-grade REST API** using **Express.js + MongoDB Atlas** — great job! 🎉
