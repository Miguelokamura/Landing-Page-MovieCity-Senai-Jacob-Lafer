import { X } from 'lucide-react';

export default function MovieDialog({ movie, loginOpen, onClose }) {
  if (loginOpen) {
    return (
      <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
        <section className="dialog-panel login-panel" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <button className="dialog-close" type="button" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
          <span className="dialog-kicker">BEM-VINDO À MOVIECITY</span>
          <h2 id="dialog-title">Entre para sua sessão.</h2>
          <p>Esta área estará disponível em breve. Enquanto isso, escolha um filme e aproveite a seleção.</p>
          <a className="dialog-action" href="#filmes" onClick={onClose}>Explorar filmes <span>↗</span></a>
        </section>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="dialog-panel movie-panel" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        <img className="dialog-poster" src={movie.image} alt={`Pôster de ${movie.title}`} />
        <div className="dialog-copy">
          <span className="dialog-kicker">{movie.category}</span>
          <h2 id="dialog-title">{movie.title}</h2>
          <p>{movie.description}</p>
          <a className="dialog-action" href="#filmes" onClick={onClose}>Voltar aos filmes <span>↗</span></a>
        </div>
      </section>
    </div>
  );
}
