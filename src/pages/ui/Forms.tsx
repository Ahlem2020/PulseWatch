import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, EyeOff, Search, Mail, Lock, User, Calendar, Upload } from 'lucide-react';

export function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [checkboxes, setCheckboxes] = useState({ opt1: true, opt2: false, opt3: false });
  const [sliderValue, setSliderValue] = useState(50);
  const [switchValue, setSwitchValue] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Forms</h1>
        <p className="text-muted-foreground mt-1">Form elements and input components</p>
      </div>

      {/* Basic Inputs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Basic Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Default Input</label>
            <input 
              type="text" 
              placeholder="Enter text..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Disabled Input</label>
            <input 
              type="text" 
              placeholder="Disabled..."
              disabled
              className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg text-muted-foreground cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">With Helper Text</label>
            <input 
              type="email" 
              placeholder="Enter email..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <p className="mt-1 text-sm text-muted-foreground">We'll never share your email.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Error State</label>
            <input 
              type="text" 
              placeholder="Invalid input..."
              className="w-full px-4 py-2 bg-muted border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <p className="mt-1 text-sm text-red-500">This field is required.</p>
          </div>
        </div>
      </div>

      {/* Input with Icons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Input with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="johndoe"
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Select & Textarea */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Select & Textarea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Select</label>
            <select className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Multiple Select</label>
            <select multiple className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-24">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Textarea</label>
            <textarea 
              rows={4}
              placeholder="Enter your message..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>
        </div>
      </div>

      {/* Checkboxes & Radio */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Checkboxes & Radio Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Checkboxes</label>
            <div className="space-y-3">
              {['opt1', 'opt2', 'opt3'].map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={checkboxes[opt as keyof typeof checkboxes]}
                    onChange={(e) => setCheckboxes({ ...checkboxes, [opt]: e.target.checked })}
                    className="w-4 h-4 rounded border-border bg-muted text-accent focus:ring-accent"
                  />
                  <span className="text-foreground">Option {i + 1}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Radio Buttons</label>
            <div className="space-y-3">
              {['option1', 'option2', 'option3'].map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="radio-group"
                    checked={selectedOption === opt}
                    onChange={() => setSelectedOption(opt)}
                    className="w-4 h-4 border-border bg-muted text-accent focus:ring-accent"
                  />
                  <span className="text-foreground">Option {i + 1}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toggles & Range */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Toggles & Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Toggle Switch</label>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-foreground">Notifications</span>
                <button 
                  onClick={() => setSwitchValue(!switchValue)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${switchValue ? 'bg-accent' : 'bg-muted'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${switchValue ? 'left-6' : 'left-1'}`} />
                </button>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Range Slider: {sliderValue}%</label>
            <input 
              type="range" 
              min="0" 
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">File Upload</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Simple Upload</label>
            <input 
              type="file" 
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Dropzone</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
              <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Drop files here or click to upload</p>
              <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date & Time */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Date & Time Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Time</label>
            <input 
              type="time" 
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">DateTime</label>
            <input 
              type="datetime-local" 
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Input Groups */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Input Groups</h2>
        <div className="space-y-4">
          <div className="flex">
            <span className="inline-flex items-center px-4 bg-muted border border-r-0 border-border rounded-l-lg text-muted-foreground">
              @
            </span>
            <input 
              type="text" 
              placeholder="username"
              className="flex-1 px-4 py-2 bg-muted border border-border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search..."
              className="flex-1 px-4 py-2 bg-muted border border-r-0 border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-4 bg-accent text-white rounded-r-lg hover:bg-accent/90 transition-colors">
              Search
            </button>
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-4 bg-muted border border-r-0 border-border rounded-l-lg text-muted-foreground">
              https://
            </span>
            <input 
              type="text" 
              placeholder="example.com"
              className="flex-1 px-4 py-2 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <span className="inline-flex items-center px-4 bg-muted border border-l-0 border-border rounded-r-lg text-muted-foreground">
              .com
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
