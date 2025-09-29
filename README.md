# Automobile Image Board

A full-stack web application for managing and displaying automobile information with images. Users can view, create, update, and delete car entries in a modern, responsive interface.

🌐 **Live Demo**: [https://automobile-image-board.onrender.com](https://automobile-image-board.onrender.com)

## 🚀 Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for storing car data
- **Mongoose** - MongoDB object modeling library for Node.js
- **dotenv** - Environment variable management
- **nodemon** - Development tool for auto-restarting server

### Frontend

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management library
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library
- **next-themes** - Theme management (dark/light mode)
- **Emotion** - CSS-in-JS library for styling

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript** - Type definitions for better development experience
- **Git** - Version control

## 📁 Project Structure

```
automobile-image-board/
├── backend/                 # Backend API server
│   ├── config/
│   │   └── db.js           # Database connection configuration
│   ├── controllers/
│   │   └── car.controller.js # Car CRUD operations
│   ├── models/
│   │   └── car.model.js    # Car data model/schema
│   ├── routes/
│   │   └── car.route.js    # API routes
│   └── server.js           # Express server setup
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── CarCard.jsx # Individual car display component
│   │   │   └── Navbar.jsx  # Navigation component
│   │   ├── pages/
│   │   │   ├── HomePage.jsx # Main page displaying all cars
│   │   │   └── CreatePage.jsx # Page for adding new cars
│   │   ├── store/
│   │   │   └── car.js      # Zustand state management
│   │   ├── App.jsx         # Main React component
│   │   └── main.jsx       # React app entry point
│   ├── dist/              # Built frontend files
│   └── vite.config.js     # Vite configuration
├── package.json           # Root package.json with scripts
└── README.md             # This file
```

## 🎯 Features

- **CRUD Operations**: Create, Read, Update, Delete car entries
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme switching capability
- **Image Display**: Car images with proper styling and hover effects
- **Real-time Updates**: State management with Zustand for instant UI updates
- **Modern UI**: Clean, modern interface with animations
- **RESTful API**: Well-structured backend API endpoints

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd automobile-image-board
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   MONGO_URI=mongodb://localhost:27017/automobile-board
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the application**

   ```bash
   # Development mode (starts both backend and frontend)
   npm run dev

   # Production build
   npm run build
   npm start
   ```

## 🚀 Available Scripts

### Root Level

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build frontend and install all dependencies
- `npm start` - Start production server

### Frontend Level

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Data Model

The application uses a simple Car model with the following fields:

```javascript
{
  make: String,      // Car manufacturer (required)
  model: String,     // Car model (required)
  year: Number,      // Manufacturing year (required)
  engine: Number,    // Engine displacement in liters (required)
  image: String,     // Image URL (required)
  timestamps: true   // Automatic createdAt/updatedAt
}
```

## 🔌 API Endpoints

- `GET /api/cars` - Fetch all cars
- `POST /api/cars` - Create a new car
- `PUT /api/cars/:id` - Update a car by ID
- `DELETE /api/cars/:id` - Delete a car by ID

## 🎨 UI/UX Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Hover Effects**: Smooth animations on car cards
- **Modal Dialogs**: In-place editing without page navigation
- **Gradient Text**: Modern typography with gradient effects
- **Dark Mode Support**: Theme switching with persistent preferences
- **Loading States**: Proper feedback during API operations

## 🔧 Development Notes

- The backend serves static files in production mode
- Frontend development server proxies API calls to backend
- State management is handled by Zustand for simplicity
- All components are functional components using React hooks
- The application follows modern React patterns and best practices

## 📝 License

ISC License

## 👨‍💻 Author

Created as a full-stack web application demonstrating modern JavaScript development practices.
