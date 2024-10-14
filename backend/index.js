const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/PrepMint', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB: ", err));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    city: String // Include the city field in the schema
});

const User = mongoose.model('User', userSchema); // Collection name should match

app.post('/register', async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email in the database
        const user = await User.findOne({ email });

        // If user not found or password doesn't match, return error
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If credentials are correct, return success response
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});