import Jumbotron from "~/component/jumbotron/jumbotron";
import FeatureBar from "~/component/feature_bar/feature_bar";
import Jumbotron2 from "~/component/jumbotron2/jumbotron2";
import Footer from "~/component/footer/footer";

export default function Home() {
  return (
    <>
      <Jumbotron/>
      <FeatureBar/>
      <Jumbotron2/>
      <Footer/>
    </>
  );
}
