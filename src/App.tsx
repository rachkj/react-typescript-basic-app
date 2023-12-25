import ListGroup from "./assets/components/ListGroup";

function App() {
  let starters = [
    "Veg Clear Soup",
    "Chicken Nuggets",
    "Fish & Chips",
    "Nachos",
    "French Fries",
  ];
  let desserts = [
    "Tiramisu",
    "Tres leches",
    "Cheese Cake",
    "Oreo Milkshake",
    "Hot Chocolate",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={starters}
        heading="Choose a starter"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={desserts}
        heading="Choose a dessert"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
