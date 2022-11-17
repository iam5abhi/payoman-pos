import React from 'react'

const PrintPage = () => {
  return (
    <>
    <div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Button
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"></div>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="container">
  <div className="card " style={{background: '#cecece38'}}>
    <div className="card-header bg-white">
      Order Details 
    </div>
    <div className="card-body" style={{background: '#edededad'}}>
      <div className="table-responsive-sm">​
        <table className="table table-borderless bg-white shadow-sm rounded">
          <thead className>
            <tr className style={{background: 'white'}}>
              <th scope="col">Order Summary</th>
              <th scope="col" />
              <th scope="col" />
              <th scope="col" className="text-end">Running Since:-00:00</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order Type</td>
              <td className="text-end">xyz</td>
              <td className="text-start">Table Number</td>
              <td className="text-end">xyz</td>
            </tr>
            <tr>
              <td>Order Number</td>
              <td className="text-end">xyz</td>
              <td className="text-start">Waiter Name</td>
              <td className="text-end">xyz</td>
            </tr></tbody>
        </table>
        <table className="table table-borderless bg-white shadow-sm rounded">
          <thead>
            <tr className style={{background: 'white'}}>
              <th scope="col">Guest Details</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="Order Type">Guest Name</th>
              <th className="text-center" />
            </tr>
            <tr>
              <th className="Order Type">Guest Number</th>
              <th className="text-center" />
            </tr></tbody>
        </table>​
        <table className="table table-borderless bg-white shadow-sm rounded">
          <thead>
            <tr className style={{background: 'white'}}>
              <th scope="col">Items Details</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="Order Type">Item Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-end">Price</th>
            </tr>
            <tr>
              <td>XYZ</td>
              <td className="text-center">xyz</td>
              <td className="text-end">549548</td>
            </tr><tr className="border border-b" style={{background: 'white'}}>
              <th>Total</th>
              <td className="text-center" />
              <th className="text-end">Rs.100</th>
            </tr></tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
  </>
  )
}

export default PrintPage;