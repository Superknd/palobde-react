// filepath: palobde-react/src/pages/Admin.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fileToDataUrl, loadBlogPosts, loadProducts, saveBlogPosts, saveProducts } from '../data/contentStore';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'palobde2026';
const ADMIN_SESSION_KEY = 'palobde-admin-session';

const initialOrders = [
  { id: 'CMD-001', client: 'Aminata K.', email: 'aminata@email.bf', phone: '+226 70 12 34 56', address: 'Ouagadougou, Secteur 15', date: '2026-04-15', total: 7500, status: 'Livrée', items: [{ name: 'Kit Journée — Rose Faso', qty: 2, price: 3500 }] },
  { id: 'CMD-002', client: 'Mariam S.', email: 'mariam@email.bf', phone: '+226 76 23 45 67', address: 'Bobo-Dioulasso, Zone A', date: '2026-04-16', total: 4200, status: 'En cours', items: [{ name: 'Kit Scolaire — Terre', qty: 1, price: 4200 }] },
  { id: 'CMD-003', client: 'Fatou B.', email: 'fatou@email.bf', phone: '+226 66 34 56 78', address: 'Koudougou', date: '2026-04-17', total: 1800, status: 'En attente', items: [{ name: 'Serviette Nuit — Vert Nature', qty: 1, price: 1800 }] },
  { id: 'CMD-004', client: 'ONG Espoir', email: 'contact@ongespoir.bf', phone: '+226 50 11 22 33', address: 'Ouagadougou, Centre', date: '2026-04-18', total: 84000, status: 'Livrée', items: [{ name: 'Kit Scolaire — Terre', qty: 20, price: 4200 }] },
  { id: 'CMD-005', client: 'Aïcha M.', email: 'aicha@email.bf', phone: '+226 71 45 67 89', address: 'Fada N\'Gourma', date: '2026-04-19', total: 6800, status: 'En attente', items: [{ name: 'Kit Nuit Complete', qty: 1, price: 3200 }, { name: 'Sachet Lavable', qty: 2, price: 1500 }] }
];

