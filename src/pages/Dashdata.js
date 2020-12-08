import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Dashdata = () => {
  const [item, setitem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setitem(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = item.filter((item) => id !== item.id);
      setitem(del);
    });
  };

  return (
    <>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((val, index) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
                <td>
                  <Button>
                    <DeleteIcon onClick={() => removeData(val.id)} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Dashdata;
