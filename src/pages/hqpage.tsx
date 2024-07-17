import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

export default function Hqpage() {
  return (
    <div>
      <Header></Header>
      <div className="page_content">
        <h1 className="content" style={{ textAlign: "center" }}>
          The Avengers
        </h1>
        <img
          src="https://2.bp.blogspot.com/pw/AP1GczO5VDL0Ek21ONk_gxRUQIbsc9glkLoUDkMQfLVPo7GQhUv0dREU2hWdJgpdNSxbYSsv8seIaO8fVS8bEDkOY4pK6X2dLW0ELVun-eMrAK8SMTKZDVo=s1600?rhlupa=MTc3LjI1LjQ5LjkwLjcvMTcvMjAyNCAzOjIwOjM2IFBN&rnvuka=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMjYuMC4wLjA="
          alt=""
          width={"20%"}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}
