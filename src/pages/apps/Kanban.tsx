import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Check, Trash2, Edit, Calendar, Flag } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  category: string;
}

const initialTasks: Task[] = [
  { id: 1, title: 'Review project proposal', completed: false, priority: 'high', dueDate: 'Today', category: 'Work' },
  { id: 2, title: 'Update documentation', completed: true, priority: 'medium', dueDate: 'Tomorrow', category: 'Work' },
  { id: 3, title: 'Reply to client emails', completed: false, priority: 'high', dueDate: 'Today', category: 'Work' },
  { id: 4, title: 'Team meeting preparation', completed: false, priority: 'medium', dueDate: 'Mar 15', category: 'Work' },
  { id: 5, title: 'Grocery shopping', completed: false, priority: 'low', dueDate: 'Tomorrow', category: 'Personal' },
  { id: 6, title: 'Gym session', completed: true, priority: 'medium', dueDate: 'Today', category: 'Personal' },
  { id: 7, title: 'Call mom', completed: false, priority: 'low', dueDate: 'This week', category: 'Personal' },
];

const categories = ['All', 'Work', 'Personal'];

export function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
      priority: 'medium',
      dueDate: 'Today',
      category: selectedCategory === 'All' ? 'Work' : selectedCategory,
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(t => t.category === selectedCategory);

  const pendingTasks = filteredTasks.filter(t => !t.completed);
  const completedTasks = filteredTasks.filter(t => t.completed);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Task Manager</h1>
          <p className="text-muted-foreground mt-1">Organize and track your tasks</p>
        </div>
      </div>

      {/* Categories & Add Task */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-accent text-white' 
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent w-64"
            />
            <button 
              onClick={addTask}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <h2 className="font-semibold text-foreground">Pending</h2>
              <span className="text-sm text-muted-foreground">({pendingTasks.length})</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {pendingTasks.map(task => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group p-4 bg-muted/30 rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 border-muted-foreground transition-colors hover:border-accent"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">{task.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {task.dueDate}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        task.priority === 'high' ? 'text-red-500' :
                        task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        <Flag className="w-3.5 h-3.5" />
                        {task.priority}
                      </span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-muted rounded transition-colors">
                      <Edit className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 hover:bg-red-500/10 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            {pendingTasks.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No pending tasks</p>
            )}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <h2 className="font-semibold text-foreground">Completed</h2>
              <span className="text-sm text-muted-foreground">({completedTasks.length})</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {completedTasks.map(task => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group p-4 bg-muted/30 rounded-lg border border-border opacity-70"
              >
                <div className="flex items-start gap-3">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium line-through">{task.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {task.dueDate}
                      </span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-500/10 rounded transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </motion.div>
            ))}
            {completedTasks.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No completed tasks</p>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Tasks</p>
          <p className="text-2xl font-bold text-foreground mt-1">{filteredTasks.length}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold text-green-500 mt-1">{completedTasks.length}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Completion Rate</p>
          <p className="text-2xl font-bold text-accent mt-1">
            {filteredTasks.length > 0 ? Math.round((completedTasks.length / filteredTasks.length) * 100) : 0}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
