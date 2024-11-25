import React from 'react'

const IndCard = ({images ,order, paymentid, price, user, id}) => {
  return (
    <>
      <div>
        <div>
            <h1>{order.profile}</h1>
        </div>
        <div>
            <h3>{order.classify}</h3>
            <h3>Year:{order.year}</h3>
        </div>
        <div>
            <h3>Tocken:{order.token ? <span>True</span>:<span>False</span>}</h3>
            <h3>Assistance:{order.assistance ? <span>True</span>:<span>False</span>}</h3>
        </div>
      </div>
    </>
  )
}

export default IndCard