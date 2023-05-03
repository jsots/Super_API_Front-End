const Sort = (props) => {

  const handleSort = (event) => {
      props.handleSort(event.target.value)
  }

  return (
      <form className="sort-container" onSubmit={props.handleSubmit}>
          <label htmlFor="sort">SORT BY:</label>
          <select className="sort" onChange={handleSort}>
              <option value="">Sort by</option>
              <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
              <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          </select>
      </form>
  )
}

export default Sort;