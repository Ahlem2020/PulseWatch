import { motion } from 'framer-motion';
import { Download, Plus, Trash2, Edit, Check, X, Loader2, ArrowRight, ExternalLink } from 'lucide-react';

export function Buttons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Buttons</h1>
        <p className="text-muted-foreground mt-1">Various button styles and variants</p>
      </div>

      {/* Primary Buttons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors">
            Success
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 transition-colors">
            Danger
          </button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-600/90 transition-colors">
            Warning
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600/90 transition-colors">
            Info
          </button>
          <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
            Secondary
          </button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Outline Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600/10 transition-colors">
            Success
          </button>
          <button className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600/10 transition-colors">
            Danger
          </button>
          <button className="px-4 py-2 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-colors">
            Warning
          </button>
          <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600/10 transition-colors">
            Info
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-3 py-1 text-sm bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Small
          </button>
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Default
          </button>
          <button className="px-6 py-3 text-lg bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Large
          </button>
        </div>
      </div>

      {/* With Icons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors">
            <Plus className="w-4 h-4" />
            Create New
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600/90 transition-colors">
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Icon Only */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Icon Only Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors">
            <Check className="w-5 h-5" />
          </button>
          <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <button className="p-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
          <button className="p-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
            <Edit className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* States */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Normal
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg opacity-80" disabled>
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </button>
          <button className="px-4 py-2 bg-accent/50 text-white/50 rounded-lg cursor-not-allowed" disabled>
            Disabled
          </button>
        </div>
      </div>

      {/* Button Groups */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Button Groups</h2>
        <div className="flex flex-wrap gap-6">
          <div className="inline-flex rounded-lg overflow-hidden border border-border">
            <button className="px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors">
              Left
            </button>
            <button className="px-4 py-2 bg-muted text-foreground hover:bg-muted/80 transition-colors border-x border-border">
              Middle
            </button>
            <button className="px-4 py-2 bg-muted text-foreground hover:bg-muted/80 transition-colors">
              Right
            </button>
          </div>
          
          <div className="inline-flex rounded-lg overflow-hidden border border-border">
            <button className="p-2 bg-muted text-foreground hover:bg-accent hover:text-white transition-colors">
              <Edit className="w-5 h-5" />
            </button>
            <button className="p-2 bg-muted text-foreground hover:bg-accent hover:text-white transition-colors border-x border-border">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 bg-muted text-foreground hover:bg-red-600 hover:text-white transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Rounded */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Rounded Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
            Rounded
          </button>
          <button className="px-6 py-2 border-2 border-accent text-accent rounded-full hover:bg-accent/10 transition-colors">
            Outline
          </button>
          <button className="p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
