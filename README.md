# Login System

A simple and user-friendly **Login System** built with **HTML**, **CSS**, and **JavaScript**. This project includes a Login Page and a Sign-Up Page, both with email and password validation to ensure a secure and smooth user experience.

## Features

### Login Page
- Verifies the user's email and password.
- Redirects the user to the **Home Page** upon successful login.
- Displays an error message if:
  - The email is not registered.
  - The password is incorrect.
- Provides a link to the **Sign-Up Page** for new users.

### Sign-Up Page
- Allows new users to register by entering:
  - A valid email.
  - A secure password.
  - Confirming the password.
- Includes input validation:
  - Email must be in a valid format (e.g., `example@domain.com`).
  - Password and Confirm Password must match.
- Displays validation errors to guide the user.

### Validation
- **Email Validation**: Ensures the email is formatted correctly.
- **Password Validation**:
  - Minimum of 8 characters.
  - At least one uppercase letter, one lowercase letter, one number, and one special character.
  - Confirm Password must match the Password field.

### Responsive Design
- Optimized for both desktop and mobile devices.
- Intuitive and visually appealing interface.

## Technologies Used

- **HTML5**: For the structure of the web pages.
- **CSS3**: For styling and layout.
- **JavaScript**: For form validation and interactivity.

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## How It Works

### Login Page Workflow
1. Users enter their email and password.
2. If the email and password match an existing account:
   - Redirects to the **Home Page**.
3. If not:
   - Displays an error message.
   - Suggests registering via the **Sign-Up Page**.

### Sign-Up Page Workflow
1. Users enter a valid email, password, and confirm the password.
2. Validates the inputs:
   - Email must follow a valid format.
   - Password must meet the security requirements.
   - Confirm Password must match the Password.
3. Upon successful registration:
   - Displays a success message.
   - Redirects to the **Login Page**.

