# PICTConnect – Student Life Web Platform

**PICTConnect** is a centralized web application designed to enhance student life at PICT by improving accessibility to essential resources and promoting engagement within the campus community. The platform includes modules for food and hostel discovery, clubs and events, and a personal expense tracker, all managed through an interactive student dashboard.

---

## 🌐 Features

- 🔐 **User Authentication** – Secure login and registration system
- 🏠 **Hostel & Food Finder** – Browse nearby food joints and hostel options
- 🎉 **Clubs & Events Module** – Discover campus activities and student clubs
- 📊 **Expense Tracker** – Track daily expenses with a personalized dashboard
- ⚡ **RESTful Backend API** – Fast, modular server powered by Node.js and Express

---

## 💻 Tech Stack

| Layer       | Technology                             |
|-------------|-----------------------------------------|
| Frontend    | HTML, CSS, JavaScript                  |
| Backend     | Node.js, Express.js                    |
| API Style   | REST API (JSON)                        |
| Middleware  | CORS, Express JSON Parsing             |

---

## 🚀 To Run the Site

1. Clone the Repository

```
git clone https://github.com/yashada45/PICTConnect.git
cd pictconnect
```
2. Install Backend Dependencies
```
npm install
```
3. Start the Backend Server
```
node app.js
The server will run at: http://localhost:3000
```

4. Run the Frontend -
Open index.html in your browser

📁 Project Structure
```
pictconnect/
├── app.js               # Main Express.js server
├── main.js              # Frontend logic
├── index.html           # Home page
├── post-page.html       # Expense tracking page
├── css/                 # Styling
├── pages/               # Additional HTML pages
├── images/              # Static assets
├── ExpenseManager.js    # Expense logic (backend)
├── UserManager.js       # User logic (backend)
└── package.json         # Node project metadata
```
📌 API Endpoints
```
Route	Method	Description
/addUser	POST	Register a new user
/login	POST	Authenticate user
/addExp	POST	Add a new expense
/getExp	POST	Fetch all user expenses
/delExp	POST	Delete an expense by ID
```
