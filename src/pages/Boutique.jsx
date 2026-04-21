// filepath: palobde-react/src/pages/Boutique.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import images from '../data/images';

const products = [
  { id: 1, name: 'Kit Journée — Rose Faso', sub: '3 serviettes jour · Faso Danfani', price: 3500, badge: 'Bestseller', color: 'rose', image: images.products.kitJour },
  { id: 2, name: 'Serviette Nuit — Vert Nature', sub: 'Protection extra longue', price: 1800, color: 'vert', image: images.products.kitNuit },
  { id: 3, name: 'Kit Scolaire — Terre', sub: '5 serviettes + sachet', price: 4200, color: 'terre', image: images.products.kitScolaire },
  { id: 4, name: 'Culotte Menstruelle — Rose', sub: 'Double couche', price: 5000, color: 'rose', image: images.products.culotte },
  { id: 5, name: 'Kit Nuit Complete', sub: '2 serviettes nuit', price: 3200, color: 'vert', image: images.products.kitNuit },
  { id: 6, name: 'Sachet Lavable', sub: 'Tissu Faso Danfani', price: 1500, color: 'terre', image: images.products.sachet }
];

const categories = [
  { name: 'Tous les produits', count: 12, active: true },
  { name: 'Serviettes Jour', count: 4 },
  { name: 'Serviettes Nuit', count: 3 },
  { name: 'Kits Scolaires', count: 3 },
  { name: 'Culottes Menstruelles', count: 2 }
];

export default function Boutique() {
  const [priceValue, setPriceValue] = useState(8000);
  const { addToCart } = useCart();
  
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '24px 40px', background: 'var(--blanc)', borderBottom: '1px solid var(--rose-light)' }}>
        <div className="container" style={{ fontSize: '13px', color: 'var(--gris)' }}>
          Accueil / <b style={{ color: 'var(--noir)' }}>Boutique</b>
        </div>
      </div>

      <div className="boutique-layout" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 'calc(100vh - 110px)' }}>
        {/* Sidebar */}
        <aside className="boutique-sidebar" style={{ background: 'var(--blanc)', borderRight: '1px solid var(--rose-light)', padding: '32px 24px', position: 'sticky', top: '110px', height: 'calc(100vh - 110px)', overflowY: 'auto' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '28px' }}>Filtres</div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gris)', marginBottom: '16px' }}>Catégorie</div>
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', cursor: 'pointer' }}
                whileHover={{ x: 4 }}
              >
                <div style={{ width: '18px', height: '18px', border: '2px solid var(--rose-light)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: cat.active ? 'var(--rose)' : 'transparent', borderColor: cat.active ? 'var(--rose)' : 'var(--rose-light)' }}>
                  {cat.active && <span style={{ color: '#fff', fontSize: '10px' }}>✓</span>}
                </div>
                <span style={{ fontSize: '13px' }}>{cat.name}</span>
                <span style={{ fontSize: '11px', color: 'var(--gris)', marginLeft: 'auto' }}>{cat.count}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gris)', marginBottom: '16px' }}>Couleur / Motif</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['var(--rose)', 'var(--vert)', 'var(--terre)', '#6B5B95', '#8DC8C2'].map((color, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', background: color, cursor: 'pointer', border: i === 0 ? '2px solid var(--noir)' : 'none' }}
                />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gris)', marginBottom: '16px' }}>Budget</div>
            <div style={{ background: 'var(--rose-pale)', borderRadius: '12px', padding: '16px' }}>
              <input 
                type="range" 
                min="0" 
                max="15000" 
                value={priceValue} 
                onChange={(e) => setPriceValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--rose)' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--gris)', marginTop: '6px' }}>
                <span>{priceValue.toLocaleString()} FCFA</span>
                <span>15 000 FCFA</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="boutique-main" style={{ padding: '32px 40px' }}>
          <motion.div 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p style={{ fontSize: '13px', color: 'var(--gris)' }}><b>12 produits</b> trouvés</p>
            <select style={{ padding: '8px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '20px', fontSize: '13px', background: 'var(--blanc)', color: 'var(--noir)', cursor: 'pointer' }}>
              <option>Trier : Popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </motion.div>

          <div className="boutique-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                style={{ background: 'var(--blanc)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
              >
                <div style={{ height: '220px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: product.color === 'rose' ? 'linear-gradient(135deg, var(--rose-light), var(--rose))' : product.color === 'vert' ? 'linear-gradient(135deg, var(--vert-light), var(--vert))' : 'linear-gradient(135deg, var(--terre-light), var(--terre))' }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                  >♡</motion.button>
                  {product.badge && (
                    <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--vert)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase' }}>{product.badge}</span>
                  )}
                </div>
                <div style={{ padding: '18px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{product.name}</h3>
                  <div style={{ fontSize: '11px', color: 'var(--gris)', marginBottom: '12px' }}>{product.sub}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700 }}>{product.price.toLocaleString()} <span style={{ fontSize: '12px', color: 'var(--gris)' }}>FCFA</span></div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      style={{ background: 'var(--noir)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                    >+ Panier</motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
