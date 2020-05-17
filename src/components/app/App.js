import React,{useEffect,useState,Fragment} from 'react';
import './App.css'

const App = ()=> {

  const [statusApi,setStatusApi] = useState({});

  useEffect(() => {
    //Prove connection to Backend API
    const getProveAPI = async ()=>{
      let request = await fetch("/api/v1/status");
      if (request.status === 200){
        let response = await request.json()
        setStatusApi(response);
      }else{
        console.error("error de conexion contra la API");
      }
    }
    getProveAPI();
      
  },[]);
  return (
    <Fragment>      
      <div className="container">Prueba de conectivad contra la API:</div>
      <br/>
      <p>{JSON.stringify(statusApi)}</p>
    </Fragment>
  );
}

export default App;
