import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";

export const TablaComponent = () => {
    const  [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
            console.log(data)
        });
    }, [setUser])
  return (
    <div>
      <h1>This a view of call to jsonplaceholder</h1>
      <Table className="table bg-ligth" striped bordered hover >
        <thead className="table-success">
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Website</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
};
