function ListItem({foodItem}) {
  return (
    <>
    {foodItem.map((item) => (
      <>
      <span>
      <li className="list-group-item" key={item}>{item}</li>
      </span>
      <button type="button" className="btn btn-info">Info</button>
      </>
    ))}
    </>
  )
}

export default ListItem;