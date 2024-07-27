const express = require('express');
const connectDB = require('./config/db'); // Adjusted path

const authRoutes = require('./src/routes/auth');
const app = express();
app.use(express.json());
// Connect to the database
connectDB();
app.use('/api/auth', authRoutes);
// Set up your routes and middleware here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
