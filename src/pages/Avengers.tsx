import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";


export default function Avengers() {
  return (
    <div>
      <Header />
      <div className="background">
        <div className="blur-layer"></div>
        <div className="content-layer">
          <header className="header">
            <h1>AVENGERS</h1>
            <h2 className="issue-title">Marvel Avengers - 15</h2>
          </header>
          <div className="content">
            <div className="issue">
              <img
                src="https://2.bp.blogspot.com/pw/AP1GczO5VDL0Ek21ONk_gxRUQIbsc9glkLoUDkMQfLVPo7GQhUv0dREU2hWdJgpdNSxbYSsv8seIaO8fVS8bEDkOY4pK6X2dLW0ELVun-eMrAK8SMTKZDVo=s1600?rhlupa=MTc3LjI1LjQ5LjkwLjcvMTcvMjAyNCAzOjIwOjM2IFBN&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMjYuMC4wLjA="
                alt="Issue Cover"
                className="issue-cover"
              />
              <div className="info-container">
                <div className="info-box">
                  <h3>Data de lançamento:</h3>
                  <p>22/09/1500</p>
                  <h3>Status</h3>
                  <p>completo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="synopsis-box">
            <h3>Sinopse</h3>
            <p>
            ااولواپ گَژھِو گَرٕ، ژٕ تہٕ اوٗج، ییٚلہِ کورس مۄکلِ، بہٕ سوٗزِ تۄہہِ لُکھ گِنٛدنہٕ خٲطرٕاولواپ گَژھِو گَرٕ، ژٕ تہٕ اوٗج، ییٚلہِ کورس مۄکلِ، بہٕ سوٗزِ تۄہہِ لُکھ گِنٛدنہٕ خٲطرٕاولواپ گَژھِو گَرٕ، ژٕ تہٕ اوٗج، ییٚلہِ کورس مۄکلِ، بہٕ سوٗزِ تۄہہِ لُکھ گِنٛدنہٕ خٲطرٕاولواپ گَژھِو گَرٕ، ژٕ تہٕ اوٗج، ییٚلہِ کورس مۄکلِ، بہٕ سوٗزِ تۄہہِ لُکھ گِنٛدنہٕ خٲطرٕولواپ گَژھِو گَرٕ، ژٕ تہٕ اوٗج، ییٚلہِ کورس مۄکلِ، بہٕ سوٗزِ تۄہہِ لُکھ گِنٛدنہٕ خٲطرٕ
            </p>
          </div>
          <div className="authors-box">
            <h3>Autores</h3>
            <div className="authors-container">
              <div className="author">
                <img
                  src="https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125"
                  alt="Stan Lee"
                />
                <p>Stan Lee</p>
              </div>
              <div className="author">
                <img
                  src="https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125"
                  alt="Stan Log"
                />
                <p>Stan Log</p>
              </div>
              <div className="author">
                <img
                  src="https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125"
                  alt="Bruce Lee"
                />
                <p>Bruce Lee</p>
              </div>
              <div className="author">
                <img
                  src="https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125"
                  alt="Stan Lee"
                />
                <p>StanLey</p>
              </div>
              <div className="author">
                <img
                  src="https://lh3.googleusercontent.com/6l8QUMzzdZDPM2-tnHSLaGoLHOcTg_rUo-qBKUQmuK5T2Fpom9678C0yUfcv8frgefXwooTvA9KwwlP6YXkbqtO-B6HSWxGDFw=s1125"
                  alt="Stan Lee"
                />
                <p>Stan Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
