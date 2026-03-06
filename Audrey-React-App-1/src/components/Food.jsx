function Food() {
    const food1 = "Cucumbers";
    const food2 = "Almonds";
    const food3 = "Brownies";
    
    
    return (
      <div>
        <h3 className="font-serif py-4">My Favorite Foods</h3>
        <ul style={{ color: "lightgreen" }}>
          <li>Apples</li>
          <li>{food1}</li>
          <li>{food2}</li>
          <li>{food3}</li>
          <li>Chicken</li>
      </ul>
      </div>
  );
}

export default Food;
