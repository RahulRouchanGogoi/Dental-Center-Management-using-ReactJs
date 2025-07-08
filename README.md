
# Dental Care
Dental Care is a web-based Dental Center Management System built with React.js, designed for both users (patients) and administrators. Patients can easily register, book appointments, and manage their visit history, while admins can oversee appointments, update records, and maintain clinic operations through a dedicated dashboard. The app offers a responsive interface, secure data flow, and efficient workflow management tailored for modern dental clinics.

## 👥 User Guide

### For Patients (Users):
Patients can sign up or log in using any valid email address (e.g., abc@gmail.com, xyz@hotmail.com, etc.).

After logging in, patients can:

* Book multiple appointments at once.
* View appointment history.
* See upcoming visits they’ve scheduled.

### For Admins:
Admins must sign up using an email address that ends with @admin.com (e.g., admin@admin.com, drjohn@admin.com).

Only users with the admin.com domain are granted admin access.

Once logged in, admins can:

* Access the Admin Dashboard.
* View, update, or delete all patient appointments.
* Manage appointment schedules and clinic operations.
* Add new patients and update their details.
* Upload PDFs (e.g., prescriptions, reports) to patient records.

➡️ **For more details, refer to the [User Manual (PDF)](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Document.pdf)**  

## 🚀 Features

# 🦷 For Patients (Users):
* ✅ User Registration & Login using any valid email address.

* 🗓️ Book Appointments for dental visits with ease.

* 📅 Schedule Multiple Appointments without restrictions.

* 🔍 View Appointment History for past visits.

* ⏳ See Upcoming Visits in a user-friendly interface.

# 🔐 For Admins:
* ✅ Admin Registration & Login using emails ending with @admin.com.

* 🧑‍⚕️ Access Admin Dashboard with elevated privileges.

* ➕ Add New Patients to the system manually.

* ✏️ Update Patient Details as needed.

* 📥 Upload PDFs (e.g., reports, prescriptions, treatment history) to patient records.

* 📋 View All Appointments scheduled by patients.

* 🗑️ Update or Delete Appointments for clinic management.

# 🌐 General Features:
* ⚛️ Built with React.js using modern component-based design.

* 🧠 Role-Based Access using email domain detection (@admin.com for admins).

* 🔐 Protected Routes to restrict access to admin-only pages.

* 🎨 Clean and Minimal UI/UX for ease of use.

* 📱 Partially Responsive — optimized for desktop; some views may require improvement on smaller mobile screens.

  
## 🛠️ Tech Stack
### Frontend:
- ⚛️ **React.js** – Component-based UI development
- 🧭 **React Router DOM** – Handles client-side routing
- 💅 **CSS3** – Custom styling for layout and design

### Data Storage:
- 💾 **localStorage** – Used for storing user data, appointments, and PDFs locally in the browser

### Development Tools:
- ⚡ **Vite** – Fast build tool for efficient development
- 🧪 **React Hooks** – For state and side-effect management

### Deployment:
- 🌐 **Vercel** – Used for hosting the frontend application


## Issues

* App is partially responsive on mobile

* No backend – data lost on clear
## Technical Decisions

* Used localStorage instead of backend

* React Router for navigation

* Admin access based on @admin.com domain
## 🧾 Setup Instructions

### 1. Clone the repository
git clone https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs.git

### 2. Navigate to the project folder
cd Dental-center-management

### 3. Install dependencies
npm install

### 4. Run the development server
npm run dev
## Explore the Website


![Scan to launch](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Dental%20Care%20QR.png)

[Click to launch](https://dental-center-management-using-reac.vercel.app/)



* Home Page
- **Top Section** ![Home Top view](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Home%20Top%20Image.png)

- **Mid Section** ![Home Mid View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Home%20Mid%20Image.png)

- **Bottom Section** ![Home Bottom View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Home%20Bottom%20Image.png)

* Sign-Up Page
- **SignUp** ![SignUp Page](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Sign-Up.png)

* Log-In Page
- **LogIn** ![LogIn Page](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Log-In.png)

* Patient Dashboard
- **Patient Dashboard Top Section** ![Top View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Patient-home-screen-top-img.png)

- **Patient Dashboard Mid Section** ![Mid View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Patient-home-screen-mid-img.png)

- **Patient Dashboard Bottom Section** ![Bottom View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Patient-home-screen-bottom-img.png)

- **Patient Dashboard Upcoming Appointments** ![Upcoming appointments view](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Patient-home-screen-appointmet-img.png)

- **Admin Dashboard Top View** ![Admin Dashboard Top View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Dashboard%20Top%20Image.png)

- **Admin Dashboard Mid View** ![Admin Dashboard Mid View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Dashboard%20Mid%20Image.png)

- **Admin Dashboard Calender View** ![Admin Dashboard Calender View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Calender%20view.png)

- **Admin Dashboard Calender View with Upcoming appointments details** ![Admin Dashboard Calender with Upcoming appointments details](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Calender%20view%20with%20details.png)

- **Admin Dashboard Patient Management Top View** ![Admin Dashboard Patient Management Top View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Patient%20Management.png)

- **Admin Dashboard Patient Management Mid View** ![Admin Dashboard Patient Management Mid View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Patient%20Managemnet%20Mid%20view.png)

- **Admin Dashboard Appointmet Management** ![Admin Dashboard Appointmet Management](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Appointmenrt%20Management.png)

- **Admin Dashboard Appointmet History Top View** ![Admin Dashboard Appointmet Management top view](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Appointment%20history%20top%20view.png)

- **Admin Dashboard Appointmet History Mid View** ![Admin Dashboard Appointmet History Mid View](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20Appointment%20history%20mid%20view.png)


- **Admin Dashboard After Completion of appointments** ![Admin Dashboard after Completion of appointments](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/Admin%20dashboard%20after%20completion.png)

- **Patient Appointment History** ![Patient Appointment History](https://github.com/RahulRouchanGogoi/Dental-Center-Management-using-ReactJs/blob/main/Readme%20Images/patient%20appointment%20history.png)
