import { Banner } from "../components/Banner/Banner";
import { Catalog } from "../components/Catalog/Catalog";

export const MainPage = () => {
  return (
    <div className="container">
      <Banner />
      <Catalog />
    </div>
  );
};
