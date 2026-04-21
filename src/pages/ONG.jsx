// filepath: palobde-react/src/pages/ONG.jsx
import { motion } from 'framer-motion';

export default function ONG() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--noir) 0%, #2C1A3A 100%)', padding: '80px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', opacity: 0.3 }} />
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '46px', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
              Partenaires pour <em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>l'impact</em>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '28px' }}>
              Vous êtes une ONG, une institution ou une entreprise ? Commandez en gros pour vos programmes d'hygiène menstruelle et recevez des rapports d'impact détaillés.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, color: 'var(--rose)', display: 'block' }}>50+</span>
                <small style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Partenaires</small>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, color: 'var(--rose)', display: 'block' }}>25K+</span>
                <small style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Kits livrés</small>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, color: 'var(--rose)', display: 'block' }}>12</span>
                <small style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Pays</small>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            style={{ background: 'var(--blanc)', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Demande de devis B2B</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Nom</label>
                <input type="text" placeholder="Votre nom" style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Organisation</label>
                <input type="text" placeholder="Nom de l'ONG/Entreprise" style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
              <input type="email" placeholder="contact@organisation.bf" style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Type d'organisation</label>
                <select style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none' }}>
                  <option>ONG Internationale</option>
                  <option>ONG Locale</option>
                  <option>Entreprise</option>
                  <option>Institution publique</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Nombre de kits</label>
                <input type="number" placeholder="Ex: 500" style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
              <textarea placeholder="Décrivez votre projet et vos besoins spécifiques..." rows={3} style={{ padding: '12px 16px', border: '1.5px solid var(--rose-light)', borderRadius: '10px', fontSize: '14px', fontFamily: "'DM Sans', sans-serif', sans-serif", color: 'var(--noir)', background: 'var(--blanc)', outline: 'none', resize: 'vertical', minHeight: '80px' }} />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', background: 'var(--rose)', border: 'none', color: 'var(--noir)', padding: '16px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}
            >
              Envoyer ma demande
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '64px 48px', background: 'var(--blanc)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ textAlign: 'center' }}>Pourquoi Partner</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900 }}>Des avantages exclusifs</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '📊', title: 'Rapports d\'impact', desc: 'Recevez des rapports détaillés sur l\'utilisation et les bénéfices de vos programmes.' },
              { icon: '💰', title: 'Tarifs préférentiels', desc: 'Des remises attractives pour les commandes en gros à partir de 50 kits.' },
              { icon: '🚚', title: 'Livraison gratuite', desc: 'Livraison offerte pour toute commande de plus de 200 kits au Burkina.' },
              { icon: '🤝', title: 'Suivi personnalisé', desc: 'Un chargé de compte dédié pour vous accompagner dans votre projet.' },
              { icon: '🌍', title: 'Impact local', desc: 'Chaque kit acheté soutient l\'emploi des femmes artisanes burkinabè.' },
              { icon: '📦', title: 'Packaging neutre', desc: 'Possibilité de personnaliser l\'emballage aux couleurs de votre organisation.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                style={{ background: 'var(--blanc)', borderRadius: '20px', padding: '32px', border: '1px solid var(--rose-light)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gris)', lineHeight: 1.6 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section style={{ background: 'var(--noir)', padding: '64px 48px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ color: 'var(--rose)' }}>Transparence</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, color: '#fff', marginBottom: '40px' }}>Rapports d'impact</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '📄', title: 'Rapport 2024', desc: 'Bilan annuel des activités et impact social' },
              { icon: '📄', title: 'Rapport 2023', desc: 'Analyse des programmes de distribution' },
              { icon: '📄', title: 'Étude d\'impact', desc: 'Étude indépendante sur l\'éducation menstruelle' }
            ].map((report, i) => (
              <motion.div 
                key={i}
                style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{report.icon}</div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>{report.title}</h4>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{report.desc}</p>
                <div style={{ fontSize: '11px', color: 'var(--rose)', fontWeight: 700, marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>Télécharger →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}