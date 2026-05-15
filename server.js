// Simple Backend Server (Node.js + Express)

const express = require('express');
const app = express();

app.use(express.json());

// Sample API
app.get('/', (req, res) => {
    res.send('Multi-tier App Backend Running');
});

app.get('/api/data', (req, res) => {
    res.json({
        message: "Data from backend",
        status: "success"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
