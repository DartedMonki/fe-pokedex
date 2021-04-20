import useCustom from './hooks'

const Detail = () => {
  const { handler } = useCustom()
  return (
    <>
      <nav className="navbar navbar-light grass-color pt-5">
        <button type="button" className="btn" onClick={handler.handleBack}>
          <i className="fas fa-arrow-left text-light"></i>
        </button>
        <button type="button" className="btn" onClick={() => {}}>
          <i class="far fa-heart text-light"></i>
        </button>
      </nav>
      <div className="container grass-color">
        <h2 className="font-weight-bold text-light">Bulbasaur</h2>
      </div>
    </>
  )
}

export default Detail
