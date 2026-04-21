// filepath: palobde-react/src/pages/Don.jsx
import { motion } from 'framer-motion';

export default function Don() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(160deg, var(--rose-pale) 0%, var(--vert-pale) 100%)', padding: '64px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', opacity: 0.5 }} />
        
        <motion.div 
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '50px', fontWeight: 900, lineHeight: 1.05, marginBottom: '16px' }}>
            Offrez un kit de dignité à <em style={{ color: 'var(--rose)', fontStyle: 'normal', display: 'block' }}>une jeune fille</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--gris)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Au Burkina Faso, de nombreuses filles manquent l'école pendant leurs règles faute de protection hygiénique. Votre don change leur quotidien et leur avenir.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: '0 48px 64px', background: 'linear-gradient(160deg, var(--rose-pale) 0%, var(--vert-pale) 100%)' }}>
        
        {/* Form */}
        <motion.div 
          style={{ background: 'var(--blanc)', borderRadius: '28px', padding: '40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>Faire un don</h2>
          <p style={{ fontSize: '13px', color: 'var(--gris)', marginBottom: '28px' }}>Choisissez le montant de votre don</p>

          {/* Amount Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {[
              { price: '1 500', label: '1 kit', active: false },
              { price: '3 000', label: '2 kits', active: true },
              { price: '7 500', label: '5 kits', active: false }
            ].map((amount, i) => (
              <motion.button 
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ padding: '16px', borderRadius: '14px', border: amount.active ? '2px solid var(--rose)' : '2px solid var(--rose-light)', background: amount.active ? 'var(--rose)' : 'transparent', cursor: 'pointer', textAlign: 'center' }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, display: 'block' }}>{amount.price}</span>
                <span style={{ fontSize: '10px', color: amount.active ? 'var(--noir)' : 'var(--gris)', marginTop: '2px' }}>{amount.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Progress */}
          <div style={{ background: 'var(--rose-pale)', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
              <b style={{ fontWeight: 700 }}>Objectif du mois</b>
              <span>67%</span>
            </div>
            <div style={{ height: '10px', background: 'var(--rose-light)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--rose)', borderRadius: '10px', width: '67%' }} />
            </div>
            <p style={{ fontSize: '11px', color: 'var(--gris)', marginTop: '8px' }}>23 500 / 35 000 FCFA collectés ce mois</p>
          </div>

          {/* Payment Methods */}
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>Mode de paiement</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { logo: '📱', name: 'Orange Money' },
                { logo: '💳', name: 'Moov Money' }
              ].map((method, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  style={{ border: '2px solid var(--rose-light)', borderRadius: '12px', padding: '14px 12px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', borderColor: i === 0 ? 'var(--rose)' : 'var(--rose-light)', background: i === 0 ? 'var(--rose-pale)' : 'transparent' }}
                >
                  <span style={{ fontSize: '24px' }}>{method.logo}</span>
                  <div>
                    <small style={{ fontSize: '10px', color: 'var(--gris)' }}>Paiement</small>
                    <b style={{ fontSize: '13px', display: 'block' }}>{method.name}</b>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', background: 'var(--rose)', border: 'none', padding: '18px', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", color: 'var(--noir)', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            Confirmer le don
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Impact Story */}
          <motion.div 
            style={{ background: 'var(--blanc)', borderRadius: '24px', padding: '32px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>"</div>
            <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
              Depuis que j'ai reçu mon kit Palobde, je ne manque plus jamais mes cours. Je peux aller à l'école en toute confiance, même pendant mes règles.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--rose)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', flexShrink: 0 }}>A</div>
              <div>
                <b style={{ fontSize: '13px', display: 'block' }}>Aminata, 14 ans</b>
                <small style={{ fontSize: '11px', color: 'var(--gris)' }}>Élève à Kaya, Burkina Faso</small>
              </div>
            </div>
          </motion.div>

          {/* Kit Contents */}
          <motion.div 
            style={{ background: 'var(--vert-pale)', borderRadius: '20px', padding: '28px' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>Contenu du kit</h3>
            {[
              { icon: '🩹', name: '3 serviettes lavables', desc: 'Faso Danfani rose' },
              { icon: '👜', name: '1 sachet de transport', desc: 'Tissu imperméable' },
              { icon: '📖', name: '1 guide d\'utilisation', desc: 'Conseils d\'entretien' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div>
                  <b style={{ fontSize: '13px' }}>{item.name}</b>
                  <small style={{ fontSize: '11px', color: 'var(--gris)', display: 'block' }}>{item.desc}</small>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}