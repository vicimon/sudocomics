
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editorapage from './pages/editorapage';

const editoras = [{
  nome: "Marvel",
  logo:"https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png",
  bio: "A Marvel Entertainment, LLC, uma subsidiária integral da The Walt Disney Company, é uma das empresas de entretenimento baseadas em personagens mais proeminentes do mundo...",
  creator1:"https://i.imgur.com/tQvugrJ.jpeg",
  creator2:"https://festivalofwritingandideas.com/wp-content/uploads/2022/04/Martin-Goodman.jpg"
},{
  nome:"DC Comics",
  logo:"https://upload.wikimedia.org/wikipedia/en/4/4f/DC_Comics_logo.svg",
  bio:"A DC Comics, uma das principais editoras de quadrinhos do mundo, é conhecida por suas histórias icônicas e personagens como Superman, Batman e Mulher-Maravilha.",
  creator1:"https://link_para_autor_1.jpg",
  creator2:"https://link_para_autor_2.jpg",
}]

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/editorapage/marvel" element={<Editorapage logo={editoras[0].logo} bio={editoras[0].bio} creators={editoras[0].creator1} />} />
        <Route path="/editorapage/dc" element={<Editorapage logo={dcLogo} bio={dcBio} creators={dcCreators} />} />
      </Routes>
    </Router>
  );
};

export default App;
