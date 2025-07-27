const express = require('express');
const cors = require('cors');
const { contactAPI, closeDatabase } = require('./api/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Handle preflight requests
app.options('*', cors(corsOptions));

// Contact API Routes - Using functions from api/contact.js
app.post('/api/contact', contactAPI.createContact);
app.get('/api/contact', contactAPI.getAllContacts);
app.get('/api/contact/:id', contactAPI.getContactById);
app.delete('/api/contact/:id', contactAPI.deleteContact);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        endpoints: [
            'GET /api/health',
            'GET /api/contact',
            'POST /api/contact',
            'GET /api/contact/:id',
            'DELETE /api/contact/:id',
            'GET /api/test/contacts'
        ]
    });
});

// Test endpoint - Using function from api/contact.js
app.get('/api/test/contacts', contactAPI.getTestContacts);

// Handle 404 for unknown routes
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.originalUrl} not found`,
        availableEndpoints: [
            'GET /api/health',
            'GET /api/contact',
            'POST /api/contact',
            'GET /api/contact/:id',
            'DELETE /api/contact/:id',
            'GET /api/test/contacts'
        ]
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints available:`);
    console.log(`   GET    http://localhost:${PORT}/api/health`);
    console.log(`   GET    http://localhost:${PORT}/api/contact`);
    console.log(`   POST   http://localhost:${PORT}/api/contact`);
    console.log(`   GET    http://localhost:${PORT}/api/contact/:id`);
    console.log(`   DELETE http://localhost:${PORT}/api/contact/:id`);
    console.log(`   GET    http://localhost:${PORT}/api/test/contacts`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down server...');
    await closeDatabase();
    process.exit(0);
});