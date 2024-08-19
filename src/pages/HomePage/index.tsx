/* eslint-disable react/react-in-jsx-scope */
import Card from "../../components/common/Card";
import { Header } from "../../components/modules/Header";

export function HomePage() {
  return (
    <div className="containerParent">
      <Header />
      <div className="body-page">
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
