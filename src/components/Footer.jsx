import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3L16 12l-6.4 3.7Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.6-8.4Zm-8.4 18.3h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.2 6.4 6.6 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.7 9.9Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3.2-2.2-4.1-4-.1-.3-.1-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4Z"
      />
    </svg>
  );
}

const socials = [
  {
    icon: 'facebook',
    color: '#1877F2',
    href: '#',
    label: 'Facebook',
  },
  {
    icon: 'instagram',
    color: '#E4405F',
    href: '#',
    label: 'Instagram',
  },
  {
    icon: 'youtube',
    color: '#FF0000',
    href: '#',
    label: 'YouTube',
  },
  {
    icon: 'whatsapp',
    color: '#25D366',
    href: 'https://wa.me/22670000000',
    label: 'WhatsApp',
  },
];

export default function Footer() {
  return (
    <motion.footer
      style={{ background: 'var(--noir)', color: '#fff', padding: '56px 48px 32px' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
        <div className="footer-brand">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--rose)', borderRadius: '50% 50% 50% 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: '900', color: '#fff', fontSize: '18px' }}>
              P
            </div>
            <div style={{ lineHeight: '1.1' }}>
              <span style={{ color: '#fff' }}>Palobde Afrique</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block' }}>
                Made in Burkina Faso
              </span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginTop: '12px', maxWidth: '260px' }}>
            Une entreprise sociale qui place la dignite des femmes burkinabe au coeur de chaque serviette tissee.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.08, background: social.color, color: '#fff' }}
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: social.color }}
              >
                {social.icon === 'facebook' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3.2h-3V8.8c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.1-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9v2.2H8V14h2.7v8h2.8Z" />
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4.25" />
                    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                  </svg>
                )}
                {social.icon === 'youtube' && <YouTubeIcon />}
                {social.icon === 'whatsapp' && <WhatsAppIcon />}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>
            Boutique
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Serviettes Jour', 'Serviettes Nuit', 'Kits Scolaires', 'Culottes Menstruelles'].map((item) => (
              <li key={item}>
                <Link to="/boutique" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>
            Informations
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'A Propos', to: '/about' },
              { label: 'Blog Educatif', to: '/blog' },
              { label: 'ONG & Partenaires', to: '/ong' },
              { label: 'Offrir un Kit', to: '/don' },
              { label: 'Admin', to: '/admin' },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '20px' }}>
            Contact
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Ouagadougou, BF
            </li>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +226 XX XX XX XX
            </li>
            <li style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              contact@palobde.bf
            </li>
            <li>
              <a
                href="https://wa.me/22670000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>© 2026 Palobde Afrique - Tous droits reserves</p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Entreprise sociale certifiee - Faso Danfani
        </p>
      </div>
    </motion.footer>
  );
}
