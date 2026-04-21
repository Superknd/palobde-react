// filepath: palobde-react/src/pages/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ background: 'var(--blanc)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }}>
        <motion.div 
          style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="section-label">Notre Histoire</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '44px', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
            L'histoire d'<em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>Emilie Palobde</em>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '24px' }}>
            En 2015, Emilie Palobde, jeune burkinabè, constate que des milliers de filles abandonnent l'école chaque année faute de protection hygiénique. Elle décide d'agir en créant Palobde Afrique.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--gris)', lineHeight: 1.8 }}>
            Aujourd'hui, l'entreprise emploie plus de 120 femmes artisanes et a distribué plus de 10 000 kits de dignité dans les zones rurales du Burkina Faso.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'linear-gradient(135deg, var(--terre-light), var(--terre))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', opacity: 0.4 }} />
          <div style={{ position: 'relative', zIndex: 1, width: '200px', height: '280px', background: 'rgba(255,255,255,0.3)', borderRadius: '100px', border: '2px dashed rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>
            Photo d'Emilie Palobde
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section style={{ background: 'var(--rose-pale)', padding: '64px 48px' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ textAlign: 'center' }}>Notre Mission</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900 }}>Trois piliers fondamentaux</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '40px' }}>
            {[
              { num: '01', title: 'Dignité', desc: 'Permettre à chaque femme et jeune fille d\'accéder à une protection hygiénique digne, peu importe sa situation financière.' },
              { num: '02', title: 'Emploi', desc: 'Créer des emplois décents pour les femmes burkinabè dans le secteur du textile traditionnel.' },
              { num: '03', title: 'Éducation', desc: 'Sensibiliser les communautés aux questions d\'hygiène menstruelle et briser les tabous.' }
            ].map((mission, i) => (
              <motion.div 
                key={i}
                style={{ background: 'var(--blanc)', borderRadius: '20px', padding: '32px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 900, color: 'var(--rose-light)', lineHeight: 1, marginBottom: '16px' }}>{mission.num}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>{mission.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gris)', lineHeight: 1.7 }}>{mission.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '64px 48px', background: 'var(--blanc)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ textAlign: 'center' }}>Notre Parcours</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900 }}>Les étapes clés</h2>
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '700px', margin: '40px auto 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'var(--rose-light)' }} />
            
            {[
              { year: '2015', title: 'Création de Palobde Afrique', desc: 'Emilie Palobde lance l\'entreprise avec 5 femmes tisserandes.' },
              { year: '2017', title: 'Premier partenariat ONG', desc: 'Signature du premier contrat avec une ONG internationale pour la distribution de 2 000 kits.' },
              { year: '2019', title: 'Expansion de l\'atelier', desc: 'Ouverture d\'un nouvel atelier à Ouagadougou et embauche de 50 nouvelles artisanes.' },
              { year: '2022', title: 'Certification Faso Danfani', desc: 'Obtention de la certification officielle pour le tissu traditionnel.' },
              { year: '2024', title: '10 000 kits distribués', desc: 'Atteinte du cap symbolique des 10 000 kits de dignité distribués.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                style={{ padding: '0 0 40px 32px', position: 'relative' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ position: 'absolute', left: '-6px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--rose)', border: '2px solid var(--blanc)', boxShadow: '0 0 0 3px var(--rose-light)' }} />
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--rose)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px' }}>{item.year}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--gris)', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Section */}
      <section style={{ padding: '64px 48px', background: 'var(--vert-pale)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ textAlign: 'center' }}>Notre Atelier</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900 }}>Du fil au produit fini</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', marginTop: '40px' }}>
            <motion.div 
              style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '20px', position: 'relative', gridRow: 'span 2', minHeight: '400px', background: 'linear-gradient(160deg, var(--terre-light), var(--terre))' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', opacity: 0.4 }} />
              <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.9)', padding: '8px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 600, color: 'var(--noir)' }}>Le tissage traditionnel</div>
            </motion.div>
            
            {[
              { bg: 'linear-gradient(160deg, var(--rose-light), var(--rose))', label: 'Sélection du coton' },
              { bg: 'linear-gradient(160deg, var(--vert-light), var(--vert))', label: 'La teinture naturelle' },
              { bg: 'linear-gradient(160deg, #D4B896, var(--terre))', label: 'Le contrôle qualité' }
            ].map((photo, i) => (
              <motion.div 
                key={i}
                style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '20px', position: 'relative', minHeight: '180px', background: photo.bg }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)', opacity: 0.4 }} />
                <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.9)', padding: '8px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 600, color: 'var(--noir)' }}>{photo.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--noir)', padding: '80px 48px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>
            Rejoignez l'<em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>aventure</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Que vous soyez particulier, entreprise ou institution, il y a toujours une manière de soutenir notre mission.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/boutique" className="btn-primary" style={{ background: 'var(--rose)', color: 'var(--noir)' }}>Acheter un kit</a>
            <a href="/ong" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Devenir partenaire</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}