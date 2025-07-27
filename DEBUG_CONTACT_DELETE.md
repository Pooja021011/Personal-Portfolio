# Debug Contact Delete Issue

## 🔍 Troubleshooting Steps

### 1. Check Server is Running
Open browser and go to: `http://localhost:5000/api/health`
Should return: `{"status":"OK","message":"Server is running"}`

### 2. Test Contacts Endpoint
Go to: `http://localhost:5000/api/test/contacts`
This will show all contacts with their IDs

### 3. Check Browser Console
1. Open contact view page: `http://localhost:3000/contact-view`
2. Open browser Developer Tools (F12)
3. Go to Console tab
4. Try to delete a contact
5. Look for error messages

### 4. Check Server Logs
Look at the terminal where you ran `npm run server` for error messages

## 🛠️ Common Issues & Fixes

### Issue 1: Server Not Running
**Error:** `net::ERR_CONNECTION_REFUSED`
**Fix:** 
```bash
npm run server
```

### Issue 2: Invalid Contact ID
**Error:** `Invalid contact ID`
**Fix:** Contact ID might be undefined or not a number

### Issue 3: Contact Not Found
**Error:** `Contact not found`
**Fix:** Contact might have been already deleted or ID doesn't exist

### Issue 4: Database Connection Error
**Error:** Database connection issues
**Fix:** 
```bash
npx prisma db push
npx prisma generate
```

## 🧪 Manual Testing

### Test DELETE endpoint directly:
```bash
# Replace 123 with actual contact ID
curl -X DELETE http://localhost:5000/api/contact/123
```

### Test with Postman or similar tool:
- Method: DELETE
- URL: `http://localhost:5000/api/contact/{id}`
- Headers: `Content-Type: application/json`

## 📋 Debug Checklist

- [ ] Server running on port 5000
- [ ] React app running on port 3000
- [ ] Database connection working
- [ ] Contact IDs are valid numbers
- [ ] No CORS errors in browser console
- [ ] DELETE endpoint responds correctly

## 🔧 Quick Fixes

### Fix 1: Restart Everything
```bash
# Terminal 1
npm run server

# Terminal 2  
npm start
```

### Fix 2: Clear Browser Cache
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache and cookies

### Fix 3: Check Network Tab
1. Open Developer Tools
2. Go to Network tab
3. Try to delete contact
4. Check if DELETE request is sent and what response is received

## 📞 If Still Not Working

1. Check the exact error message in browser console
2. Check server terminal for error logs
3. Verify contact ID exists by checking the test endpoint
4. Make sure baseUrl is correctly set to `http://localhost:5000`