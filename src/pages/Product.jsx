import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import images from '../data/images';

const gallery = [
  images.products.kitJour,
  images.products.kitNuit,
  images.products.kitScolaire,
  images.products.culotte,
];

export default function Product() {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ padding: '24px 48px', background: 'var(--blanc)', borderBottom: '1px solid var(--rose-light)' }}>
        <div className="container" style={{ fontSize: '12px', color: 'var(--gris)' }}>
          Accueil / Boutique / <span style={{ color: 'var(--noir)', fontWeight: 600 }}>Kit Journee - Rose Faso</span>
        </div>
      </div>

      <div style={{ padding: '40px 48px', background: 'var(--blanc)' }}>
        <div className="container product-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '64px' }}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ height: '440px', background: 'linear-gradient(135deg, var(--rose-light), var(--rose))', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--danfani)' }} />
              <img src={selectedImage} alt="Produit Palobde" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.18), rgba(26,26,26,0.02))' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {gallery.map((image, index) => (
                <motion.button
                  key={image}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedImage(image)}
                  style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', border: selectedImage === image ? '2px solid var(--rose)' : '1px solid var(--rose-light)', padding: 0, background: '#fff' }}
                >
                  <img src={image} alt={`Vue produit ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ padding: 0 }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--vert)', fontWeight: 700, marginBottom: '12px' }}>
              Serviettes Jour
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
              Kit Journee - Rose Faso
            </h1>
            <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginBottom: '16px' }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} style={{ color: 'var(--terre)', fontSize: '14px' }}>
                  ★
                </span>
              ))}
              <span style={{ fontSize: '12px', color: 'var(--gris)', marginLeft: '6px' }}>(24 avis)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900 }}>
                3 500 <sub style={{ fontSize: '16px', fontFamily: "'DM Sans', serif" }}>FCFA</sub>
              </span>
              <span style={{ background: 'var(--vert-pale)', color: 'var(--vert)', padding: '4px 12px', borderRadius: '10px', fontSize: '12px', fontWeight: 600 }}>
                Eco-responsable
              </span>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '24px' }}>
              Ce kit contient 3 serviettes hygieniques lavables en Faso Danfani. Chaque achat soutient l emploi des femmes artisanes locales tout en offrant une solution durable et confortable.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', display: 'block' }}>Couleur</span>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['var(--rose)', 'var(--vert)', 'var(--terre)', '#6B5B95'].map((color, index) => (
                  <div key={color} style={{ width: '36px', height: '36px', borderRadius: '50%', background: color, border: index === 0 ? '3px solid var(--noir)' : '3px solid transparent' }} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 600 }}>Quantite</span>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--rose-light)', borderRadius: '30px', overflow: 'hidden' }}>
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', fontSize: '18px' }}>
                  -
                </button>
                <span style={{ padding: '0 16px', fontWeight: 600, fontSize: '14px' }}>{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', fontSize: '18px' }}>
                  +
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  addToCart({
                    id: 1,
                    name: 'Kit Journee - Rose Faso',
                    price: 3500,
                    quantity,
                    image: selectedImage,
                  })
                }
                style={{ flex: 1, minWidth: '220px', background: 'var(--noir)', color: '#fff', border: 'none', height: '52px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                Ajouter au panier
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} style={{ background: 'transparent', color: 'var(--noir)', border: '2px solid var(--noir)', height: '52px', padding: '0 20px', borderRadius: '30px', fontSize: '15px', fontWeight: 700 }}>
                ♡
              </motion.button>
            </div>

            <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderTop: '1px solid var(--rose-light)', borderBottom: '1px solid var(--rose-light)', margin: '24px 0', flexWrap: 'wrap' }}>
              {[
                { icon: 'Bio', title: '100% Coton', desc: 'Faso Danfani local' },
                { icon: 'Durable', title: 'Lavable 15 ans', desc: 'Economique' },
                { icon: 'Local', title: 'Artisanes locales', desc: 'Emploi et impact' },
              ].map((badge) => (
                <div key={badge.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '180px', flex: 1 }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--rose)', minWidth: '54px' }}>{badge.icon}</span>
                  <div>
                    <small style={{ fontSize: '10px', color: 'var(--gris)', display: 'block' }}>{badge.desc}</small>
                    <b style={{ fontSize: '12px' }}>{badge.title}</b>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--vert-pale)', borderRadius: '16px', padding: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '12px' }}>Guide d entretien</h4>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {[
                  { icon: 'Eau', text: 'Laver a 40 degres' },
                  { icon: 'Soleil', text: 'Sechage naturel' },
                  { icon: 'Sans machine', text: 'Pas de sechage machine' },
                ].map((step) => (
                  <div key={step.text} style={{ textAlign: 'center', flex: '1 1 120px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--vert)', marginBottom: '6px' }}>{step.icon}</div>
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
