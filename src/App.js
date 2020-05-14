import React,{useEffect,useState,Fragment} from 'react';


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
      <p>Prueba de conectivad contra la API:</p>
      <br/>
      <p>{JSON.stringify(statusApi)}</p>
    </Fragment>
  );
}

export default App;
