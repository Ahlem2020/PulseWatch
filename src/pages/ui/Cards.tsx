import { motion } from 'framer-motion';
import { MoreVertical, Heart, MessageCircle, Share2, Bookmark, ArrowRight } from 'lucide-react';

export function Cards() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Cards</h1>
        <p className="text-muted-foreground mt-1">Various card layouts and styles</p>
      </div>

      {/* Basic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground">Basic Card</h3>
          <p className="text-muted-foreground mt-2">
            This is a simple card with just a title and some text content.
          </p>
        </div>
        
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">With Header</h3>
            <button className="p-1 hover:bg-muted rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <p className="text-muted-foreground">
            Card with header actions and content area.
          </p>
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground">With Footer</h3>
            <p className="text-muted-foreground mt-2">
              Card with separated footer section.
            </p>
          </div>
          <div className="px-6 py-4 bg-muted/50 border-t border-border">
            <button className="text-sm text-accent hover:underline">View Details →</button>
          </div>
        </div>
      </div>

      {/* Image Cards */}
      <h2 className="text-lg font-semibold text-foreground">Image Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop" 
            alt="Coding" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Image Top</h3>
            <p className="text-muted-foreground mt-2">
              Beautiful card with image at the top.
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Image Bottom</h3>
            <p className="text-muted-foreground mt-2">
              Card with image at the bottom section.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop" 
            alt="Office" 
            className="w-full h-48 object-cover"
          />
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden relative h-72">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Overlay Card</h3>
              <p className="text-white/80 mt-1">Text overlay on image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Cards */}
      <h2 className="text-lg font-semibold text-foreground">Social Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop" 
            alt="Mountain" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="User" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <p className="text-foreground">
              Amazing view from the top of the mountain! The sunrise was absolutely breathtaking. 🏔️
            </p>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>1.2k</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>234</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="ml-auto text-muted-foreground hover:text-accent transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-start gap-3">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" 
              alt="User" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground">Sarah Wilson</p>
                <span className="text-sm text-muted-foreground">@sarahw</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">5h</span>
              </div>
              <p className="text-foreground mt-2">
                Just shipped a new feature! 🚀 Really excited about how the team came together on this one. Check it out and let me know what you think!
              </p>
              <div className="flex items-center gap-6 mt-4">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">89</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <h2 className="text-lg font-semibold text-foreground">Pricing Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
          { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'API Access'], highlighted: true },
          { name: 'Enterprise', price: '$99', features: ['Unlimited Everything', 'Custom Integrations', '24/7 Support', 'SLA'] },
        ].map((plan) => (
          <div 
            key={plan.name}
            className={`bg-card rounded-xl border p-6 ${plan.highlighted ? 'border-accent shadow-lg shadow-accent/20' : 'border-border'}`}
          >
            {plan.highlighted && (
              <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full mb-4">
                Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full mt-6 py-2 rounded-lg font-medium transition-colors ${
              plan.highlighted 
                ? 'bg-accent text-white hover:bg-accent/90' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <h2 className="text-lg font-semibold text-foreground">Stats Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '24,521', change: '+12%', color: 'blue' },
          { label: 'Revenue', value: '$45,234', change: '+8%', color: 'green' },
          { label: 'Orders', value: '1,234', change: '-3%', color: 'red' },
          { label: 'Conversion', value: '3.24%', change: '+5%', color: 'purple' },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-6">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Horizontal Cards */}
      <h2 className="text-lg font-semibold text-foreground">Horizontal Cards</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-xl border border-border overflow-hidden flex">
            <img 
              src={`https://images.unsplash.com/photo-${1517694712202 + i * 1000}-14dd9538aa97?w=200&h=150&fit=crop`} 
              alt="Thumbnail" 
              className="w-48 h-36 object-cover"
            />
            <div className="p-4 flex-1">
              <h3 className="font-semibold text-foreground">Horizontal Card {i}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                This is a horizontal card layout perfect for lists and feeds.
              </p>
              <button className="flex items-center gap-1 mt-3 text-sm text-accent hover:underline">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
