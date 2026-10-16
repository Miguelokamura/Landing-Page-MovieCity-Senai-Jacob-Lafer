import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import MovieCard from './MovieCard.jsx';
import afterlifePoster from '../assets/afterlife.jpg';
import transformersPoster from '../assets/transformers.jpg';
import mowgliPoster from '../assets/mowgli.jpg';
import shiftPoster from '../assets/shift.png';
import squidGamePoster from '../assets/squidgame.webp';
import harryPotterPoster from '../assets/harrypotter.jpg';

const movies = [
  { title: 'Afterlife', category: 'Suspense', image: afterlifePoster, description: 'Após um acidente, Anna desperta em uma funerária. Entre a vida e a morte, ela tenta descobrir o que é real.' },
  { title: 'Transformers', category: 'Ação', image: transformersPoster, description: 'Uma antiga guerra entre robôs alienígenas chega à Terra e muda para sempre a vida de um jovem.' },
  { title: 'Mogli: O Menino Lobo', category: 'Aventura', image: mowgliPoster, description: 'Criado por lobos, Mogli parte em uma jornada pela selva para descobrir onde realmente pertence.' },
  { title: 'Dupla Jornada', category: 'Ação', image: shiftPoster, description: 'Um pai trabalhador leva uma vida comum na Califórnia — e esconde um emprego nada convencional.' },
  { title: 'Round 6', category: 'Suspense', image: squidGamePoster, description: 'Pessoas endividadas aceitam um convite misterioso para competir em jogos por um prêmio tentador.' },
  { title: 'Harry Potter e a Pedra Filosofal', category: 'Fantasia', image: harryPotterPoster, description: 'Em seu primeiro ano em Hogwarts, Harry descobre a magia, faz grandes amigos e encontra um mistério.' },
];

export default function Main({ onSelectMovie }) {
  const [category, setCategory] = useState('Todos');
  const [visibleMovies, setVisibleMovies] = useState(movies);
  const gridRef = useRef(null);

  useEffect(() => {
    const nextMovies = category === 'Todos' ? movies : movies.filter((movie) => movie.category === category);
    setVisibleMovies(nextMovies);
  }, [category]);

  function handleMore(event) {
    event.preventDefault();
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <main>
      <section className="home-feature" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> SEU PRÓXIMO FILME COMEÇA AQUI</span>
          <h1 id="hero-title">Seus Filmes<span>.</span></h1>
          <p>Aqui, você pode escolher o filme que deseja assistir.<br className="desktop-break" /> Caso queira escolher mais, clique no botão.</p>
          <a className="more-button" href="#filmes" onClick={handleMore}>Mais <ArrowRight size={17} /></a>
          <span className="hero-index">01 <i /> 06 — SUA PRÓXIMA SESSÃO</span>
        </div>
        <div className="featured-movies" id="filmes" ref={gridRef}>
          <div className="featured-tools" id="categorias">
            <span><i /> ESCOLHA UM FILME</span>
            <label className="category-select"><span className="sr-only">Categoria</span>
              <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filtrar filmes por categoria">
                <option>Todos</option><option>Ação</option><option>Aventura</option><option>Fantasia</option><option>Suspense</option>
              </select>
            </label>
          </div>
          <div className="movie-grid">
            {visibleMovies.map((movie) => <MovieCard movie={movie} onSelect={onSelectMovie} key={movie.title} />)}
          </div>
          {visibleMovies.length === 0 && <p className="empty-message">Não há filmes nessa categoria ainda.</p>}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div><span className="section-kicker">SOBRE A MOVIECITY</span><h2>Uma boa história<br />muda a noite.</h2></div>
        <p>Encontre o filme ideal para o seu momento. Explore a seleção MovieCity e deixe a próxima história surpreender você.</p>
        <a href="#filmes" aria-label="Voltar para a seleção de filmes">Descobrir filmes <ArrowRight size={16} /></a>
      </section>
    </main>
  );
}
