function DessertsList(props) {

  const lowCaloriesDesserts = props.data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => {
      const dessertName = `${dessert.name} - ${dessert.calories}`;

      return (
        <li>{dessertName}</li>
      );
    });

  return (
    <ul>{lowCaloriesDesserts}</ul>);
}

export default DessertsList;