const initialPartners = [
  { id: 1, name: 'ONG Espoir', type: 'ONG', contact: 'contact@ongespoir.bf', phone: '+226 50 11 22 33', address: 'Ouagadougou', status: 'Actif', description: 'Partenaire pour la distribution dans les écoles' },
  { id: 2, name: 'Association des Femmes', type: 'ONG', contact: 'asf@email.bf', phone: '+226 60 44 55 66', address: 'Bobo-Dioulasso', status: 'Actif', description: 'Association de femmes pour l\'autonomisation' },
  { id: 3, name: 'Centre de Santé', type: 'Santé', contact: 'sante@centre.bf', phone: '+226 70 77 88 99', address: 'Koudougou', status: 'Actif', description: 'Centre de santé partenaire pour les formations' },
  { id: 4, name: 'UNICEF Burkina', type: 'International', contact: 'unicef@bf', phone: '+226 25 30 12 34', address: 'Ouagadougou', status: 'En attente', description: 'Organisation internationale' }
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'open';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(() => loadProducts());
  const [orders, setOrders] = useState(initialOrders);
  const [blogPosts, setBlogPosts] = useState(() => loadBlogPosts());
  const [partners, setPartners] = useState(initialPartners);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [editingPartner, setEditingPartner] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [showAddPartnerForm, setShowAddPartnerForm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    saveProducts(products);
  }, [products]);

  useEffect(() => {
    saveBlogPosts(blogPosts);
  }, [blogPosts]);

  // Stats
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const pendingOrders = orders.filter(o => o.status === 'En attente').length;

  // Product handlers
  const handleDeleteProduct = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));
  };

  const handleSaveProduct = (product) => {
    if (product.id) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: Date.now(), active: true }]);
    }
    setEditingProduct(null);
    setShowAddForm(false);
  };

  // Order handlers
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // Blog handlers
  const handleDeletePost = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setBlogPosts(blogPosts.filter((p) => p.id !== id));
    }
  };

  const handleTogglePostStatus = (id) => {
    setBlogPosts(blogPosts.map((p) => (p.id === id ? { ...p, status: p.status === 'Publié' ? 'Brouillon' : 'Publié' } : p)));
  };

  const handleSavePost = (post) => {
    if (post.id) {
      setBlogPosts(blogPosts.map((p) => (p.id === post.id ? post : p)));
    } else {
      setBlogPosts([
        ...blogPosts,
        { ...post, id: Date.now(), views: 0, date: new Date().toISOString().split('T')[0], readTime: post.readTime || '4 min' },
      ]);
    }
    setEditingPost(null);
    setShowAddPostForm(false);
  };

  // Partner handlers
  const handleDeletePartner = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  const handleTogglePartnerStatus = (id) => {
    setPartners(partners.map(p => p.id === id ? { ...p, status: p.status === 'Actif' ? 'Inactif' : 'Actif' } : p));
  };

  const handleSavePartner = (partner) => {
    if (partner.id) {
      setPartners(partners.map(p => p.id === partner.id ? partner : p));
    } else {
      setPartners([...partners, { ...partner, id: Date.now(), status: 'Actif' }]);
    }
    setEditingPartner(null);
    setShowAddPartnerForm(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'open');
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
      return;
    }

    setAuthError('Mot de passe incorrect.');
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-page" style={{ paddingTop: '72px', minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%', maxWidth: '460px', background: '#fff', borderRadius: '24px', padding: '32px', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}
        >
          <div className="section-label">Acces Back-Office</div>
          <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Connexion admin</h1>
          <p style={{ fontSize: '14px', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '24px' }}>
            Entrez le mot de passe du back-office pour gerer les produits, commandes et contenus.
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gris)' }}>Mot de passe</label>
            <input
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder="Entrez le mot de passe"
              style={{ width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '14px', fontSize: '14px' }}
            />
            {authError && <p style={{ fontSize: '12px', color: '#c0392b' }}>{authError}</p>}
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
              Acceder au back-office
            </button>
            
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="admin-page" style={{ paddingTop: '72px', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header Admin */}
      <div className="admin-topbar" style={{ background: 'var(--noir)', color: '#fff', padding: '24px 48px' }}>
        <div className="container">
          <div className="admin-topbar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif" }}>Back-Office Palobde Afrique</h1>
              <p style={{ fontSize: '13px', opacity: 0.7 }}>Gestion du site e-commerce</p>
            </div>
            <div className="admin-stats" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>{totalOrders}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Commandes</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: pendingOrders > 0 ? 'var(--rose)' : 'inherit' }}>{pendingOrders}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>En attente</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>{totalRevenue.toLocaleString()}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Revenus (XOF)</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>{totalProducts}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Produits</div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                style={{ alignSelf: 'center', padding: '10px 16px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: 600 }}
              >
                Se deconnecter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-tabs-bar" style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '0 48px' }}>
        <div className="container admin-tabs" style={{ display: 'flex', gap: '32px' }}>
          {[
            { id: 'products', label: 'Produits', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
            { id: 'orders', label: 'Commandes', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
            { id: 'blog', label: 'Blog', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> },
            { id: 'partners', label: 'ONG & Partenaires', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
            { id: 'settings', label: 'Paramètres', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 0',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid var(--rose)' : '2px solid transparent',
                color: activeTab === tab.id ? 'var(--noir)' : 'var(--gris)',
                fontWeight: activeTab === tab.id ? '600' : '400',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container admin-content" style={{ padding: '32px 48px' }}>
        
        {/* PRODUITS */}
        {activeTab === 'products' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px' }}>Gestion des Produits</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                style={{
                  background: 'var(--rose)',
                  color: 'var(--noir)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Ajouter un produit
              </button>
            </div>

            {/* Add/Edit Form */}
            {(showAddForm || editingProduct) && (
              <ProductForm 
                product={editingProduct} 
                onSave={handleSaveProduct} 
                onCancel={() => { setEditingProduct(null); setShowAddForm(false); }}
              />
            )}

            {/* Products Table */}
            <div className="admin-table-wrap" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--rose-pale)' }}>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Produit</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Catégorie</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Prix</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Stock</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Statut</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '40px', height: '40px', background: 'var(--rose-pale)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            {product.image ? (
                              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                            )}
                          </div>
                          <div>
                            <div style={{ fontWeight: '500' }}>{product.name}</div>
                            <div style={{ fontSize: '11px', color: 'var(--gris)' }}>{product.description?.substring(0, 40)}...</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gris)' }}>{product.category}</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600' }}>{product.price.toLocaleString()} XOF</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <span style={{ 
                          padding: '4px 12px', 
                          borderRadius: '12px', 
                          fontSize: '12px',
                          background: product.stock > 20 ? 'var(--vert-pale)' : product.stock > 10 ? 'var(--terre-light)' : '#fee',
                          color: product.stock > 20 ? 'var(--vert)' : product.stock > 10 ? 'var(--terre)' : '#c00'
                        }}>
                          {product.stock} en stock
                        </span>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleToggleActive(product.id)}
                          style={{
                            padding: '4px 12px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            background: product.active ? 'var(--vert-pale)' : '#eee',
                            color: product.active ? 'var(--vert)' : 'var(--gris)'
                          }}
                        >
                          {product.active ? 'Actif' : 'Inactif'}
                        </button>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <button 
                          onClick={() => setEditingProduct(product)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '12px', color: 'var(--gris)' }}
                          title="Modifier"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c00' }}
                          title="Supprimer"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* COMMANDES */}
        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Gestion des Commandes</h2>
            
            {/* Order Stats */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#fff', padding: '16px 24px', borderRadius: '12px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#856404' }}>{orders.filter(o => o.status === 'En attente').length}</div>
                <div style={{ fontSize: '12px', color: 'var(--gris)' }}>En attente</div>
              </div>
              <div style={{ background: '#fff', padding: '16px 24px', borderRadius: '12px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--rose)' }}>{orders.filter(o => o.status === 'En cours').length}</div>
                <div style={{ fontSize: '12px', color: 'var(--gris)' }}>En cours</div>
              </div>
              <div style={{ background: '#fff', padding: '16px 24px', borderRadius: '12px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--vert)' }}>{orders.filter(o => o.status === 'Livrée').length}</div>
                <div style={{ fontSize: '12px', color: 'var(--gris)' }}>Livrées</div>
              </div>
            </div>

            <div className="admin-table-wrap" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--rose-pale)' }}>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>N° Commande</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Client</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Total</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Statut</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Date</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', fontWeight: '600', color: 'var(--rose)' }}>{order.id}</td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: '500' }}>{order.client}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gris)' }}>{order.email}</div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600' }}>{order.total.toLocaleString()} XOF</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            background: order.status === 'Livrée' ? 'var(--vert-pale)' : order.status === 'En cours' ? 'var(--rose-light)' : '#fff3cd',
                            color: order.status === 'Livrée' ? 'var(--vert)' : order.status === 'En cours' ? 'var(--rose)' : '#856404'
                          }}
                        >
                          <option value="En attente">En attente</option>
                          <option value="En cours">En cours</option>
                          <option value="Livrée">Livrée</option>
                        </select>
                      </td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gris)' }}>{order.date}</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <button 
                          onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--gris)',
                            padding: '4px'
                          }}
                          title="Voir les détails"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Order Details */}
              {selectedOrder && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ padding: '24px', background: '#fafafa', borderTop: '1px solid #eee' }}
                >
                  {(() => {
                    const order = orders.find(o => o.id === selectedOrder);
                    return order ? (
                      <div>
                        <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Détails de la commande {order.id}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13px' }}>
                          <div>
                            <strong>Client:</strong> {order.client}<br/>
                            <strong>Email:</strong> {order.email}<br/>
                            <strong>Téléphone:</strong> {order.phone}
                          </div>
                          <div>
                            <strong>Adresse:</strong> {order.address}<br/>
                            <strong>Date:</strong> {order.date}
                          </div>
                        </div>
                        <div style={{ marginTop: '16px' }}>
                          <strong>Articles commandés:</strong>
                          <ul style={{ marginTop: '8px' }}>
                            {order.items.map((item, idx) => (
                              <li key={idx} style={{ fontSize: '13px' }}>{item.name} x {item.qty} = {item.price.toLocaleString()} XOF</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* BLOG */}
        {activeTab === 'blog' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px' }}>Gestion du Blog</h2>
              <button 
                onClick={() => setShowAddPostForm(true)}
                style={{
                  background: 'var(--rose)',
                  color: 'var(--noir)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Nouvel article
              </button>
            </div>

            {/* Add/Edit Post Form */}
            {(showAddPostForm || editingPost) && (
              <BlogForm 
                post={editingPost} 
                onSave={handleSavePost} 
                onCancel={() => { setEditingPost(null); setShowAddPostForm(false); }}
              />
            )}

            <div className="admin-table-wrap" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--rose-pale)' }}>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Titre</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Vues</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Statut</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Date</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts.map(post => (
                    <tr key={post.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', background: 'var(--rose-pale)' }}>
                            {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                          </div>
                          <span style={{ fontWeight: '500' }}>{post.title}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: 'var(--gris)' }}>{post.views}</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleTogglePostStatus(post.id)}
                          style={{ 
                            padding: '4px 12px', 
                            borderRadius: '12px', 
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            background: post.status === 'Publié' ? 'var(--vert-pale)' : '#eee',
                            color: post.status === 'Publié' ? 'var(--vert)' : 'var(--gris)'
                          }}
                        >
                          {post.status}
                        </button>
                      </td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gris)' }}>{post.date}</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <button 
                          onClick={() => setEditingPost(post)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '12px', color: 'var(--gris)' }}
                          title="Modifier"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button 
                          onClick={() => handleDeletePost(post.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c00' }}
                          title="Supprimer"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* PARTENAIRES */}
        {activeTab === 'partners' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px' }}>Gestion des ONG & Partenaires</h2>
              <button 
                onClick={() => setShowAddPartnerForm(true)}
                style={{
                  background: 'var(--rose)',
                  color: 'var(--noir)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Nouveau partenaire
              </button>
            </div>

            {/* Add/Edit Partner Form */}
            {(showAddPartnerForm || editingPartner) && (
              <PartnerForm 
                partner={editingPartner} 
                onSave={handleSavePartner} 
                onCancel={() => { setEditingPartner(null); setShowAddPartnerForm(false); }}
              />
            )}

            <div className="admin-table-wrap" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--rose-pale)' }}>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Nom</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Type</th>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Contact</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Statut</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gris)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map(partner => (
                    <tr key={partner.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: '500' }}>{partner.name}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gris)' }}>{partner.description?.substring(0, 50)}...</div>
                      </td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--gris)' }}>
                        <span style={{ 
                          padding: '4px 12px', 
                          borderRadius: '12px', 
                          fontSize: '11px',
                          background: partner.type === 'International' ? 'var(--vert-pale)' : partner.type === 'ONG' ? 'var(--rose-light)' : '#e3f2fd',
                          color: partner.type === 'International' ? 'var(--vert)' : partner.type === 'ONG' ? 'var(--rose)' : '#1565c0'
                        }}>
                          {partner.type}
                        </span>
                      </td>
                      <td style={{ padding: '16px', fontSize: '13px' }}>
                        <div>{partner.email}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gris)' }}>{partner.phone}</div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleTogglePartnerStatus(partner.id)}
                          style={{ 
                            padding: '4px 12px', 
                            borderRadius: '12px', 
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            background: partner.status === 'Actif' ? 'var(--vert-pale)' : '#eee',
                            color: partner.status === 'Actif' ? 'var(--vert)' : 'var(--gris)'
                          }}
                        >
                          {partner.status}
                        </button>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <button 
                          onClick={() => setEditingPartner(partner)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '12px', color: 'var(--gris)' }}
                          title="Modifier"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button 
                          onClick={() => handleDeletePartner(partner.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c00' }}
                          title="Supprimer"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* PARAMÈTRES */}
        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Paramètres du Site</h2>
            <div className="admin-settings-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Informations de l'entreprise
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Nom de l'entreprise</label>
                    <input type="text" defaultValue="Palobde Afrique" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Email</label>
                    <input type="text" defaultValue="contact@palobde.bf" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Téléphone</label>
                    <input type="text" defaultValue="+226 XX XX XX XX" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  Moyens de paiement
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} /> Orange Money
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} /> Moov Money
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} /> Paiement à la livraison
                  </label>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  Zones de livraison
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Ouagadougou</label>
                    <input type="text" defaultValue="1500 XOF" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Bobo-Dioulasso</label>
                    <input type="text" defaultValue="2500 XOF" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '4px' }}>Autres villes</label>
                    <input type="text" defaultValue="3500 XOF" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Notifications WhatsApp
                </h3>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer', marginBottom: '12px' }}>
                  <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} /> Activer les notifications automatiques
                </label>
                <p style={{ fontSize: '12px', color: 'var(--gris)', marginTop: '8px' }}>Les clients reçoivent une confirmation par WhatsApp après leur commande.</p>
              </div>
            </div>
            <button 
              style={{ 
                marginTop: '24px',
                background: 'var(--rose)',
                color: 'var(--noir)',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '30px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Enregistrer les modifications
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Formulaire de produit
function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    category: 'Serviettes Jour',
    sub: '',
    price: 0,
    stock: 0,
    active: true,
    badge: '',
    color: 'rose',
    image: null,
    description: ''
  });

  const categories = ['Serviettes Jour', 'Serviettes Nuit', 'Kits Scolaires', 'Culottes', 'Accessoires'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
    >
      <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>{product ? 'Modifier le produit' : 'Ajouter un nouveau produit'}</h3>
      <div className="admin-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Nom du produit</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Catégorie</label>
          <select 
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Sous-titre</label>
          <input
            type="text"
            value={formData.sub || ''}
            onChange={(e) => setFormData({ ...formData, sub: e.target.value })}
            placeholder="ex: 3 serviettes jour · Faso Danfani"
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Prix (XOF)</label>
          <input 
            type="number" 
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Stock</label>
          <input 
            type="number" 
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Couleur</label>
          <select
            value={formData.color || 'rose'}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          >
            <option value="rose">Rose</option>
            <option value="vert">Vert</option>
            <option value="terre">Terre</option>
            <option value="mix">Mix</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Badge</label>
          <input
            type="text"
            value={formData.badge || ''}
            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
            placeholder="ex: Bestseller"
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Image du produit</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const image = await fileToDataUrl(file);
              setFormData((prev) => ({ ...prev, image }));
            }}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '13px' }}
          />
          {formData.image && (
            <img src={formData.image} alt="Aperçu produit" style={{ marginTop: '10px', width: '92px', height: '92px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #eee' }} />
          )}
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Description</label>
          <textarea 
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <button 
          onClick={() => onSave(formData)} 
          style={{ 
            background: 'var(--rose)', 
            color: 'var(--noir)', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '30px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Enregistrer
        </button>
        <button 
          onClick={onCancel} 
          style={{ padding: '14px 28px', borderRadius: '30px', border: '1px solid #ddd', background: 'transparent', cursor: 'pointer' }}
        >
          Annuler
        </button>
      </div>
    </motion.div>
  );
}

