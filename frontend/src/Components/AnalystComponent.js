import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const AnalystComponent = () => {
  const [data, setData] = useState();

  const getAnalystInformation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/");
      setData(response.data);
    }catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalystInformation();
    // eslint-disable-next-line
  }, []);

  const renderTable = () => {
    return data?.map((dat) => (  // data? checks to see if data exists
      <tr key={dat.id}>
        <td>{dat.firm}</td>
        <td>{dat.fullName}</td>
        <td>{dat.priceTarget}</td>
        <td>{dat.position}</td>
        <td>{dat.twitterHandle}</td>
      </tr>
    ))
  }

  return (
        <Table className="table">
        <thead>
          <tr >
            <th>FIRM</th>
            <th>Analyst</th>
            <th>Price Target</th>
            <th>Position</th>
            <th>Twitter Handle</th>
          </tr>
        </thead>
        <tbody>
          {renderTable()}
         </tbody>
         </Table>    
  )
}



export default AnalystComponent;