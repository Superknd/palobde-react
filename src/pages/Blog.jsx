// filepath: palobde-react/src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  { 
    id: 1, 
    title: 'L\'hygiène menstruelle au Burkina Faso : un défi quotidien', 
    excerpt: 'Découvrez les défis auxquels font face les femmes et jeunes filles au Burkina Faso et les solutions que nous apportons.',
    category: 'Santé',
    date: '18 Avril 2026',
    readTime: '5 min',
    image: null,
    color: 'rose'
  },
  { 
    id: 2, 
    title: 'Guide d\'entretien des serviettes lavables en Faso Danfani', 
    excerpt: 'Apprenez à entretenir vos serviettes lavables pour une durée de vie optimale de 15 ans.',
    category: 'Conseils',
    date: '15 Avril 2026',
    readTime: '3 min',
    image: null,
    color: 'vert'
  },
  { 
    id: 3, 
    title: 'L\'impact de Palobde sur la vie des jeunes filles scolaires', 
    excerpt: 'Témoignages et statistiques sur l\'impact de nos programmes de distribution dans les écoles.',
    category: 'Impact',
    date: '10 Avril 2026',
    readTime: '4 min',
    image: null,
    color: 'terre'
  },
  { 
    id: 4, 
    title: 'Pourquoi choisir le Faso Danfani pour vos serviettes ?', 
    excerpt: 'Les avantages uniques du tissu traditionnel burkinabè : absorption, confort et durabilité.',
    category: 'Produit',
    date: '5 Avril 2026',
    readTime: '4 min',
    image: null,
    color: 'rose'
  },
  { 
    id: 5, 
    title: 'Règles douloureuses : comprendre et soulager les dysménorrhées', 
    excerpt: 'Conseils médicaux et naturels pour soulager les douleurs menstruelles.',
    category: 'Santé',
    date: '1 Avril 2026',
    readTime: '6 min',
    image: null,
    color: 'vert'
  },
  { 
    id: 6, 
    title: 'Le métier de tisseuse chez Palobde Afrique', 
    excerpt: 'Rencontre avec nos artisanes qui perpétuent le savoir-faire du Faso Danfani.',
    category: 'Artisanat',
    date: '28 Mars 2026',
    readTime: '5 min',
    image: null,
    color: 'terre'
  }
];

const categories = ['Tous', 'Santé', 'Conseils', 'Impact', 'Produit', 'Artisanat'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--rose-pale) 0%, var(--blanc) 50%, var(--vert-pale) 100%)',
        padding: '64px 48px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '48px', 
            fontWeight: 900, 
            color: 'var(--noir)',
            marginBottom: '16px'
          }}>
            Blog <span style={{ color: 'var(--rose)' }}>Éducatif</span>
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: 'var(--gris)', 
            maxWidth: '600px', 
            margin: '0 auto 32px',
            lineHeight: 1.7
          }}>
            Articles, conseils et témoignages sur la santé menstruelle, l'hygiène féminine et l'impact social de Palobde Afrique.
          </p>
          
          {/* Search Bar */}
          <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto',
            position: 'relative'
          }}>
            <input 
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 24px 16px 48px',
                borderRadius: '30px',
                border: '2px solid var(--rose-light)',
                fontSize: '14px',
                background: 'var(--blanc)',
                outline: 'none'
              }}
            />
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--gris)" 
              strokeWidth="2"
              style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <div style={{ 
        background: 'var(--blanc)', 
        padding: '24px 48px', 
        borderBottom: '1px solid var(--rose-light)',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {categories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              border: 'none',
              background: selectedCategory === cat ? 'var(--noir)' : 'var(--rose-pale)',
              color: selectedCategory === cat ? '#fff' : 'var(--noir)',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <section style={{ padding: '48px', background: 'var(--blanc)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px' 
          }}>
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  background: 'var(--blanc)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
              >
                {/* Image Area */}
                <div style={{ 
                  height: '200px', 
                  position: 'relative',
                  background: post.color === 'rose' ? 'linear-gradient(135deg, var(--rose-light), var(--rose))' : 
                             post.color === 'vert' ? 'linear-gradient(135deg, var(--vert-light), var(--vert))' : 
                             'linear-gradient(135deg, var(--terre-light), var(--terre))'
                }}>
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  )}
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--blanc)',
                    color: 'var(--noir)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    marginBottom: '12px',
                    fontSize: '12px',
                    color: 'var(--gris)'
                  }}>
                    <span>{post.date}</span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--rose-light)' }}></span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  <h2 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    marginBottom: '12px',
                    lineHeight: 1.4,
                    color: 'var(--noir)'
                  }}>
                    {post.title}
                  </h2>
                  <p style={{ 
                    fontSize: '13px', 
                    color: 'var(--gris)', 
                    lineHeight: 1.6,
                    marginBottom: '16px'
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: 'var(--rose)',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    Lire la suite
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--rose-light)" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p style={{ color: 'var(--gris)', fontSize: '16px' }}>Aucun article trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ 
        background: 'var(--noir)', 
        padding: '64px 48px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '32px', 
            fontWeight: 900, 
            color: '#fff',
            marginBottom: '16px'
          }}>
            Restez informé
          </h2>
          <p style={{ 
            fontSize: '14px', 
            color: 'rgba(255,255,255,0.6)', 
            maxWidth: '500px', 
            margin: '0 auto 32px'
          }}>
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            maxWidth: '450px', 
            margin: '0 auto' 
          }}>
            <input 
              type="email"
              placeholder="Votre email..."
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '14px'
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'var(--rose)',
                color: 'var(--noir)',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              S'inscrire
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}