import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, AlertTriangle, CheckCircle, Trash2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full ${sizeClasses[size]} bg-card rounded-xl border border-border shadow-xl`}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Modals() {
  const [basicModal, setBasicModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Modals</h1>
        <p className="text-muted-foreground mt-1">Modal dialog components</p>
      </div>

      {/* Modal Triggers */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Modal Examples</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setBasicModal(true)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Basic Modal
          </button>
          <button 
            onClick={() => setFormModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600/90 transition-colors"
          >
            Form Modal
          </button>
          <button 
            onClick={() => setConfirmModal(true)}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-600/90 transition-colors"
          >
            Confirm Modal
          </button>
          <button 
            onClick={() => setSuccessModal(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors"
          >
            Success Modal
          </button>
          <button 
            onClick={() => setDeleteModal(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 transition-colors"
          >
            Delete Modal
          </button>
          <button 
            onClick={() => setLargeModal(true)}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Large Modal
          </button>
        </div>
      </div>

      {/* Basic Modal */}
      <Modal isOpen={basicModal} onClose={() => setBasicModal(false)} title="Basic Modal">
        <div className="p-4">
          <p className="text-muted-foreground">
            This is a basic modal dialog. You can put any content here.
            Click outside or the X button to close.
          </p>
        </div>
        <div className="flex justify-end gap-3 p-4 border-t border-border">
          <button 
            onClick={() => setBasicModal(false)}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setBasicModal(false)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal isOpen={formModal} onClose={() => setFormModal(false)} title="Create New Item" size="lg">
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Enter name..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter email..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <textarea 
              rows={3}
              placeholder="Enter description..."
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 p-4 border-t border-border">
          <button 
            onClick={() => setFormModal(false)}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setFormModal(false)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Create
          </button>
        </div>
      </Modal>

      {/* Confirm Modal */}
      <Modal isOpen={confirmModal} onClose={() => setConfirmModal(false)} title="Confirm Action" size="sm">
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-foreground font-medium">Are you sure?</p>
          <p className="text-muted-foreground mt-2">
            This action requires your confirmation.
          </p>
        </div>
        <div className="flex gap-3 p-4 border-t border-border">
          <button 
            onClick={() => setConfirmModal(false)}
            className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setConfirmModal(false)}
            className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-600/90 transition-colors"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={successModal} onClose={() => setSuccessModal(false)} title="Success!" size="sm">
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <p className="text-foreground font-medium">Operation Complete</p>
          <p className="text-muted-foreground mt-2">
            Your action was completed successfully.
          </p>
        </div>
        <div className="p-4 border-t border-border">
          <button 
            onClick={() => setSuccessModal(false)}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors"
          >
            Done
          </button>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)} title="Delete Item" size="sm">
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
            <Trash2 className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-foreground font-medium">Delete this item?</p>
          <p className="text-muted-foreground mt-2">
            This action cannot be undone. All data will be permanently removed.
          </p>
        </div>
        <div className="flex gap-3 p-4 border-t border-border">
          <button 
            onClick={() => setDeleteModal(false)}
            className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setDeleteModal(false)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600/90 transition-colors"
          >
            Delete
          </button>
        </div>
      </Modal>

      {/* Large Modal */}
      <Modal isOpen={largeModal} onClose={() => setLargeModal(false)} title="Large Content Modal" size="xl">
        <div className="p-4 max-h-96 overflow-y-auto">
          <h4 className="font-medium text-foreground mb-2">Terms of Service</h4>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-3 p-4 border-t border-border">
          <button 
            onClick={() => setLargeModal(false)}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={() => setLargeModal(false)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </Modal>

      {/* Modal Code Example */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Usage</h2>
        <pre className="p-4 bg-muted/50 rounded-lg overflow-x-auto">
          <code className="text-sm text-foreground">{`const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>
  Open Modal
</button>

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Modal Title"
  size="md" // sm, md, lg, xl
>
  <div className="p-4">
    Modal content goes here
  </div>
</Modal>`}</code>
        </pre>
      </div>
    </motion.div>
  );
}
