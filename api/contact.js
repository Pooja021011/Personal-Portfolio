const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

// Contact API Controllers
const contactAPI = {
  // Create new contact (POST)
  createContact: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      console.log('Received contact submission:', { name, email, message: message?.substring(0, 50) + '...' });

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
  },

  // Get all contacts (GET)
  getAllContacts: async (req, res) => {
    try {
      const contacts = await prisma.contact.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });

      console.log(`Retrieved ${contacts.length} contacts`);

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
  },

  // Get single contact by ID (GET)
  getContactById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Fetching contact with ID: ${id}`);

      // Validate ID
      const contactId = parseInt(id);
      if (isNaN(contactId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid contact ID'
        });
      }

      const contact = await prisma.contact.findUnique({
        where: {
          id: contactId
        }
      });

      if (!contact) {
        console.log(`Contact with ID ${contactId} not found`);
        return res.status(404).json({
          success: false,
          error: 'Contact not found'
        });
      }

      console.log(`Contact retrieved successfully: ${contact.name}`);
      res.status(200).json({ success: true, contact });
    } catch (error) {
      console.error('Error fetching contact:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch contact',
        details: error.message
      });
    }
  },

  // Delete contact by ID (DELETE)
  deleteContact: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Attempting to delete contact with ID: ${id}`);

      // Validate ID
      const contactId = parseInt(id);
      if (isNaN(contactId)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid contact ID'
        });
      }

      // Check if contact exists
      const existingContact = await prisma.contact.findUnique({
        where: {
          id: contactId
        }
      });

      if (!existingContact) {
        console.log(`Contact with ID ${contactId} not found`);
        return res.status(404).json({
          success: false,
          error: 'Contact not found'
        });
      }

      // Delete the contact
      await prisma.contact.delete({
        where: {
          id: contactId
        }
      });

      console.log(`Contact with ID ${contactId} deleted successfully`);
      res.status(200).json({
        success: true,
        message: 'Contact deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to delete contact',
        details: error.message
      });
    }
  },

  // Test endpoint to get all contacts with basic info
  getTestContacts: async (req, res) => {
    try {
      const contacts = await prisma.contact.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      res.json({
        success: true,
        message: 'Test endpoint working',
        contacts: contacts,
        count: contacts.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
};

// Graceful shutdown function
const closeDatabase = async () => {
  await prisma.$disconnect();
};

module.exports = { contactAPI, closeDatabase };