import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';
import SearchDropdown from './SearchDropdown';

const navLinkStyle = {
  fontSize: '13px',
  color: 'var(--gris)',
  textDecoration: 'none',
  fontWeight: '500'
};

export default function Header() {
  const { setIsOpen: setCartOpen, totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closePanels = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <CartDropdown />
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="container header-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 48px',
          }}
        >
          <Link
            to="/"
            className="logo"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            onClick={closePanels}
          >
            <motion.div
              className="logo-mark"
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--rose)',
                borderRadius: '50% 50% 50% 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '900',
                color: '#fff',
                fontSize: '18px',
              }}
              whileHover={{ rotate: -10 }}
            >
              P
            </motion.div>
            <div className="logo-text" style={{ lineHeight: '1.1' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: '700',
                  fontSize: '16px',
                  color: 'var(--noir)',
                }}
              >
                Palobde Afrique
              </span>
              <span
                style={{
                  fontSize: '10px',
                  color: 'var(--gris)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Sante Menstruelle
              </span>
            </div>
          </Link>

          <button
            type="button"
            className={`header-menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`header-nav ${menuOpen ? 'is-open' : ''}`}
            style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
          >
            <Link
              to="/"
              onClick={closePanels}
              style={{
                ...navLinkStyle,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Accueil
            </Link>
            <Link to="/boutique" onClick={closePanels} style={navLinkStyle}>
              Boutique
            </Link>
            <Link to="/about" onClick={closePanels} style={navLinkStyle}>
              A Propos
            </Link>
            <Link to="/blog" onClick={closePanels} style={navLinkStyle}>
              Blog
            </Link>
            <Link to="/ong" onClick={closePanels} style={navLinkStyle}>
              ONG & Partenaires
            </Link>
            <Link
              to="/don"
              className="cta"
              onClick={closePanels}
              style={{
                background: 'var(--rose)',
                color: 'var(--noir)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '12px',
                textDecoration: 'none',
              }}
            >
              Offrir un Kit
            </Link>
            <Link
              to="/admin"
              onClick={closePanels}
              style={{
                fontSize: '12px',
                color: 'var(--gris)',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid #ddd',
                padding: '6px 12px',
                borderRadius: '20px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Admin
            </Link>
          </nav>

          <div
            className="header-icons"
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              fontSize: '18px',
              position: 'relative',
            }}
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.span>
            <SearchDropdown isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <div
              onClick={() => setCartOpen(true)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', position: 'relative' }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </motion.div>
              {totalItems > 0 && (
                <sup
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'var(--rose)',
                    color: 'var(--noir)',
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    fontWeight: '700',
                  }}
                >
                  {totalItems}
                </sup>
              )}
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
