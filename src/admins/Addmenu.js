import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";

const Addmenu = () => {
  const [adddata, setAdddata] = useState(false);

  function addButton(e) {
    e.preventDefault();
    setAdddata(true);
  }

  return (
    <div>
      {adddata ? (
        <div>
          <AddForm />
        </div>
      ) : (
        <div className="" style={{ textAlign: "center", marginTop: 20 }}>
          <div className="" style={{ height: 100, widght: 100 }}>
            <Link to="/">
              <button
                onClick={addButton}
                style={{ height: 100, width: 100 }}
                type="button"
                className="btn btn-success btn-lg rounded-circle"
              >
                + Add
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addmenu;