// Formulaire de blog
function BlogForm({ post, onSave, onCancel }) {
  const [formData, setFormData] = useState(post || {
    title: '',
    excerpt: '',
    category: 'Conseils',
    readTime: '4 min',
    content: '',
    status: 'Brouillon',
    image: null
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
    >
      <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>{post ? 'Modifier l\'article' : 'Nouvel article'}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Titre</label>
          <input 
            type="text" 
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Contenu</label>
          <textarea 
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={6}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Extrait</label>
          <textarea
            value={formData.excerpt || ''}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            rows={3}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Catégorie</label>
          <input
            type="text"
            value={formData.category || ''}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Temps de lecture</label>
          <input
            type="text"
            value={formData.readTime || ''}
            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            placeholder="ex: 5 min"
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Statut</label>
          <select 
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          >
            <option value="Brouillon">Brouillon</option>
            <option value="Publié">Publié</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Image de couverture</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const image = await fileToDataUrl(file);
              setFormData((prev) => ({ ...prev, image }));
            }}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '13px' }}
          />
          {formData.image && (
            <img src={formData.image} alt="Aperçu article" style={{ marginTop: '10px', width: '110px', height: '72px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #eee' }} />
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <button 
          onClick={() => onSave(formData)} 
          style={{ 
            background: 'var(--rose)', 
            color: 'var(--noir)', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '30px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Enregistrer
        </button>
        <button 
          onClick={onCancel} 
          style={{ padding: '14px 28px', borderRadius: '30px', border: '1px solid #ddd', background: 'transparent', cursor: 'pointer' }}
        >
          Annuler
        </button>
      </div>
    </motion.div>
  );
}

// Formulaire de partenaire
function PartnerForm({ partner, onSave, onCancel }) {
  const [formData, setFormData] = useState(partner || {
    name: '',
    type: 'ONG',
    contact: '',
    phone: '',
    address: '',
    description: ''
  });

  const types = ['ONG', 'Santé', 'International', 'Entreprise', 'École'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
    >
      <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>{partner ? 'Modifier le partenaire' : 'Nouveau partenaire'}</h3>
      <div className="admin-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Nom</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Type</label>
          <select 
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Email</label>
          <input 
            type="email" 
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Téléphone</label>
          <input 
            type="text" 
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Adresse</label>
          <input 
            type="text" 
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--gris)', display: 'block', marginBottom: '6px' }}>Description</label>
          <textarea 
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <button 
          onClick={() => onSave(formData)} 
          style={{ 
            background: 'var(--rose)', 
            color: 'var(--noir)', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '30px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Enregistrer
        </button>
        <button 
          onClick={onCancel} 
          style={{ padding: '14px 28px', borderRadius: '30px', border: '1px solid #ddd', background: 'transparent', cursor: 'pointer' }}
        >
          Annuler
        </button>
      </div>
    </motion.div>
  );
}
