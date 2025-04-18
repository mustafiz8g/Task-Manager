# 📝 Task Management Application

A simple and efficient **Task Management App** that allows users to **add, edit, delete, and manage tasks** in three categories: **To-Do, In Progress, and Done**. Tasks are stored in a **MongoDB database**, and users must be authenticated with **Google Sign-In (Firebase Authentication)** to access the app. 

---

## 🌐 Live Demo

- **Live Site:** https://taskmanager-a9a38.web.app/
- **Client Repository:** https://github.com/mustafiz8g/Task-Manager/tree/main/task_manager_client
- **Server Repository:** https://github.com/mustafiz8g/Task-Manager/tree/main/task_manager_server

---

## 📦 Dependencies

### **Frontend**
- ⚛ **React (Vite)**
- 🔥 **Firebase Authentication**
- 💅 **Tailwind CSS**
- 🔗 **Axios**
- 🔄 **TanStack Query**

### **Backend**
- 🌐 **Node.js**
- ⚡ **Express.js**
- 🛢 **MongoDB (Mongoose)**
- 🔐 **Dotenv**
- 🏗 **Cors & Morgan (for middleware & logging)**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/yourusername/task-manager-client.git

git clone https://github.com/yourusername/task-manager-server.git

## 2️⃣ Install Dependencies
### Frontend:
cd task-manager-client

 npm install
### Backend:
cd task-manager-server
npm install
### 3️⃣ Configure Environment Variables
Create a .env file in both client and server directories.

## Frontend (task-manager-client/.env)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_BACKEND_URL=http://localhost:5000

## Backend (task-manager-server/.env)

MONGO_URI=your_mongodb_connection_uri
 JWT_SECRET=your_jwt_secret
### 4️⃣ Start the Development Servers
Frontend:

npm run dev
Backend:

npm run start

## 🛠️ Technologies Used

| **Technology**           | **Purpose**                     |
|-------------------------|--------------------------------|
| React (Vite)            | Frontend UI                    |
| Tailwind CSS            | Styling                         |
| Firebase Authentication | User Authentication            |
| Axios                   | API Requests                   |
| TanStack Query          | Data Fetching                  |
| Node.js + Express.js    | Backend API                    |
| MongoDB +     | Database                        |
| Dotenv                  | Secure Environment Variables    |
| Cors & Morgan           | Middleware & Logging           |
