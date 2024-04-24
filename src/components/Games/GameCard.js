import React from 'react'

export default function GameCard({ gameItem , handleDeleteGameFn }) {
    // console.log(props)
    // const { gameItem , handleDeleteGameFn } = props;
    return (
        <div className="card h-100">
            <img src={gameItem.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  {/* {game.onSale && <span class="badge text-bg-success">On Sale</span>} */}
                  {gameItem.onSale ? (
                    <span class="badge text-bg-success">On Sale</span>
                  ) : (
                    <span class="badge text-bg-secondary">Original Price</span>
                  )}

                  <h5 className="card-title">{gameItem.title}</h5>
                  <p className="card-text">{gameItem.description}</p>
                  <p className="card-text">{gameItem.price} $</p>
                  <button className='btn btn-danger' onClick={() => handleDeleteGameFn(gameItem.id)}>Delete</button>
                </div>
        </div>
    )
}
