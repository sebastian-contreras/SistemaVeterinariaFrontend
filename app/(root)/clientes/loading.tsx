function loading() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Clientes</h5>
        </div>
        {/* <!-- Page Heading --> */}
        <div className="row my-3">
          <div className="col-md-6">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-md-6 ms-auto"></div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div id="card-body">
          <div className=" shadow mb-4">
            <div className="table-responsive">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default loading;
