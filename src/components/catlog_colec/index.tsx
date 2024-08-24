import CatlogComic from "../catlog_comic";


export default function CatlogCollection() {

  const ListaQuad = [
    {id:'dc1',name:'Batman Vol. 2: The Bat-Man of Gotham TP',url:'/quadrinhos/Batman.jpg'},
    {id:'dc2',name:'Batman / Superman: Worlds Finest #30',url:'/quadrinhos/bbb.jpg'},
    {id:'mvl1',name:'Phoenix #2',url:'/quadrinhos/Fenix.jpg'},
    {id:'mvl2',name:'Miles Morales: Spider-Man Annual #1',url:'/quadrinhos/Miles Morales.jpg'},
    {id:'mvl3',name:'The Incredible Hulk Epic Collection: Ground Zero TP',url:'/quadrinhos/Hulk.jpg'}
  ]

  return (
    <div className="slider_colecao">
      <CatlogComic quad={ListaQuad[0]}/>
      <CatlogComic quad={ListaQuad[1]}/>
      <CatlogComic quad={ListaQuad[2]}/>
      <CatlogComic quad={ListaQuad[3]}/>
      <CatlogComic quad={ListaQuad[4]}/>
    </div>
  );
}
