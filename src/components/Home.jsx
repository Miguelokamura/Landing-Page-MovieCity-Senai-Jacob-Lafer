import Header from './Header.jsx';
import Main from './Main.jsx';

export default function Home({ onLogin, onSelectMovie }) {
  return (
    <div className="home-page">
      <Header onLogin={onLogin} />
      <Main onSelectMovie={onSelectMovie} />
      <footer className="site-footer" id="contato">
        <a className="footer-brand" href="#inicio">Movie<span>City</span></a>
        <p>Seu próximo filme favorito começa aqui.</p>
        <a href="mailto:contato@moviecity.com">Fale com a gente <span aria-hidden="true">↗</span></a>
        <small>© 2025 MovieCity</small>
      </footer>
    </div>
  );
}
