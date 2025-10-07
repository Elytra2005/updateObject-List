import React, {use, useState} from 'react'

export default function Button() {

   const currentDate = new Date();
   const [cars, setCars] = useState([]);
   const [year, setYear] = useState(currentDate.getFullYear());
   const [make, setCarMake] = useState("");
   const [model, setCarModel] = useState("");

   const addCar = () => {
       const newCar = {
               CarYear: year,
               CarMake: make,
               CarModel: model
            } 


       // updater funcction
       setCars(c => [...c, newCar]);
   }

   const removeCar = (index) => {
      setCars(cars.filter((_, i) => i !== index));
   }

   const changeYear = (e) => {
       setYear(e.target.value);
   }

   const changeMake = (e) => {
       setCarMake(e.target.value);
   }

   const changeModel = (e) => {
       setCarModel(e.target.value);
   }


    return (
     <div className='main'>
        <h2>List Of Car Objects</h2>

        <ul>
           {cars.map((item, index) => <li onClick={() => removeCar(index)} key={index}>{item.CarYear} {item.CarMake} {item.CarModel}</li>)}
        </ul>

        <input type="number" value={year} onChange={changeYear} name="" />
        <input type="text" onChange={changeMake} placeholder='Enter Car Make' name=""  />
        <input type="text" onChange={changeModel}  placeholder='Enter Car Model' name=""  />

        <button onClick={addCar}>Add Car</button>
     </div>
    )
}

