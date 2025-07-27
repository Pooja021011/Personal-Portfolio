# Contact API Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

### 3. Start the Application
```bash
# Start both React app and Express server
npm run dev
```

This will start:
- **React app** on `http://localhost:3000`
- **Express API server** on `http://localhost:5000`

## 📡 API Endpoints

### POST /api/contact
Submit a new contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello, I'd like to connect!"
}
```

### GET /api/contact
Get all contact submissions (newest first)

### GET /api/contact/:id
Get a specific contact by ID

### GET /api/health
Health check endpoint

## 🛠️ Alternative Commands

### Run separately:
```bash
# Terminal 1: Start Express server
npm run server

# Terminal 2: Start React app  
npm start
```

### Database management:
```bash
# Open Prisma Studio (database GUI)
npm run db:studio
```

## 🔧 Troubleshooting

### If you get CORS errors:
The Express server includes CORS middleware to allow requests from `http://localhost:3000`

### If database connection fails:
1. Check your `.env` file has correct `DATABASE_URL`
2. Run `npm run db:push` to sync the schema
3. Make sure MySQL is running

### If API returns 404:
1. Make sure Express server is running on port 5000
2. Check the API URLs in Portfolio.js point to `http://localhost:5000`

## 📁 File Structure
```
├── server.js              # Express API server
├── src/components/        # React components
├── pages/api/contact.js   # (Not used - Next.js only)
├── prisma/schema.prisma   # Database schema
└── package.json           # Dependencies and scripts
```