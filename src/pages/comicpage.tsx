import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

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
  /* MARVEL */
  {
    id: "mvl1",
    name: "Miles Morales: Spider-Man Annual #1",
    url: "/quadrinhos/Fenix.jpg",
    synopsis: "Sinopse do quadrinho.",
    authors: [
      {
        name: "Stan Lee",
        image:
          "https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125",
      },
      {
        name: "Jack Kirby",
        image:
          "https://a.scpr.org/i/477117649b9fdd21c8be3352bc7a6cec/91118-eight.jpg",
      },
    ],
  },
  {
    id: "mvl2",
    name: "Phoenix #2",
    url: "/quadrinhos/Miles Morales.jpg",
    synopsis: "Sinopse do quadrinho.",
    authors: [
      {
        name: "Steve Ditko",
        image:
          "https://festivalofwritingandideas.com/wp-content/uploads/2022/04/Martin-Goodman.jpg",
      },
      { name: "Stan Lee", image: "https://i.imgur.com/tQvugrJ.jpeg" },
    ],
  },
  {
    id: "mvl3",
    name: "The Incredible Hulk",
    url: "/quadrinhos/Hulk.jpg",
    synopsis: "Sinopse do quadrinho.",
    authors: [
      {
        name: "Steve Ditko",
        image:
          "https://festivalofwritingandideas.com/wp-content/uploads/2022/04/Martin-Goodman.jpg",
      },
      { name: "Stan Lee", image: "https://i.imgur.com/tQvugrJ.jpeg" },
    ],
  },
  /* DC COMICS */
  {
    id: "dc1",
    name: " Bat-Man of Gotham",
    url: "/quadrinhos/Batman.jpg",
    synopsis: "Sinopse do quadrinho.",
    authors: [
      {
        name: "Chip Zdarsky",
        image: "https://img.txalaparta.eus/Autores/3124-Chip-Zdarsky.JPG",
      },
      {
        name: "Mike Hawthorne",
        image:
          "https://graphzeppelin.com/c/69-category_default/mendonca-miguel.jpg",
      },
    ],
  },
  {
    id: "dc2",
    name: "Batman / Superman: Worlds Finest",
    url: "/quadrinhos/bbb.jpg",
    synopsis: "Sinopse do quadrinho.",
    authors: [
      {
        name: "Mark Waid",
        image:
          "https://en.wikipedia.org/wiki/Mark_Waid#/media/File:4.16.16MarkWaidByLuigiNovi2.jpg",
      },
      {
        name: "Dan Mora",
        image:
          "https://fanboyplanet.s3.amazonaws.com/wp-content/uploads/Dan-Mora-500x500.jpg",
      },
    ],
  },
];

const collections: Collection[] = [
  { name: "Spider-Man Collection", image: "/quadrinhos/Fenix.jpg" },
  { name: "X-Men Collection", image: "/quadrinhos/Miles Morales.jpg" },
  { name: "The Incredible Hulk", image: "/quadrinhos/Hulk.jpg" },
  /* mais quadrinhos */
  {
    name: "The Amazing Spider-Man",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/c0/646790ce7b07c/clean.jpg",
  },
  {
    name: "Batman: Year One",
    image:
      "https://image.tmdb.org/t/p/original/9e0Yftt4svEI268iogQQdMXvng6.jpg",
  },
  {
    name: "Thor: God of Thunder",
    image:
      "https://tavernadequadrinhos.com.br/wp-content/webp-express/webp-images/uploads/Thor%CB%90-Deus-do-Trovao-25.jpg.webp",
  },
  {
    name: "Wonder Woman: The Hiketeia",
    image:
      "https://ideacdn.net/shop/cd/03/myassets/products/142/91qja44bghl.jpg?revision=1697143329",
  },
  {
    name: "Deadpool: Dead Presidents",
    image:
      "https://cdn11.bigcommerce.com/s-9xdcxxuu0e/images/stencil/960w/products/23477/27322/9781804911389__43224.1711193180.jpg?c=1",
  },
  {
    name: "Green Lantern: Rebirth",
    image:
      "https://2.bp.blogspot.com/-aqFYj9GY28E/VxEIi8Kzp5I/AAAAAAAAA2o/KeyTZBfd8S4W9Gif8p-7EJ0PVa9pvOE5QCCo/s0-Ic42/RCO001.jpg",
  },
  {
    name: "The Flash: Rebirth",
    image: "https://cdn2.penguin.com.au/covers/original/9781401230012.jpg",
  },
  {
    name: "Captain America: The Winter Soldier",
    image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2931653.jpg",
  },
  {
    name: "Aquaman: Time and Tide",
    image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/601683.jpg",
  },
  {
    name: "X-Men: Days of Future Past",
    image:
      "https://www.excalibur-comics.fr/16956-large_default/x-men-days-of-future-past-must-have.jpg",
  },
];

export default function ComicPage() {
  const { id } = useParams<{ id: string }>();
  const comic = comicsData.find((c) => c.id === id);

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
              <img src={comic.url} alt={comic.name} className="issue-cover" />
            </div>

            {/* Box de informações e autores */}
            <div className="info-author-container">
              {/* Box de informações */}
              <div className="info-box">
                <h3>Informações</h3>
                <p>
                  <strong>Data de Lançamento:</strong> 2023
                </p>
                <p>
                  <strong>Status:</strong> Em andamento
                </p>
                <h3>Sinopse</h3>
                <p>{comic.synopsis}</p>
              </div>

              {/* Box de autores */}
              <div className="authors-box">
                <h3>Autores</h3>
                <div className="authors-container">
                  {comic.authors.map((author) => (
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
                {collections.map((collection) => (
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
