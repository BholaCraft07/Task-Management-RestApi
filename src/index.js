import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';//import the database connection function
import userRoutes from "./routes/user.routes.js"; //import the user routes
import taskRoutes from "./routes/task.routes.js"; //import the task routes
import session from 'express-session';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//session middleware configuration
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 100 * 60 * 60 * 24, // 1 day
        },
    })
)
//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

// Call the function to connect to the database
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    });




