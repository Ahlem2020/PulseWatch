import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const events = [
  { id: 1, title: 'Team Meeting', date: 15, time: '09:00 AM', color: 'accent' },
  { id: 2, title: 'Project Review', date: 15, time: '02:00 PM', color: 'green' },
  { id: 3, title: 'Client Call', date: 18, time: '10:30 AM', color: 'blue' },
  { id: 4, title: 'Lunch with Sarah', date: 20, time: '12:00 PM', color: 'yellow' },
  { id: 5, title: 'Design Sprint', date: 22, time: '09:00 AM', color: 'purple' },
  { id: 6, title: 'Deadline: Report', date: 25, time: '05:00 PM', color: 'red' },
];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(15);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const selectedEvents = selectedDate ? events.filter(e => e.date === selectedDate) : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground mt-1">Manage your schedule and events</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              {months[month]} {year}
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevMonth}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 mb-2">
            {days.map(day => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => {
              const hasEvent = day && events.some(e => e.date === day);
              const isSelected = day === selectedDate;
              const isToday = day === new Date().getDate() && 
                             month === new Date().getMonth() && 
                             year === new Date().getFullYear();

              return (
                <button
                  key={i}
                  onClick={() => day && setSelectedDate(day)}
                  disabled={!day}
                  className={`
                    aspect-square flex flex-col items-center justify-center rounded-lg text-sm transition-colors
                    ${!day ? '' : 'hover:bg-muted'}
                    ${isSelected ? 'bg-accent text-white' : ''}
                    ${isToday && !isSelected ? 'border-2 border-accent' : ''}
                    ${!day ? 'cursor-default' : 'cursor-pointer'}
                  `}
                >
                  {day && (
                    <>
                      <span className={isSelected ? 'text-white' : 'text-foreground'}>{day}</span>
                      {hasEvent && !isSelected && (
                        <div className="w-1 h-1 rounded-full bg-accent mt-1" />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Sidebar */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">
            {selectedDate ? `Events for ${months[month]} ${selectedDate}` : 'Select a date'}
          </h3>
          
          {selectedEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedEvents.map(event => (
                <div 
                  key={event.id}
                  className={`p-3 rounded-lg border-l-4 ${
                    event.color === 'accent' ? 'border-l-accent bg-accent/5' :
                    event.color === 'green' ? 'border-l-green-500 bg-green-500/5' :
                    event.color === 'blue' ? 'border-l-blue-500 bg-blue-500/5' :
                    event.color === 'yellow' ? 'border-l-yellow-500 bg-yellow-500/5' :
                    event.color === 'purple' ? 'border-l-purple-500 bg-purple-500/5' :
                    'border-l-red-500 bg-red-500/5'
                  }`}
                >
                  <p className="font-medium text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No events for this date</p>
          )}

          {/* Upcoming Events */}
          <h3 className="font-semibold text-foreground mt-8 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {events.slice(0, 4).map(event => (
              <div key={event.id} className="flex items-center gap-3 text-sm">
                <div className={`w-2 h-2 rounded-full ${
                  event.color === 'accent' ? 'bg-accent' :
                  event.color === 'green' ? 'bg-green-500' :
                  event.color === 'blue' ? 'bg-blue-500' :
                  event.color === 'yellow' ? 'bg-yellow-500' :
                  event.color === 'purple' ? 'bg-purple-500' :
                  'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="text-foreground">{event.title}</p>
                  <p className="text-muted-foreground">{months[month]} {event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
