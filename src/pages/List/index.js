import './style.css'
import useCustom from './hooks'
import cx from 'classnames'
import { capitalize } from 'utils/string'

const List = () => {
  const { data, handler } = useCustom()
  return (
    <>
      <nav className="navbar navbar-light bg-white pt-5">
        <button type="button" className="btn" onClick={() => {}}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button type="button" className="btn" onClick={() => {}}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div className="container">
        <h2 className="font-weight-bold">Pokedex</h2>
        <div className="row">
          {data?.allPokemon?.map((data) => (
            <div className="col-6" key={data.id}>
              <div className="card mt-3 mb-3 rounded-corner">
                <div
                  className={cx(
                    'card-body',
                    'custom-card',
                    'rounded-corner',
                    'box-shadow',
                    {
                      'grass-color': data?.types[0].type.name === 'grass',
                      'fire-color': data?.types[0].type.name === 'fire',
                      'water-color': data?.types[0].type.name === 'water',
                      'electric-color': data?.types[0].type.name === 'electric',
                    }
                  )}
                  onClick={handler.handleDetail(data.id)}
                >
                  <div className="custom-card-wrapper">
                    <div className="text-wrapper">
                      <div className="font-weight-bold">
                        {capitalize(data.name)}
                      </div>
                      {data?.types?.map((typeData) => (
                        <div
                          key={typeData.slot}
                          className={cx('type-rounded', {
                            'grass-light-color':
                              data?.types[0].type.name === 'grass',
                            'fire-light-color':
                              data?.types[0].type.name === 'fire',
                            'water-light-color':
                              data?.types[0].type.name === 'water',
                            'electric-light-color':
                              data?.types[0].type.name === 'electric',
                          })}
                        >
                          {capitalize(typeData.type.name)}
                        </div>
                      ))}
                    </div>
                    <img
                      src={data?.sprites?.front_default}
                      alt={data.name}
                      className="sprite"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default List
