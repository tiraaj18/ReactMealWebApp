import { useGlobalContext } from "../context";

const Meals = () => {
  const context = useGlobalContext();
  return <h1>{context}, this is the Meals component</h1>;
};

export default Meals;
