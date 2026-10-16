import { ArrowUpRight } from 'lucide-react';

export default function MovieCard({ movie, onSelect }) {
  return (
    <button className="movie-card" type="button" onClick={() => onSelect(movie)} aria-label={`Ver detalhes de ${movie.title}`}>
      <img src={movie.image} alt={`Pôster de ${movie.title}`} loading="lazy" />
      <span className="movie-card-shade" />
      <span className="movie-card-info">
        <span className="movie-category">{movie.category}</span>
        <span className="movie-title">{movie.title}</span>
      </span>
      <span className="movie-card-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
    </button>
  );
}
