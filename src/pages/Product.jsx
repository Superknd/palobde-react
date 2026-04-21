// filepath: palobde-react/src/pages/Product.jsx
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { addToCart } = useCart();
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '24px 48px', background: 'var(--blanc)', borderBottom: '1px solid var(--rose-light)' }}>
        <div style={{ fontSize: '12px', color: 'var(--gris)' }}>
          Accueil / Boutique / <span style={{ color: 'var(--noir)', fontWeight: 600 }}>Kit Journée — Rose Faso</span>
        </div>
      </div>

      {/* Product Detail */}
      <div style={{ padding: '40px 48px', background: 'var(--blanc)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '64px' }}>
          {/* Gallery */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ height: '440px', background: 'linear-gradient(135deg, var(--rose-light), var(--rose))', borderRadius: '24px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />
              <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.7)', padding: '12px 20px', borderRadius: '12px', fontSize: '12px', color: 'var(--noir)' }}>Photo principale du produit</div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['var(--rose-light)', 'var(--vert-light)', 'var(--terre-light)', 'var(--rose-pale)'].map((color, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  style={{ width: '80px', height: '80px', borderRadius: '12px', cursor: 'pointer', background: color, border: i === 0 ? '2px solid var(--rose)' : 'none' }}
                />
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            style={{ padding: 0 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--vert)', fontWeight: 700, marginBottom: '12px' }}>Serviettes Jour</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>Kit Journée — Rose Faso</h1>
            <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginBottom: '16px' }}>
              {Array(5).fill(0).map((_, i) => (
                <span key={i} style={{ color: 'var(--terre)', fontSize: '14px' }}>★</span>
              ))}
              <span style={{ fontSize: '12px', color: 'var(--gris)', marginLeft: '6px' }}>(24 avis)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900 }}>3 500 <sub style={{ fontSize: '16px', fontFamily: "'DM Sans', serif'" }}>FCFA</sub></span>
              <span style={{ background: 'var(--vert-pale)', color: 'var(--vert)', padding: '4px 12px', borderRadius: '10px', fontSize: '12px', fontWeight: 600 }}>Éco-responsable</span>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '24px' }}>
              Ce kit contient 3 serviettes hygiéniques lavables en Faso Danfani, le tissu traditionnel burkinabè. 
              Conçues pour un confort optimal et une protection longue durée. Chaque achat soutient l'emploi des femmes artisanes locales.
            </p>

            {/* Color Picker */}
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', display: 'block' }}>Couleur</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['var(--rose)', 'var(--vert)', 'var(--terre)', '#6B5B95'].map((color, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    style={{ width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', background: color, border: i === 0 ? '3px solid var(--noir)' : '3px solid transparent' }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600 }}>Quantité</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1.5px solid var(--rose-light)', borderRadius: '30px', overflow: 'hidden' }}>
                <button style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', fontSize: '18px', cursor: 'pointer' }}>-</button>
                <span style={{ padding: '0 16px', fontWeight: 600, fontSize: '14px' }}>1</span>
                <button style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', fontSize: '18px', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart({ id: 1, name: 'Kit Journée — Rose Faso', price: 3500, quantity: 1 })}
                style={{ flex: 1, background: 'var(--noir)', color: '#fff', border: 'none', height: '52px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                Ajouter au panier
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                style={{ background: 'transparent', color: 'var(--noir)', border: '2px solid var(--noir)', height: '52px', padding: '0 20px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
              >
                ♡
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderTop: '1px solid var(--rose-light)', borderBottom: '1px solid var(--rose-light)', margin: '24px 0' }}>
              {[
                { icon: '🌿', title: '100% Coton Bio', desc: 'Faso Danfani local' },
                { icon: '♻️', title: 'Lavable 15 ans', desc: 'Économique' },
                { icon: '🤝', title: 'Artisanes locales', desc: 'Empowerment' }
              ].map((badge, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{badge.icon}</span>
                  <div>
                    <small style={{ fontSize: '10px', color: 'var(--gris)', display: 'block' }}>{badge.desc}</small>
                    <b style={{ fontSize: '12px' }}>{badge.title}</b>
                  </div>
                </div>
              ))}
            </div>

            {/* Care Guide */}
            <div style={{ background: 'var(--vert-pale)', borderRadius: '16px', padding: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>Guide d'entretien</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { icon: '💧', text: 'Laver à 40°C' },
                  { icon: '☀️', text: 'Séchage naturel' },
                  { icon: '🚫', text: 'Pas de séchage machine' }
                ].map((step, i) => (
                  <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>{step.icon}</div>
                    <small style={{ fontSize: '10px', color: 'var(--gris)', lineHeight: 1.4 }}>{step.text}</small>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}