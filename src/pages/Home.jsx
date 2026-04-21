// filepath: palobde-react/src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import images from '../data/images';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const products = [
  { id: 1, name: 'Kit Journée Complète', desc: '3 serviettes jour en Faso Danfani rose, lavables et réutilisables', price: '3 500', badge: 'Bestseller', color: 'rose' },
  { id: 2, name: 'Serviette Nuit', desc: 'Protection renforcée en coton 100% burkinabè, nuit tranquille', price: '1 800', color: 'vert' },
  { id: 3, name: 'Kit Dignité Scolaire', desc: 'Sachet lavable + 5 serviettes + brochure hygiène pour élèves', price: '4 200', badge: 'Scolaire', color: 'terre' },
  { id: 4, name: 'Culotte Menstruelle', desc: 'Double couche absorbante, design moderne, très confortable', price: '5 000', color: 'mix' }
];

const stats = [
  { num: '+10 000', label: 'Filles sensibilisées' },
  { num: '+2 500', label: 'Kits distribués' },
  { num: '15 ans', label: 'Durée moyenne' },
  { num: '-90%', label: 'Déchets évités' },
  { num: '120+', label: 'Artisanes employées' }
];

const blogPosts = [
  { cat: 'Hygiène', title: 'Comment entretenir sa serviette lavable en 5 étapes ?', date: '15 Jan 2025', color: 'b1' },
  { cat: 'Santé', title: 'Règles douloureuses : ce que votre corps essaie de vous dire', date: '8 Jan 2025', color: 'b2' },
  { cat: 'Environnement', title: 'Faso Danfani : le tissu qui révolutionne l\'hygiène menstruelle', date: '2 Jan 2025', color: 'b3' }
];

const paymentMethods = [
  { icon: 'mobile', name: 'Orange Money', desc: 'Paiement instantané' },
  { icon: 'card', name: 'Moov Money', desc: 'Paiement instantané' },
  { icon: 'truck', name: 'Paiement à la livraison', desc: 'Ouaga & Bobo' },
  { icon: 'message', name: 'Confirmation WhatsApp', desc: 'Notification auto' }
];

