import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadBlogPosts, saveBlogPosts } from '../data/contentStore';

export default function BlogDetail() {
  const { id } = useParams();
  const posts = loadBlogPosts();
  const post = posts.find((item) => String(item.id) === String(id) && item.status === 'Publié');

  if (!post) {
    return (
      <div style={{ paddingTop: '72px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--blanc)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>Article introuvable</h1>
          <Link to="/blog" className="btn-primary">Retour au blog</Link>
        </div>
      </div>
    );
  }

  const viewedKey = `palobde-blog-viewed-${post.id}`;
  const alreadyViewed = typeof window !== 'undefined' && window.sessionStorage.getItem(viewedKey) === '1';
  if (!alreadyViewed) {
    const nextPosts = posts.map((item) => (
      item.id === post.id ? { ...item, views: (item.views || 0) + 1 } : item
    ));
    saveBlogPosts(nextPosts);
    if (typeof window !== 'undefined') window.sessionStorage.setItem(viewedKey, '1');
  }

  return (
    <div style={{ paddingTop: '72px', background: 'var(--blanc)' }}>
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        <Link to="/blog" style={{ color: 'var(--vert)', fontSize: '13px', fontWeight: 600 }}>← Retour au blog</Link>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '16px', fontSize: '42px', lineHeight: 1.1 }}>
          {post.title}
        </motion.h1>
        <p style={{ color: 'var(--gris)', fontSize: '13px', marginTop: '8px' }}>
          {String(post.date).replaceAll('-', '/')} · {post.readTime || '4 min'} · {post.views || 0} vues
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', borderRadius: '18px', marginTop: '20px' }}
          />
        )}
        <article style={{ marginTop: '22px', whiteSpace: 'pre-line', fontSize: '16px', lineHeight: 1.9, color: 'var(--noir)' }}>
          {post.content}
        </article>
      </section>
    </div>
  );
}

