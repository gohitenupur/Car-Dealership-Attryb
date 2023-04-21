import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"; 
import "./newentry.css";

const NewEntry = () => {
  const routeParams = useParams();
  const [title, settitle] = useState("");
  const [km, setkm] = useState(0);
  const [scratch, setscratch] = useState(0);
  const [accident, setaccident] = useState(0);
  const [image, setimage] = useState("");
  const [paint, setpaint] = useState("");
  const [place, setplace] = useState("");
  const [cardetail, setcardetail] = useState([]);
  useEffect(() => {
    async function getCar(){
       const res = await axios.get(`http://localhost:5000/newentry`);
       setcardetail(res.data.car);
       settitle(res.data.car?.title);
       setaccident(res.data.car?.accident);
       setkm(res.data.car?.kms);
       setimage(res.data.car?.image)
       setscratch(res.data.car?.scratchs);
       setplace(res.data.car?.place);
       setpaint(res.data.car?.paint);
    }
    getCar();
  }, []);

  const updateCar = async () => {
      const credential = {
        title: title, 
        kms: km,
        scratchs: scratch, 
        paint: paint , 
        accident: accident, 
        place: place, 
        image: image, 
        user : cardetail.user
      };
      try {
        const res = await axios.put(
          `http://localhost:5000/update`,
          credential
        );
        alert("updatation is successfull")
      } catch (e) {
        console.log(e);
      }
    }
    const deleteCar = async () => {
      try {
        const res = await axios.delete(
          `hhttp://localhost:5000/delete`
        );
        alert("deletion is successfull")
      } catch (e) {
        console.log(e);
      }
    }
  
  return (
    <div className='a'>
        <h1>Register New Car Entry </h1>
      <div className='b' >
          <div className="c">
          <div className="d">
                  <div>
                      <label for="title" className="e">Title</label>
                      <input type="text" name="title" id="title" value={title} onChange={(e)=>{settitle(e.target.value)}} className="f" required/>
                  </div>
                  <div>
                      <label for="km" className="g">KMs on odeometer</label>
                      <input type="number" value={km} name="km" id="km" onChange={(e)=>{setkm(e.target.value)}} className="h" required/>
                  </div>
                  <div>
                      <label for="scratchs" className="i">Number on scratchs</label>
                      <input type="number" value={scratch} name="scratchs" id="scratchs" onChange={(e)=>{setscratch(e.target.value)}} className="i" required/>
                  </div>
          </div>
          <div className="j"> 
                  <div>
                      <label for="place" className="k">Registration Place</label>
                      <input type="text" value={place} name="place" id="place" onChange={(e)=>{setplace(e.target.value)}} placeholder="Gurgaon" className="l" required/>
                  </div>
                  <div>
                      <label for="paint" className="m">Orignal Paint of car</label>
                      <input type="text" value={paint} name="paint" id="paint" onChange={(e)=>{setpaint(e.target.value)}} placeholder="green" className="n" required/>
                  </div>
                  <div>
                      <label for="image" className="o">Image URL of car</label>
                      <input type="text" value={image} name="image" id="image" onChange={(e)=>{setimage(e.target.value)}} placeholder="URL of image" className="p" required/>
                  </div>
                  <div>
                      <label for="accident" className="q">Nuber of accident register</label>
                      <input type="number" value={accident} name="accident" onChange={(e)=>{setaccident(e.target.value)}} id="accident" className="r" required/>
                  </div>  
              </div>
          </div>  
          </div>
          <div className='r' >
            <button onClick={updateCar} type="button" class="s">UPDATE</button>
            <button onClick={deleteCar} type="button" class="t">DELETE</button>
          </div>
    </div>
  )
}

export default NewEntry