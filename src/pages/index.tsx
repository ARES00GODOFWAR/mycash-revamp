import Jumbotron from "~/component/jumbotron/jumbotron";
import FeatureBar from "~/component/feature_bar/feature_bar";
import Jumbotron2 from "~/component/jumbotron2/jumbotron2";
import Footer from "~/component/footer/footer";
import NavBar from "~/navbar/navbar";

export default function Home() {
  return (
    <>
    <NavBar isAuthenticated={true}/>
      <Jumbotron/>
      <FeatureBar/>
      <Jumbotron2/>
      <Footer/>
    </>
  );
}
