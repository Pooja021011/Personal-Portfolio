import React, { useState, useEffect, useCallback } from 'react';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Calendar, 
  Trash2, 
  Eye, 
  Search,
  Filter,
  Download,
  RefreshCw,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const AdminContactsDashboard = () => {
  // API Configuration
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterDate, setFilterDate] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0
  });

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/contact`);
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts || []);
      } else {
        console.error('Error fetching contacts:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const calculateStats = useCallback(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const todayCount = contacts.filter(c => new Date(c.createdAt) >= today).length;
    const weekCount = contacts.filter(c => new Date(c.createdAt) >= weekAgo).length;
    const monthCount = contacts.filter(c => new Date(c.createdAt) >= monthAgo).length;

    setStats({
      total: contacts.length,
      today: todayCount,
      thisWeek: weekCount,
      thisMonth: monthCount
    });
  }, [contacts]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = !filterDate || 
                       new Date(contact.createdAt).toDateString() === new Date(filterDate).toDateString();
    
    return matchesSearch && matchesDate;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Message', 'Date'],
      ...filteredContacts.map(contact => [
        contact.name,
        contact.email,
        contact.message.replace(/,/g, ';'),
        formatDate(contact.createdAt)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const deleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        console.log(`Attempting to delete contact with ID: ${id}`);
        const response = await fetch(`${baseUrl}/api/contact/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
        console.log('Delete response:', data);
        
        if (response.ok && data.success) {
          setContacts(contacts.filter(contact => contact.id !== id));
          alert('Contact deleted successfully! 🗑️');
        } else {
          const errorMessage = data.error || data.details || 'Failed to delete contact';
          console.error('Delete failed:', errorMessage);
          alert(`Failed to delete contact: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Network error deleting contact:', error);
        alert(`Network error: ${error.message}`);
      }
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
    <div className={`${bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-2xl ${color.includes('blue') ? 'bg-blue-100' : 
                        color.includes('green') ? 'bg-green-100' : 
                        color.includes('purple') ? 'bg-purple-100' : 'bg-orange-100'}`}>
          <Icon className={color} size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">
             <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Contact Dashboard </span>
              <span>📧</span>
            </h1>
            <p className="text-gray-600 mt-2">Manage and view all contact submissions</p>
          </div>
          <button
            onClick={fetchContacts}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <RefreshCw size={20} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Contacts"
            value={stats.total}
            icon={Users}
            color="text-blue-600"
            bgColor="bg-white"
          />
          <StatCard
            title="Today"
            value={stats.today}
            icon={Clock}
            color="text-green-600"
            bgColor="bg-white"
          />
          <StatCard
            title="This Week"
            value={stats.thisWeek}
            icon={Calendar}
            color="text-purple-600"
            bgColor="bg-white"
          />
          <StatCard
            title="This Month"
            value={stats.thisMonth}
            icon={CheckCircle}
            color="text-orange-600"
            bgColor="bg-white"
          />
        </div>

        {/* Filters and Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-80"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              <Download size={20} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              Contact Messages ({filteredContacts.length})
            </h2>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="text-center py-20">
              <MessageSquare className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No contacts found</h3>
              <p className="text-gray-500">No contact submissions match your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Message</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContacts.map((contact, index) => (
                    <tr key={contact.id || index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-full">
                            <User className="text-blue-600" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{contact.name}</p>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Mail size={14} className="mr-1" />
                              {contact.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700 line-clamp-2">
                          {contact.message.length > 100 
                            ? contact.message.substring(0, 100) + '...' 
                            : contact.message}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(contact.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedContact(contact);
                              setShowModal(true);
                            }}
                            className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal for viewing full message */}
        {showModal && selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                    <p className="text-gray-800 font-medium">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                    <p className="text-gray-800">{selectedContact.email}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Date</label>
                  <p className="text-gray-800">{formatDate(selectedContact.createdAt)}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Message</label>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${selectedContact.email}?subject=Re: Your contact form submission`}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span>Reply via Email</span>
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContactsDashboard;