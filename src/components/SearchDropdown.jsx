// filepath: palobde-react/src/components/SearchDropdown.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchDropdown({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  
  const products = [
    { name: 'Kit Journée — Rose Faso', price: 3500, category: 'Serviettes Jour' },
    { name: 'Serviette Nuit — Vert Nature', price: 1800, category: 'Serviettes Nuit' },
    { name: 'Kit Scolaire — Terre', price: 4200, category: 'Kits Scolaires' },
    { name: 'Culotte Menstruelle — Rose', price: 5000, category: 'Culottes' },
    { name: 'Kit Nuit Complete', price: 3200, category: 'Serviettes Nuit' },
    { name: 'Sachet Lavable', price: 1500, category: 'Accessoires' }
  ];

  const filteredProducts = query 
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : products.slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              width: '400px',
              maxWidth: '90vw',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              zIndex: 1000,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #eee',
                  borderRadius: '12px',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ maxHeight: '300px', overflow: 'auto' }}>
              {filteredProducts.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--gris)' }}>
                  Aucun produit trouvé
                </div>
              ) : (
                filteredProducts.map((product, i) => (
                  <Link
                    key={i}
                    to="/boutique"
                    onClick={onClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderBottom: '1px solid #f5f5f5',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--rose-pale)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      🩷
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>{product.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--gris)' }}>{product.category}</div>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--rose)' }}>
                      {product.price.toLocaleString()} XOF
                    </div>
                  </Link>
                ))
              )}
            </div>
            <Link
              to="/boutique"
              onClick={onClose}
              style={{
                display: 'block',
                padding: '12px',
                textAlign: 'center',
                fontSize: '13px',
                color: 'var(--rose)',
                fontWeight: '600',
                borderTop: '1px solid #eee',
              }}
            >
              Voir tous les produits →
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}