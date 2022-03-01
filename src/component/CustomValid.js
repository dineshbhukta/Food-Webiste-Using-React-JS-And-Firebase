import { useState } from "react";

function Formval() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobile: "",
    message: "",
  });
  const { username, email, mobile, message } = formValues;

  const [error, setError] = useState(false);

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !mobile) {
      setError(true);
      return false;
    }
    // for firebae conection
    const res = await fetch(
      "https://foodwebsiteform-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      }
    );
    setFormValues({ username: "", email: "",mobile:"",message:"" });
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">Contact-us</h3>
        </div>
      </div>
      <div className="row py-5 ">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow p-3 mb-5 bg-light rounded ">
            <div className="card-body ">
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
              <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                <div className="form-group mt-2  ">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={onChangeText}
                  />
                  {error && !username && (
                    <span className="text-danger ms-2">
                      please Enter The user Name...
                    </span>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={onChangeText}
                  />
                  {error && !email && (
                    <span className="text-danger ms-2">
                      please Enter your Email...
                    </span>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    className="form-control"
                    placeholder="Enter Your Mobile No"
                    value={mobile}
                    onChange={onChangeText}
                    value={mobile}
                    onChange={onChangeText}
                  />
                  {error && !mobile && (
                    <span className="text-danger ms-2">
                      please Enter your Mobile No...
                    </span>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Enter your Message..."
                    className="form-control"
                    value={message}
                    onChange={onChangeText}
                  ></textarea>
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-outline-info w-50 mb-4">
                    Contact us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formval;