export default function Home() {
  const { addToCart } = useCart();
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'var(--blanc)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '560px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', pointerEvents: 'none' }} />
        
        <motion.div 
          className="hero-left"
          style={{ padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--vert-pale)', color: 'var(--vert)', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', width: 'fit-content' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Fait au Burkina Faso · 100% Naturel
          </motion.div>
          
          <motion.h1 
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '52px', lineHeight: '1.05', color: 'var(--noir)', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            La serviette qui <em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>change des vies</em> — et la planète
          </motion.h1>
          
          <motion.p 
            style={{ fontSize: '16px', color: 'var(--gris)', lineHeight: '1.7', maxWidth: '420px', marginBottom: '36px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Des serviettes lavables en Faso Danfani, conçues avec soin pour les femmes d'Afrique. Confortables, économiques, et portées par une mission sociale.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/boutique" className="btn-primary">Acheter un kit</Link>
            <Link to="/don" className="btn-secondary">Faire un don</Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right"
          style={{ background: 'linear-gradient(135deg, var(--rose) 0%, var(--terre-light) 100%)', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <motion.div 
              style={{ width: '260px', height: '320px', borderRadius: '140px 140px 120px 120px', overflow: 'hidden' }}
              className="animate-float"
            >
              <img 
                src={images.hero[0]} 
                alt="Femme burkinabè avec tissu Faso Danfani" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
          <motion.div 
            style={{ position: 'absolute', bottom: '30px', left: '30px', background: 'rgba(255,255,255,0.95)', padding: '12px 20px', borderRadius: '14px', fontSize: '12px', fontWeight: '600', color: 'var(--noir)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Made in Burkina Faso
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <motion.div 
        className="stats-bar"
        style={{ background: 'var(--noir)', padding: '24px 48px', display: 'flex', gap: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="stat-item"
            style={{ flex: 1, padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.15)', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, color: 'var(--rose)', display: 'block', lineHeight: 1 }}>{stat.num}</span>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Products Section */}
      <section style={{ background: 'var(--blanc)', padding: '72px 48px' }}>
        <div className="container">
          <motion.div 
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="section-label">Notre Boutique</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: 'var(--noir)', lineHeight: 1.1 }}>Produits phares</h2>
            </div>
            <Link to="/boutique" className="see-all">Voir tous les produits →</Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                style={{ background: 'var(--blanc)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: product.color === 'rose' ? 'linear-gradient(135deg, var(--rose-light), var(--rose))' : product.color === 'vert' ? 'linear-gradient(135deg, var(--vert-light), var(--vert))' : product.color === 'terre' ? 'linear-gradient(135deg, var(--terre-light), var(--terre))' : 'linear-gradient(135deg, var(--rose-light), var(--vert-light))' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />
                  {product.badge && (
                    <span style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, background: 'var(--vert)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.badge}</span>
                  )}
                  <span style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.9)', color: 'var(--noir)', padding: '6px 12px', borderRadius: '20px', fontWeight: 600, fontSize: '11px' }}>Photo produit</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{product.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gris)', lineHeight: 1.5, marginBottom: '14px' }}>{product.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: 'var(--noir)' }}>{product.price} <span style={{ fontSize: '12px', fontFamily: "'DM Sans', serif", color: 'var(--gris)' }}>FCFA</span></div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart({ id: product.id, name: product.name, price: parseInt(product.price.replace(' ', '')), quantity: 1 })}
                      style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--noir)', color: '#fff', border: 'none', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >+</motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ background: 'linear-gradient(135deg, var(--rose-pale) 0%, var(--vert-pale) 100%)', padding: '72px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Notre Impact</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>Chaque achat finance une cause</h2>
            <p style={{ fontSize: '15px', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '28px' }}>En achetant une serviette Palobde, vous participez à un cercle vertueux : emploi local, zéro déchet, et éducation menstruelle pour les filles en zones rurales du Burkina Faso.</p>
            <Link to="/about" className="btn-primary">Découvrir notre mission →</Link>
          </motion.div>

          <motion.div 
            style={{ background: 'var(--blanc)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '🏫', num: '+10 000', text: 'Filles sensibilisées dans les écoles', color: 'rose' },
              { icon: '🌱', num: '-4 200', text: 'Kg de déchets plastiques évités/an', color: 'vert' },
              { icon: '👩‍🔧', num: '120+', text: 'Femmes artisanes employées', color: 'terre' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: item.color === 'rose' ? 'var(--rose-pale)' : item.color === 'vert' ? 'var(--vert-pale)' : 'rgba(196,129,58,0.08)', borderRadius: '14px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', background: item.color === 'rose' ? 'var(--rose)' : item.color === 'vert' ? 'var(--vert)' : 'var(--terre-light)', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 900 }}>{item.num}</div>
                  <small style={{ fontSize: '12px', color: 'var(--gris)' }}>{item.text}</small>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section style={{ background: 'var(--blanc)', padding: '72px 48px' }}>
        <div className="container">
          <motion.div 
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="section-label">Espace Éducatif</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: 'var(--noir)', lineHeight: 1.1 }}>Briser les tabous, <br />informer les femmes</h2>
            </div>
            <Link to="/blog" className="see-all">Tout le blog →</Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {blogPosts.map((post, i) => (
              <motion.div 
                key={i}
                style={{ background: 'var(--blanc)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', padding: '16px', position: 'relative', background: post.color === 'b1' ? 'linear-gradient(160deg, var(--vert-light), var(--vert))' : post.color === 'b2' ? 'linear-gradient(160deg, var(--rose-light), var(--rose))' : 'linear-gradient(160deg, var(--terre-light), var(--terre))' }}>
                  <span style={{ background: 'rgba(255,255,255,0.9)', fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '10px', color: 'var(--noir)', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.cat}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gris)', lineHeight: 1.6 }}>Guide illustré pour laver, sécher et conserver vos serviettes Palobde...</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--gris)' }}>{post.date}</span>
                    <Link to="/blog" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vert)', textDecoration: 'none' }}>Lire →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section style={{ background: 'var(--rose-pale)', textAlign: 'center', padding: '48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label" style={{ textAlign: 'center' }}>Paiement Facile</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>Payez comme vous voulez</h2>
          <p style={{ color: 'var(--gris)', fontSize: '14px', marginBottom: '32px' }}>Disponible partout au Burkina Faso</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {paymentMethods.map((method, i) => (
              <motion.div 
                key={i}
                style={{ background: 'var(--blanc)', padding: '16px 28px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {method.icon === 'mobile' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>}
                {method.icon === 'card' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--vert)" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>}
                {method.icon === 'truck' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terre)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>}
                {method.icon === 'message' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
                <div style={{ textAlign: 'left' }}>
                  <b style={{ fontSize: '14px', display: 'block' }}>{method.name}</b>
                  <small style={{ fontSize: '11px', color: 'var(--gris)' }}>{method.desc}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section style={{ background: 'var(--blanc)', padding: '64px 48px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label" style={{ textAlign: 'center' }}>Ils nous font confiance</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, marginBottom: '16px' }}>Nos Partenaires</h2>
          <p style={{ color: 'var(--gris)', fontSize: '14px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Nous collaborons avec des organisations locales et internationales pour maximiser notre impact sur la santé menstruelle au Burkina Faso.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'UNICEF Burkina', color: '#E8A0A0' },
              { name: 'Plan International', color: '#7BBDB4' },
              { name: 'ONG Femme & Développement', color: '#C4813A' },
              { name: 'Ministère de la Santé', color: '#B8DDD9' },
              { name: 'USAID Burkina', color: '#E8C49A' }
            ].map((partner, i) => (
              <motion.div 
                key={i}
                style={{ 
                  padding: '20px 32px', 
                  borderRadius: '12px', 
                  background: 'var(--rose-pale)',
                  border: '1px solid var(--rose-light)',
                  minWidth: '160px'
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>🤝</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--noir)' }}>{partner.name}</span>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link to="/ong" style={{ color: 'var(--vert)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Devenir partenaire →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}