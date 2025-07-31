# User Registration Form

A simple and responsive user registration form built with HTML, CSS, and JavaScript. It performs basic client-side validation for username, email, and password fields before allowing submission.

## 🧠 Features

- Username, email, and password fields
- Real-time client-side validation on form submission
- Dynamic feedback display for success or error messages
- Responsive and clean UI with CSS styling

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

## 📁 Project Structure

```

.
├── index.html         # Main HTML file with the form structure
├── style.css          # Stylesheet for form layout and responsiveness
└── script.js          # JavaScript file handling validation logic

```

## ✅ Validation Rules

- **Username:** Must be at least 3 characters long
- **Email:** Must include both `@` and `.` symbols
- **Password:** Must be at least 8 characters long

## 💡 How It Works

- When the user submits the form, the script intercepts the request with `event.preventDefault()`.
- The input fields are trimmed and validated.
- If any validation fails, specific error messages are shown.
- If all validations pass, a success message is displayed.

## 🚀 Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Fill in the form and submit to see the validation in action.

## 📸 Demo

![Form Screenshot](https://via.placeholder.com/600x300?text=User+Registration+Form+Preview)

## 📄 License

This project is open-source and free to use.
