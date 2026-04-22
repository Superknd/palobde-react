import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import images from '../data/images';
import { loadBlogPosts, loadProducts } from '../data/contentStore';

const stats = [
  { num: '+10 000', label: 'Filles sensibilisees' },
  { num: '+2 500', label: 'Kits distribues' },
  { num: '15 ans', label: 'Duree moyenne' },
  { num: '-90%', label: 'Dechets evites' },
  { num: '120+', label: 'Artisanes employees' },
];

const paymentMethods = [
  { icon: 'mobile', name: 'Orange Money', desc: 'Paiement instantane' },
  { icon: 'card', name: 'Moov Money', desc: 'Paiement instantane' },
  { icon: 'truck', name: 'Paiement a la livraison', desc: 'Ouaga et Bobo' },
  { icon: 'message', name: 'Confirmation WhatsApp', desc: 'Notification auto' },
];

const impactItems = [
  {
    icon: 'Ecoles',
    num: '+10 000',
    text: 'Filles sensibilisees dans les ecoles',
    color: 'rose',
  },
  {
    icon: 'Impact',
    num: '-4 200',
    text: 'Kg de dechets plastiques evites chaque annee',
    color: 'vert',
  },
  {
    icon: 'Artisanes',
    num: '120+',
    text: 'Femmes artisanes employees',
    color: 'terre',
  },
];

