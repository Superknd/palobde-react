// filepath: palobde-react/src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      style={{ 
        background: 'var(--noir)', 
        color: '#fff', 
        padding: '56px 48px 32px' 
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
        <div className="footer-brand">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--rose)', borderRadius: '50% 50% 50% 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#fff', fontSize: '18px' }}>P</div>
            <div style={{ lineHeight: '1.1' }}>
              <span style={{ color: '#fff' }}>Palobde Afrique</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block' }}>Made in Burkina Faso</span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginTop: '12px', maxWidth: '260px' }}>Une entreprise sociale qui place la dignité des femmes burkinabè au cœur de chaque serviette tissée.</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {[
              { icon: 'facebook', color: '#1877F2' },
              { icon: 'instagram', color: '#E4405F' },
              { icon: 'youtube', color: '#FF0000' },
              { icon: 'whatsapp', color: '#25D366', link: 'https://wa.me/22670000000' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, background: 'var(--rose)' }}
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
              >
                {social.icon === 'facebook' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                {social.icon === 'instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>}
                {social.icon === 'youtube' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
                {social.icon === 'whatsapp' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.1-.473-.15-.673.15-.197.295-.806.964-.988 1.157-.175.193-.349.21-.646.075-.3-.135-1.255-.495-2.394-1.577-.885-.788-1.482-1.76-1.656-2.056-.174-.3-.02-.46.13-.61.15-.15.301-.39.451-.585.15-.2.225-.3.375-.5.15-.2.075-.375 0-.525-.075-.15-.672-1.62-.919-2.207-.248-.585-.496-.5-.672-.51-.174-.008-.372-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.044 1.02-1.044 2.479 0 1.462 1.066 2.875 1.214 3.074.15.2 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.174-1.413-.075-.125-.273-.2-.572-.35m-5.421 7.403h-.004a5.026 5.026 0 0 1-2.782-.695 4.985 4.985 0 0 1-1.863-1.894 5.02 5.02 0 0 1-.693-2.775c0-2.763 2.25-5.14 5.03-5.14a4.996 4.996 0 0 1 3.59 1.406l1.864 1.864a4.95 4.95 0 0 0-3.59-1.406 5.028 5.028 0 0 0-3.59 5.14c0 2.14 1.28 4.007 3.09 5.14a4.996 4.996 0 0 0 2.78.695 5.02 5.02 0 0 0 1.87-3.72 5.02 5.02 0 0 0-.69-2.775z"/></svg>}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>Boutique</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Serviettes Jour', 'Serviettes Nuit', 'Kits Scolaires', 'Culottes Menstruelles'].map((item, i) => (
              <li key={i}><Link to="/boutique" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>Informations</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[{ label: 'À Propos', to: '/about' }, { label: 'Blog Éducatif', to: '/blog' }, { label: 'ONG & Partenaires', to: '/ong' }, { label: 'Offrir un Kit', to: '/don' }, { label: 'Admin', to: '/admin' }].map((item, i) => (
              <li key={i}><Link to={item.to} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Ouagadougou, BF
            </li>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +226 XX XX XX XX
            </li>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              contact@palobde.bf
            </li>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href="https://wa.me/22670000000" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a5.026 5.026 0 0 1-2.782-.695 4.985 4.985 0 0 1-1.863-1.894 5.02 5.02 0 0 1-.693-2.775c0-2.763 2.25-5.14 5.03-5.14a4.996 4.996 0 0 1 3.59 1.406l1.864 1.864a4.95 4.95 0 0 0-3.59-1.406 5.028 5.028 0 0 0-3.59 5.14c0 2.14 1.28 4.007 3.09 5.14a4.996 4.996 0 0 0 2.78.695 5.02 5.02 0 0 0 1.87-3.72 5.02 5.02 0 0 0-.69-2.775z"/></svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>© 2025 Palobde Afrique — Tous droits réservés</p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Entreprise sociale certifiée · Faso Danfani
        </p>
      </div>
    </motion.footer>
  );
}