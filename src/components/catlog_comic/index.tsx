import { Link } from "react-router-dom";


type PropQuad = {
  quad?:{
    id?: string,
    name?: string,
    url?: string
  }
}


export default function CatlogComic(props:PropQuad) {



  return (
    <div className="slider_colecao">
      <Link to="./avengers">
        <div className="slider_item">
          <img
            src={props.quad?.url} /*futura prop*/
            height={150}
            alt="placeholder"
          />
          <div className="slider_item_content">{props.quad?.name}

          </div>
      </div>
      </Link>
    </div>
  );
}