export default function Home() {
  const { addToCart } = useCart();
  const products = loadProducts().filter((product) => product.active !== false).slice(0, 4);
  const blogPosts = loadBlogPosts().filter((post) => post.status === 'Publié').slice(0, 3);

  return (
    <div className="home-page" style={{ paddingTop: '72px' }}>
      <section
        className="hero home-hero"
        style={{
          background: 'var(--blanc)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '560px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', pointerEvents: 'none' }} />

        <motion.div
          className="hero-left"
          style={{
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--vert-pale)',
              color: 'var(--vert)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
              width: 'fit-content',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Fait au Burkina Faso · 100% naturel
          </motion.div>

          <motion.h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: '52px',
              lineHeight: '1.05',
              color: 'var(--noir)',
              marginBottom: '20px',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            La serviette qui <em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>change des vies</em> et la
            planete
          </motion.h1>

          <motion.p
            style={{ fontSize: '16px', color: 'var(--gris)', lineHeight: '1.7', maxWidth: '420px', marginBottom: '36px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Des serviettes lavables en Faso Danfani, concues avec soin pour les femmes d Afrique. Confortables,
            economiques et portees par une mission sociale.
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/boutique" className="btn-primary">
              Acheter un kit
            </Link>
            <Link to="/don" className="btn-secondary">
              Faire un don
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          style={{
            background: 'linear-gradient(135deg, rgba(232,160,160,0.92) 0%, rgba(232,196,154,0.95) 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top, rgba(255,255,255,0.42), transparent 56%)' }} />
          <div style={{ position: 'absolute', top: '14%', right: '12%', width: '120px', height: '120px', borderRadius: '36px', background: 'rgba(255,255,255,0.2)', transform: 'rotate(22deg)' }} />
          <div style={{ position: 'absolute', bottom: '14%', left: '10%', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.28)' }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <motion.div
              className="animate-float"
              style={{
                width: '320px',
                height: '400px',
                borderRadius: '42% 58% 38% 62% / 44% 33% 67% 56%',
                overflow: 'hidden',
                padding: '10px',
                background: 'rgba(255,255,255,0.18)',
                boxShadow: '0 24px 60px rgba(62,33,18,0.2)',
              }}
            >
              <img
                src={images.hero[0]}
                alt="Femme en tenue Faso Danfani"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </motion.div>
          </div>

          <motion.div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              background: 'rgba(255,255,255,0.95)',
              padding: '12px 20px',
              borderRadius: '14px',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--noir)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Made in Burkina Faso
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="stats-bar"
        style={{ background: 'var(--noir)', padding: '24px 48px', display: 'flex', gap: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            style={{ flex: 1, padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.15)', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                fontWeight: 900,
                color: 'var(--rose)',
                display: 'block',
                lineHeight: 1,
              }}
            >
              {stat.num}
            </span>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section style={{ background: 'var(--blanc)', padding: '72px 48px' }}>
        <div className="container">
          <motion.div
            className="section-heading-row"
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="section-label">Notre Boutique</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: 'var(--noir)', lineHeight: 1.1 }}>
                Produits phares
              </h2>
            </div>
            <Link to="/boutique" className="see-all">
              Voir tous les produits →
            </Link>
          </motion.div>

          <div className="products-grid-home" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                style={{ background: 'var(--blanc)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  style={{
                    height: '220px',
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      product.color === 'rose'
                        ? 'linear-gradient(135deg, var(--rose-light), var(--rose))'
                        : product.color === 'vert'
                          ? 'linear-gradient(135deg, var(--vert-light), var(--vert))'
                          : product.color === 'terre'
                            ? 'linear-gradient(135deg, var(--terre-light), var(--terre))'
                            : 'linear-gradient(135deg, var(--rose-light), var(--vert-light))',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />
                  <img src={product.image} alt={product.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.3), rgba(26,26,26,0.06))' }} />
                  {product.badge && (
                    <span style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, background: 'var(--vert)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{product.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gris)', lineHeight: 1.5, marginBottom: '14px' }}>{product.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: 'var(--noir)' }}>
                      {Number(product.price).toLocaleString()} <span style={{ fontSize: '12px', fontFamily: "'DM Sans', serif", color: 'var(--gris)' }}>FCFA</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: Number(product.price),
                          quantity: 1,
                          image: product.image,
                        })
                      }
                      style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--noir)', color: '#fff', border: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--rose-pale) 0%, var(--vert-pale) 100%)', padding: '72px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />

        <div className="container impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="section-label">Notre Impact</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
              Chaque achat finance une cause
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '28px' }}>
              En achetant une serviette Palobde, vous participez a un cercle vertueux : emploi local, zero dechet et education menstruelle pour les filles en zones rurales du Burkina Faso.
            </p>
            <Link to="/about" className="btn-primary">
              Decouvrir notre mission →
            </Link>
          </motion.div>

          <motion.div
            style={{ background: 'var(--blanc)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {impactItems.map((item, index) => (
              <motion.div
                key={item.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background:
                    item.color === 'rose'
                      ? 'var(--rose-pale)'
                      : item.color === 'vert'
                        ? 'var(--vert-pale)'
                        : 'rgba(196,129,58,0.08)',
                  borderRadius: '14px',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: item.color === 'rose' ? 'var(--rose)' : item.color === 'vert' ? 'var(--vert)' : 'var(--terre-light)',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 900 }}>{item.num}</div>
                  <small style={{ fontSize: '12px', color: 'var(--gris)' }}>{item.text}</small>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--blanc)', padding: '72px 48px' }}>
        <div className="container">
          <motion.div
            className="section-heading-row"
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="section-label">Espace Educatif</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: 'var(--noir)', lineHeight: 1.1 }}>
                Briser les tabous,
                <br />
                informer les femmes
              </h2>
            </div>
            <Link to="/blog" className="see-all">
              Tout le blog →
            </Link>
          </motion.div>

          <div className="blog-grid-home" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                style={{ background: 'var(--blanc)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  style={{
                    height: '180px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                    position: 'relative',
                    background:
                      post.color === 'b1'
                        ? 'linear-gradient(160deg, var(--vert-light), var(--vert))'
                        : post.color === 'b2'
                          ? 'linear-gradient(160deg, var(--rose-light), var(--rose))'
                          : 'linear-gradient(160deg, var(--terre-light), var(--terre))',
                  }}
                >
                  <img src={post.image} alt={post.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.55), rgba(26,26,26,0.08))' }} />
                  <span style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.92)', fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '10px', color: 'var(--noir)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gris)', lineHeight: 1.6 }}>
                    {post.excerpt || 'Article educatif Palobde Afrique.'}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--gris)' }}>{String(post.date).replaceAll('-', '/')}</span>
                    <Link to={`/blog/${post.id}`} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vert)', textDecoration: 'none' }}>
                      Lire →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--rose-pale)', textAlign: 'center', padding: '48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-label" style={{ textAlign: 'center' }}>
            Paiement Facile
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>
            Payez comme vous voulez
          </h2>
          <p style={{ color: 'var(--gris)', fontSize: '14px', marginBottom: '32px' }}>Disponible partout au Burkina Faso</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                style={{ background: 'var(--blanc)', padding: '16px 28px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {method.icon === 'mobile' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}
                {method.icon === 'card' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--vert)" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>}
                {method.icon === 'truck' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terre)" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>}
                {method.icon === 'message' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
                <div style={{ textAlign: 'left' }}>
                  <b style={{ fontSize: '14px', display: 'block' }}>{method.name}</b>
                  <small style={{ fontSize: '11px', color: 'var(--gris)' }}>{method.desc}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section style={{ background: 'var(--blanc)', padding: '64px 48px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-label" style={{ textAlign: 'center' }}>
            Ils nous font confiance
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, marginBottom: '16px' }}>Nos Partenaires</h2>
          <p style={{ color: 'var(--gris)', fontSize: '14px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Nous collaborons avec des organisations locales et internationales pour maximiser notre impact sur la sante menstruelle au Burkina Faso.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {['UNICEF Burkina', 'Plan International', 'ONG Femme & Developpement', 'Ministere de la Sante', 'USAID Burkina'].map((partner, index) => (
              <motion.div
                key={partner}
                style={{ padding: '20px 32px', borderRadius: '12px', background: 'var(--rose-pale)', border: '1px solid var(--rose-light)', minWidth: '160px' }}
                whileHover={{ scale: 1.05, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--noir)' }}>{partner}</span>
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
