function App() {
  const SlotM=(props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;
    if(x===y && y===z){
      return(
        <div className="slot_inner">
         <h1>
          {x} {y} {z}
         </h1>
         <h1>This is Matching</h1>
         <hr/>
        </div>
      )
    }else{
      return(
      <div className="slot_inner">
         <h1>
          {" "}
          {x} {y} {z}{" "}
         </h1>
         <h1>This is not Matching</h1>
         <hr/>
        </div>
      )
    }
  };
  return (
    <div className="App">
      <h1 className="heading_style">Welcome to game 🎮</h1>
      <hr></hr>
    <SlotM x="📖" y="🌟" z="📖"/>
    <SlotM x="⭐" y="⭐" z="⭐"/>
    <SlotM x="🌙" y="🌙" z="🌙"/>
    <SlotM x="🍰" y="🌙" z="🌙"/>
    </div>
  );
}

export default App;
