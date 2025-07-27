# Contact View Dashboard Setup

## 🚀 Access the Contact Records View

You can now access the contact records dashboard directly via URL:

**URL:** `http://localhost:3000/contact-view`

## 📋 Features Available

### 📊 **Dashboard Overview:**
- **Total Contacts** - All contact submissions
- **Today** - Contacts received today
- **This Week** - Contacts from the last 7 days  
- **This Month** - Contacts from the last 30 days

### 🔍 **Search & Filter:**
- **Search** - Search by name, email, or message content
- **Date Filter** - Filter contacts by specific date
- **Export CSV** - Download all contacts as CSV file

### 📧 **Contact Management:**
- **View Details** - Click eye icon to see full message
- **Delete Contact** - Click trash icon to remove contact
- **Reply via Email** - Direct email link to respond
- **Refresh Data** - Reload contacts from database

## 🛠️ **How to Start:**

### 1. Start the Server
```bash
# Start Express API server
npm run server
```

### 2. Start React App
```bash
# In another terminal, start React app
npm start
```

### 3. Access Dashboard
Open your browser and go to:
```
http://localhost:3000/contact-view
```

## 🔗 **Navigation:**

### **From Portfolio:**
- Go to Contact page
- Click "Admin Dashboard" button at the bottom

### **Direct URL:**
- Type `http://localhost:3000/contact-view` in browser
- Bookmark for quick access

## 📡 **API Endpoints Used:**

- **GET /api/contact** - Fetch all contacts
- **DELETE /api/contact/:id** - Delete specific contact
- **GET /api/health** - Server health check

## 🎨 **Dashboard Features:**

### **Responsive Design:**
- Works on desktop, tablet, and mobile
- Clean, modern interface
- Dark/light theme support

### **Interactive Elements:**
- Hover effects on cards and buttons
- Modal popup for full message view
- Loading states and animations
- Confirmation dialogs for deletions

### **Data Export:**
- CSV export with all contact data
- Formatted date and time
- Sanitized message content

## 🔧 **Troubleshooting:**

### **If dashboard doesn't load:**
1. Make sure Express server is running on port 5000
2. Check React app is running on port 3000
3. Verify database connection in `.env` file

### **If contacts don't appear:**
1. Check browser console for errors
2. Verify API endpoints are responding
3. Test with: `http://localhost:5000/api/contact`

### **If delete doesn't work:**
1. Ensure DELETE endpoint is working
2. Check server logs for errors
3. Verify contact ID exists in database

## 📁 **File Structure:**
```
src/
├── components/
│   ├── contactView.js      # Admin dashboard component
│   ├── ContactPage.js      # Contact form (with admin link)
│   └── Portfolio.js        # Main portfolio component
├── App.js                  # Router configuration
server.js                   # Express API server
```

## 🎯 **Quick Access:**
- **Portfolio:** `http://localhost:3000/`
- **Contact Form:** `http://localhost:3000/` (navigate to contact)
- **Admin Dashboard:** `http://localhost:3000/contact-view`
- **API Health:** `http://localhost:5000/api/health`