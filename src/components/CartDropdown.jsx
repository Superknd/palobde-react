// filepath: palobde-react/src/components/CartDropdown.jsx
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function CartDropdown() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.4)',
              zIndex: 999,
            }}
          />
        )}
      </AnimatePresence>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '400px',
              maxWidth: '100vw',
              height: '100vh',
              background: '#fff',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px' }}>
                Mon Panier
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: 'var(--gris)',
                }}
              >
                ×
              </button>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <p style={{ color: 'var(--gris)', fontSize: '14px' }}>Votre panier est vide</p>
                  <Link 
                    to="/boutique" 
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      display: 'inline-block', 
                      marginTop: '16px', 
                      color: 'var(--rose)', 
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    Découvrir la boutique →
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        padding: '12px',
                        background: 'var(--blanc)',
                        borderRadius: '12px',
                        border: '1px solid #eee',
                      }}
                    >
                      <div style={{
                        width: '70px',
                        height: '70px',
                        background: 'var(--rose-pale)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {item.image ? (
                          <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        ) : (
                          <span style={{ fontSize: '24px' }}>🩷</span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{item.name}</h4>
                        <p style={{ fontSize: '13px', color: 'var(--rose)', fontWeight: '600' }}>{item.price.toLocaleString()} XOF</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              border: '1px solid #ddd',
                              background: '#fff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '14px',
                            }}
                          >
                            −
                          </button>
                          <span style={{ fontSize: '13px', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              border: '1px solid #ddd',
                              background: '#fff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '14px',
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--gris)',
                          cursor: 'pointer',
                          fontSize: '18px',
                          padding: '4px',
                        }}
                      >
                        ×
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{
                padding: '24px',
                borderTop: '1px solid #eee',
                background: 'var(--blanc)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--gris)', fontSize: '14px' }}>Total</span>
                  <span style={{ fontWeight: '700', fontSize: '18px' }}>{totalPrice.toLocaleString()} XOF</span>
                </div>
                <Link
                  to="/boutique"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '8px' }}
                >
                  Passer à la caisse
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'transparent',
                    border: '1px solid #ddd',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: 'var(--gris)',
                  }}
                >
                  Continuer mes achats
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}