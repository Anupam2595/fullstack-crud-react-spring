
# 👨‍💻 Full Stack CRUD Application using React + Spring Boot + MySQL

This is a full-stack web application built using:

- **Frontend**: React.js with Bootstrap
- **Backend**: Spring Boot (Java)
- **Database**: MySQL

The application supports **full CRUD operations** (Create, Read, Update, Delete) for users, with proper exception handling and RESTful architecture.

---

## 📁 Project Structure

```
fullstack-application/
│
├── backend/
│   ├── controller/       # REST controllers
│   ├── model/            # User entity
│   ├── repository/       # UserRepository (extends JpaRepository)
│   ├── exception/        # Custom exceptions and global handler
│   └── application.properties
│
├── frontend/
│   ├── components/
│   │   ├── layout/       # Navbar component
│   │   └── pages/
│   │       ├── Home.js
│   │       ├── AddUser.js
│   │       ├── EditUser.js
│   │       └── ViewUser.js
│   └── App.js
```

---

## 🚀 Backend Setup (Spring Boot)

### 🔧 Dependencies Used
- Spring Web
- Spring Boot DevTools
- Lombok
- Spring Data JPA
- MySQL Driver

### 📌 Steps:

1. Create a new Spring Boot project.
2. Create the `User` model class with fields: `id`, `name`, `username`, `email`.
3. Create a MySQL database and configure `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

4. Create the `UserRepository` extending `JpaRepository<User, Long>`.
5. Create `UserController` with endpoints:
   - `POST /addUser` – add new user
   - `GET /user/allUsers` – get all users
   - `GET /user/{id}` – get user by ID
   - `PUT /user/{id}` – update user
   - `DELETE /user/{id}` – delete user

6. Add `@CrossOrigin(origins = "http://localhost:3000")` to allow React access.

---

### ⚠️ Custom Exception Handling

- Create `UserNotFoundException` extending `RuntimeException`.
- Create `UserNotFoundAdvice` class with:

```java
@ControllerAdvice
public class UserNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handleException(UserNotFoundException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("errorMessage", ex.getMessage());
        return error;
    }
}
```

---

## 🌐 Frontend Setup (React)

### ✅ Setup & Install

1. Create app:

```bash
npx create-react-app frontend
cd frontend
```

2. Install dependencies:

```bash
npm install axios react-router-dom bootstrap
```

3. Import Bootstrap in `index.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

### 📄 Pages and Components

#### 📌 Folder Structure

```
components/
│
├── layout/
│   └── Navbar.js
├── pages/
│   ├── Home.js
│   ├── AddUser.js
│   ├── EditUser.js
│   └── ViewUser.js
```

#### 🧭 Setup Routing (`App.js`):

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import ViewUser from './components/pages/ViewUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/viewUser/:id" element={<ViewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## 🧠 Key Functionalities

### ✅ Home Page
- Fetch all users using `axios.get()` on load (`useEffect`)
- Display in a Bootstrap table
- Buttons: **View**, **Edit**, **Delete**
- Delete uses `axios.delete` and refreshes data after removal

### ✅ Add User
- Controlled form with `name`, `username`, `email`
- `axios.post` to add user
- On success, redirect to Home

### ✅ Edit User
- Uses `useParams` to get ID from URL
- Fetch user by ID on mount
- On submit: `axios.put` with updated data
- Redirect to Home after update

### ✅ View User
- Shows selected user's data
- Fetch using `axios.get(/user/{id})`

---

## 🧪 Extra Tips

- Use `alert(response.data)` or `toast` for user feedback
- Use `navigate("/")` after add/edit for redirection
- Handle errors gracefully using try/catch and alerts
- Use `useEffect` dependency arrays correctly to avoid warnings

---

## 📷 Screenshots (Optional)

> You can add screenshots of Home Page, Add/Edit/View User Form here to make your README visual.

---

## 📌 Conclusion

This project is a clean and simple example of how to build a **full-stack CRUD web app** using modern tools. It uses:
- React for frontend UI
- Spring Boot for RESTful backend
- MySQL for persistent data
- Bootstrap for styling
- Axios for API communication

Feel free to fork this repo, improve it, or use it as a boilerplate for your own full-stack apps!
