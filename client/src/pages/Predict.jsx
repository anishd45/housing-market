import React from 'react'
import { useState } from 'react';




export default function Predict() {
  //const [error, setError] = useState(false);
  const [Formarr, setFormarr]=useState([])
  const [formData, setFormData] = useState({
    address: '',
    floor:'',
    bedrooms: '',
    bathrooms: '',
    face:'east',
    road:'blacktopped',
    // blacktopped:false,
    // concreted:false,
    // paved:false,
    // gravelled:false,
    parking: false,
    garden: false,
    balcony: false,
  });
  //const [predicting, setpredicting] = useState(false);
  console.log(formData);

  

  const handleChange = (e) => {
    if (
      e.target.id === 'parking' ||
      e.target.id === 'garden' ||
      e.target.id === 'balcony'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked ,
      });
    }
    if (e.target.name === 'blacktopped' || e.target.name === 'gravelled' ||
        e.target.name === 'paved' || e.target.name === 'concreted'
        ) {
          setFormData({ 
            ...formData,
            road : e.target.name,
          });
        }
      if (e.target.id === 'East' || e.target.id === 'West' ||
        e.target.id === 'North' || e.target.id === 'South') 
          {
            setFormData({ 
              ...formData,
             type: e.target.id,
             });
          }
    if (
      e.target.type === 'number' ||
      e.target.type === 'text'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  }; 

  function handleSubmit () {
    setFormarr([...Formarr,{address,floor,bedrooms,bathrooms}])
    console.log(Formarr);
    setFormData({address:"",floor:"",bathrooms:"",bedrooms:""})
  };


  return (
      <div className='p-1 max-w-lg mx-auto'>
        <h1 className='text-2xl font-semibold text-purple-700 text-center'>Enter the details below to predict the <br/> 
           approximate Price of your House.
        </h1>


        <div className='flex flex-col gap-4 flex-1'>
          <label>Enter your Address:
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            maxLength='15'
            minLength='5'
            required
            onChange={handleChange}
            value={formData.address}
          />
          </label>
          <label>No. of Floors:
           <input
            type='number'
            placeholder='Floors'
            className='border p-3 rounded-lg'
            id='floor'
            min='1'
            max='4'
            required
            onChange={handleChange}
            value={formData.floor}
          />
          </label>
          <label> No. of Bedrooms:
           <input
            type='number'
            placeholder='Bed Rooms'
            className='border p-3 rounded-lg'
            id='bedrooms'
            min='2'
            max='20'
            required
            onChange={handleChange}
            value={formData.bedrooms}
          />
          </label>
          <label>No. of Bathrooms:
          <input
            type='number'
            placeholder='Bathroom'
            className='border p-3 rounded-lg'
            id='bathrooms'
            min='1'
            max='5'
            required
            onChange={handleChange}
            value={formData.bathrooms}
          />
          </label>
          <label > Face:
          <select name="face" id="face"
            onChange={handleChange}
            defaultValue={'created_at_desc'}
            className='border p-3 rounded-lg'>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
          </label>
        </div>
        <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Road Type:</label>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='blacktopped'
                className='w-5'
                onChange={handleChange}
                checked={formData.blacktopped=='blacktopped'}
              />
              <span>Blacktopped</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='gravelled'
                className='w-5'
                onChange={handleChange}
                checked={formData.gravelled=='gravelled'}
              />
              <span>Gravelled</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='paved'
                className='w-5'
                onChange={handleChange}
                checked={formData.paved=='paved'}
              />
              <span>Paved</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='concreted'
                className='w-5'
                onChange={handleChange}
                checked={formData.concreted=='concreted'}
              />
              <span>Concreted</span>
            </div>
           

          </div>
        <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Amenities:</label>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='parking'
                className='w-5'
                onChange={handleChange}
                checked={formData.parking}
              />
              <span>Parking</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='garden'
                className='w-5'
                onChange={handleChange}
                checked={formData.garden}
              />
              <span>Garden</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='balcony'
                className='w-5'
                onChange={handleChange}
                checked={formData.balcony}
              />
              <span>Balcony</span>
            </div>
          </div>
          <button
              type='button'
              // disabled={loading || predicting}
              onClick={handleSubmit}
              className='p-3 bg-purple-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >PREDICT
          </button>

      </div>
       
        
  )
}



  

