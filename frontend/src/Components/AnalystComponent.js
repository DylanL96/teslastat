import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {API_KEY} from '../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useNavigate} from 'react-router-dom';

const AnalystComponent = () => {
  let navigate = useNavigate();
  const [data, setData] = useState();
  const [delPost, setDelPost] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [stockPrice, setStockPrice] = useState('');

  const getAnalystInformation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/getAll");
      setData(response.data);
    }catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalystInformation();
    // eslint-disable-next-line
  }, []);


  const getStockPrice = async () => {
    try{
      const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=${API_KEY}`);
      setStockPrice(response.data.c)
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    getStockPrice();
  }, [])

  const deleteHandler = id => {
    axios.delete(`http://localhost:8080/api/v1/delete/${id}`)
      .then(result => {
        setDelPost(delPost.filter(element => element._id !==id));
        console.log('Deleted!')
      })
      .catch(error => {
        console.log(error)
      })
  };

  const editHandler = id => {
    navigate(`/api/v1/${id}`)
  }

  // const renderTable = () => {
  //   return data?.map((dat) => (  // data? checks to see if data exists
  //     <tr key={dat.id}>
  //       <td>{dat.firm}</td>
  //       <td>{dat.fullName}</td>
  //       <td>{dat.priceTarget}</td>
  //       <td>{dat.position}</td>
  //       <td><FontAwesomeIcon icon={faTwitter}/>{dat.twitterHandle}</td>
  //       <td>{(((dat.priceTarget - stockPrice) / stockPrice) * 100).toLocaleString()}</td>
  //       <td>{(dat.priceTarget * quantity).toLocaleString()}</td>
  //       <td id='trash-delete' onClick={()=>deleteHandler(dat.id)}><FontAwesomeIcon icon={faTrash}/></td>
  //       <td id='trash-delete' onClick={()=>editHandler(dat.id)}><FontAwesomeIcon icon={faTrash}/></td>
  //     </tr>
  //   ))
  // };

  // DUMMY DATA
  const renderTable = () => {
    return(
      <tr>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
        <td>hi</td>
      </tr>
    )
  }

  return (
    <>
    <div>
      <label>Enter current amount of shares: </label>
      <input type="number" placeholder='Enter amount' onChange={e => setQuantity(e.target.value)}/>
      Current Stock Price: {stockPrice}
    </div>
      <Table className="table" striped bordered hover size='sm'>
      <thead>
        <tr >
          <th>FIRM</th>
          <th>Analyst</th>
          <th>Price Target ($)</th>
          <th>Position</th>
          <th>Social Media</th>
          <th>Percent Upside %</th>
          <th>Potential Value ($)</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {renderTable()}
        </tbody>
        </Table>  
    </>
  
  )
}



export default AnalystComponent;