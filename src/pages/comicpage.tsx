import { useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer';
import '../style/App.css';

type Author = {
  name: string;
  image: string;
};

type Comic = {
  id: string;
  name: string;
  url: string;
  synopsis: string;
  authors: Author[];
};

type Collection = {
  name: string;
  image: string;
};

const comicsData: Comic[] = [
  {
    id: 'mvl1',
    name: 'Miles Morales: Spider-Man Annual #1',
    url: '/quadrinhos/Fenix.jpg',
    synopsis: 'Sinopse do quadrinho.',
    authors: [
      { name: 'Stan Lee', image: 'https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125' },
      { name: 'Jack Kirby', image: 'https://i.imgur.com/tQvugrJ.jpeg' }
    ]
  },
  {
    id: 'mvl2',
    name: 'Phoenix #2',
    url: '/quadrinhos/Miles Morales.jpg',
    synopsis: 'Sinopse do quadrinho.',
    authors: [
      { name: 'Steve Ditko', image: 'https://festivalofwritingandideas.com/wp-content/uploads/2022/04/Martin-Goodman.jpg' },
      { name: 'Stan Lee', image: 'https://i.imgur.com/tQvugrJ.jpeg' }
    ]
  }
];

const collections: Collection[] = [
  { name: 'Spider-Man Collection', image: '/quadrinhos/Fenix.jpg' },
  { name: 'X-Men Collection', image: '/quadrinhos/Miles Morales.jpg' },
  { name: 'The Incredible Hulk', image: '/quadrinhos/Hulk.jpg' },
  { name: 'Spider-Man Collection', image: '/quadrinhos/Fenix.jpg' },
  { name: 'The Incredible Hulk', image: '/quadrinhos/Hulk.jpg' },
];

export default function ComicPage() {
  const { id } = useParams<{ id: string }>();
  const comic = comicsData.find(c => c.id === id);

  if (!comic) {
    return <div>Página não encontrada</div>;
  }

  return (
    <div className="background">
      <Header />
      <div className="blur-layer"></div>
      <div className="content-layer">
        <div className="main-content">
          {/* Título do quadrinho */}
          <div className="comic-title">
            <h1>{comic.name}</h1>
          </div>

          
          <div className="layout-container">
            {/* Imagem do quadrinho */}
            <div className="comic-image">
              <img
                src={comic.url}
                alt={comic.name}
                className="issue-cover"
              />
            </div>
            
            {/* Box de informações e autores */}
            <div className="info-author-container">
              {/* Box de informações */}
              <div className="info-box">
                <h3>Informações</h3>
                <p><strong>Data de Lançamento:</strong> 2023</p>
                <p><strong>Status:</strong> Em andamento</p>
                <h3>Sinopse</h3>
                <p>{comic.synopsis}</p>
              </div>

              {/* Box de autores */}
              <div className="authors-box">
                <h3>Autores</h3>
                <div className="authors-container">
                  {comic.authors.map(author => (
                    <div className="author" key={author.name}>
                      <img src={author.image} alt={author.name} />
                      <p>{author.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box de coleções com scroll */}
            <div className="collections-box">
              <div className="collections-title">
              <h3>Coleções</h3>
              </div>
              <div className="collections-scroll">
                {collections.map(collection => (
                  <div className="collection-item" key={collection.name}>
                    <img src={collection.image} alt={collection.name} />
                    <p>{collection.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
