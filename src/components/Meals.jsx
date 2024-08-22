import { useGlobalContext } from "../context";

const Meals = () => {
  const {meals} = useGlobalContext();

  return (
    <>
      <section>
        {meals.map((singleMeal) => {
          console.log(singleMeal);
          return <h4>Single Meal</h4>
        })}
      </section>
    </>
  );
};

export default Meals;
