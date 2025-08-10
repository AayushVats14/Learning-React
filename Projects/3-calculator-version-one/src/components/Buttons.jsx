function Buttons({ btnContent, onBtnClick }) {
  return (
    <div>{btnContent.map((items) => (
      <button key={items} className="av-btn" onClick= {() => console.log(items)}>{items}
      </button>
    ))}
    </div>
  )
};

export default Buttons;