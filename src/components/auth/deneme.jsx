import axios from 'axios';
import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { number } from 'yup';


function Deneme() {

  const [file, setFile] = useState()
  const [kilometer, setKilometer] = useState('')
  const [year, setYear] = useState()
  const [dailyprice, setDailyPrice] = useState()
  const [plate, setPlate] = useState('')
  const [modelId, setModelId] = useState()
  const [colorId, setColorId] = useState()
  const [bodyType, setBodyType] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [gearType, setGearType] = useState('')
  const [cylinderCount, setCylinderCount] = useState('')
  const [enginePower, setEnginPower] = useState('')
  const navigation = useNavigate()


  const addCarRequest = {
    kilometer: kilometer,
    year: year,
    dailyPrice: dailyprice,
    plate: plate,
    modelId: modelId,
    colorId: colorId,
    bodyType: bodyType,
    fuelType: fuelType,
    gearType: gearType,
    cylinderCount: cylinderCount,
    enginePower: enginePower,
   



  };

  const handleSelected = (event) => {

    setFile( event.target.files[0]);

   


  };
  



  const sendCarData = async (carData, file,e) => {
    e.preventDefault()
  

    let formData = new FormData();
    formData.append('addCarRequest', new Blob([JSON.stringify(carData)], {type: "application/json"}));
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/api/cars/add', formData, {
        headers: {
          'Content-Type': 'applications/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}}`
        }
      });

      if (response.status === 201) {
        console.log("Car data has been sent successfully");
      }
    } catch (error) {
      console.error("An error occurred while sending the car data", error);
    }
  }

 















  return (
    <React.Fragment>



      <form onSubmit={(e)=> sendCarData(addCarRequest, file,e)} className='w-100'>
        <h1 className='h3 text-center text-warning'>Register Page</h1>

        <div className="row  my-3">
          <label className='text-warning my-2' htmlFor="kilometer">Kilometre</label>
          <input type="text" className="form-control " name='kilometer' aria-describedby="emailHelp" onChange={(e) => setKilometer(parseInt(e.target.value))} placeholder="Enter Kilometre" />

        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="year">Year</label>
          <input type="text" className="form-control" name="year" onChange={(e) => setYear(parseInt(e.target.value))} placeholder="year" />
        </div>


        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="dailyprice">DailyPrice</label>
          <input type="text" className="form-control" name='dailyprice' aria-describedby="emailHelp" onChange={(e) => setDailyPrice(parseFloat(e.target.value))} placeholder="Enter Dailyprice" />

        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="plate">Plate</label>
          <input type="text" className="form-control" name='plate' onChange={(e) => setPlate(e.target.value)} placeholder="Plate" />
        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="modelId">Model Id</label>
          <input type="text" className="form-control" name='modelId' onChange={(e) => setModelId(parseInt(e.target.value))} placeholder="Model Id" />
        </div>

        <div className="row  my-3">
          <label className='text-warning my-2' htmlFor="colorId">Color Id</label>
          <input type="text" className="form-control " name='colorId' aria-describedby="emailHelp" onChange={(e) => setColorId(parseInt(e.target.value))} placeholder="Enter Color İd" />

        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="bodyType">Body Type</label>
          <input type="text" className="form-control" name="bodyType" onChange={(e) => setBodyType(e.target.value)} placeholder="Enter Body Type" />
        </div>


        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="fuelType">Fuel Type</label>
          <input type="text" className="form-control" name='fuelType' aria-describedby="emailHelp" onChange={(e) => setFuelType(e.target.value)} placeholder="Enter Fuel Type" />

        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="gearType">Gear Type</label>
          <input type="text" className="form-control" name='gearType' onChange={(e) => setGearType(e.target.value)} placeholder="Enter Gear Type" />
        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="cylinderCount">Cylinder Count</label>
          <input type="text" className="form-control" name='cylinderCount' onChange={(e) => setCylinderCount(e.target.value)} placeholder="Enter Cylinder Count" />
        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="enginePower">Engine Power</label>
          <input type="text" className="form-control" name='enginePower' onChange={(e) => setEnginPower(e.target.value)} placeholder="Enter Engine Power" />
        </div>
        <div className="row my-3">
          <label className='text-warning my-2' htmlFor="image">İmage</label>
          <input type="file" className="form-control" name='image' onChange={handleSelected} />
        </div>



        <div className='d-flex flex-column'>
          <button type="submit" className="btn btn-warning my-2 px-5 align-self-center">Submit</button>
        </div>
        <span id="alert" className='text-danger'></span>



      </form>







    </React.Fragment>
  )
}

export default Deneme;