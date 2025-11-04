import { useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setData(response.data);
    } catch (e) {
      setError("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-6">

        <div className="text-center p-4 shadow bg-light rounded-4 border border-secondary-subtle">
          <h2 className="mb-4 fw-bold text-primary">Fetch Data Demo</h2>

          <button className="btn btn-primary px-4 py-2" onClick={fetchData}>
            Fetch Data
          </button>

          {loading && (
            <div className="d-flex justify-content-center mt-4">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-4" role="alert">
              {error}
            </div>
          )}

          {data && (
            <div className="card mt-4 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title text-success fw-semibold">
                  {data.title}
                </h4>
                <p className="card-text mt-2">{data.body}</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
