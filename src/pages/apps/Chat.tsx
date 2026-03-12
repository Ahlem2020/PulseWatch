import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Smile, Image } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Sarah Wilson', avatar: '👩', status: 'online', lastMessage: 'Hey, how are you?', time: '2m ago', unread: 2 },
  { id: 2, name: 'John Doe', avatar: '👨', status: 'online', lastMessage: 'The project looks great!', time: '15m ago', unread: 0 },
  { id: 3, name: 'Emily Chen', avatar: '👩‍💼', status: 'away', lastMessage: 'Can we meet tomorrow?', time: '1h ago', unread: 0 },
  { id: 4, name: 'Mike Johnson', avatar: '👨‍💻', status: 'offline', lastMessage: 'Thanks for your help', time: '3h ago', unread: 0 },
  { id: 5, name: 'Lisa Brown', avatar: '👩‍🎨', status: 'online', lastMessage: 'I love the new design!', time: '5h ago', unread: 1 },
];

const messages = [
  { id: 1, sender: 'them', text: 'Hey! How are you doing?', time: '10:00 AM' },
  { id: 2, sender: 'me', text: 'Hi Sarah! I\'m great, thanks for asking. How about you?', time: '10:02 AM' },
  { id: 3, sender: 'them', text: 'I\'m doing well! Just wanted to check in about the project.', time: '10:05 AM' },
  { id: 4, sender: 'them', text: 'Did you have a chance to review the latest designs?', time: '10:05 AM' },
  { id: 5, sender: 'me', text: 'Yes! I looked at them yesterday. They look amazing! 🎉', time: '10:10 AM' },
  { id: 6, sender: 'me', text: 'I have a few suggestions though. Can we hop on a quick call?', time: '10:10 AM' },
  { id: 7, sender: 'them', text: 'Of course! I\'m free in about 30 minutes. Does that work?', time: '10:15 AM' },
];

export function Chat() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-140px)]"
    >
      <div className="flex h-full bg-card rounded-xl border border-border overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 border-r border-border flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors ${
                  selectedContact.id === contact.id ? 'bg-muted/50' : ''
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    {contact.avatar}
                  </div>
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                    contact.status === 'online' ? 'bg-green-500' :
                    contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{contact.name}</span>
                    <span className="text-xs text-muted-foreground">{contact.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <span className="w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                    {contact.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-xl">
                {selectedContact.avatar}
              </div>
              <div>
                <p className="font-medium text-foreground">{selectedContact.name}</p>
                <p className="text-sm text-green-500">{selectedContact.status}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Video className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === 'me' 
                    ? 'bg-accent text-white rounded-br-md' 
                    : 'bg-muted text-foreground rounded-bl-md'
                }`}>
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Image className="w-5 h-5 text-muted-foreground" />
              </button>
              <input 
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Smile className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
