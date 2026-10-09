import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration || 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} color="#10b981" />,
    error: <AlertCircle size={20} color="#ef4444" />,
    info: <Info size={20} color="#06b6d4" />,
  };

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div
        className="toast"
        style={{
          borderLeft: `4px solid ${
            toast.type === 'success' ? '#10b981' : toast.type === 'error' ? '#ef4444' : '#06b6d4'
          }`,
        }}
      >
        <div style={{ flexShrink: 0 }}>
          {icons[toast.type] || icons.info}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          {toast.title && (
            <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>
              {toast.title}
            </div>
          )}
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            {toast.message}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
