import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Filmes', href: '#filmes' },
  { label: 'Categoria', href: '#categorias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({ onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="inicio">
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="MovieCity, início">MovieCity</a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`main-navigation${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Navegação principal">
        {links.map((link) => <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>)}
      </nav>
      <button className="login-button" type="button" onClick={onLogin}>Login <span aria-hidden="true">↗</span></button>
    </header>
  );
}
