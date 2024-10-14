import React,{useState,useEffect} from 'react';
const App=()=>{
  const[data,setdata]=useState(null);
  const[loading,setloading]=useState(true);
  const[error,seterror]=useState(null);
  const Api_key="f9b0de0aaedf4e26b58151616241410";
  const city="dhampur "
  const fatchData= async() => {
    setloading(true);
    seterror(null)
    try{
      const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${city}`);

      if (!response.ok){
        throw new error('check ker bhai kuch galat hai');
      }
      const result =await response.json();
      setdata(result);
      
    }catch(error){
      seterror(error.message)
    }finally{
      setloading(false);
    }
  };

  useEffect(()=>{
    fatchData();
  },[]);

  return(
    <div>
      <h1>weather App made by saurabh</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error {error}</p>}

      {data && (
       <div>
        <h2>Weather in {data.location.name}</h2>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Condition: {data.current.condition.text}</p>
          <p>Humidity: {data.current.humidity}%</p>
       </div>
      )}
    </div>
  )
}

export default App