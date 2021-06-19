import CategoriesContextComponent from "./categories";
import DrinksContextComponent from "./drinks";

const GlobalStore = ({ children }) => {
  return (
    <CategoriesContextComponent>
      <DrinksContextComponent>{children}</DrinksContextComponent>
    </CategoriesContextComponent>
  );
};

export default GlobalStore;
