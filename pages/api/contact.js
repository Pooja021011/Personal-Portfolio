import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      // Validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'All fields are required',
          success: false 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Invalid email format',
          success: false 
        });
      }
      
      const contact = await prisma.contact.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          createdAt: new Date(),
        },
      });
      
      console.log('Contact saved successfully:', contact);
      
      res.status(200).json({ 
        success: true, 
        contact,
        message: 'Message sent successfully!' 
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ 
        error: 'Failed to save contact. Please try again.',
        success: false,
        details: error.message 
      });
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await prisma.contact.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
      
      res.status(200).json({ 
        success: true, 
        contacts,
        count: contacts.length 
      });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ 
        error: 'Failed to fetch contacts',
        success: false 
      });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  // Close Prisma connection
  await prisma.$disconnect();
}