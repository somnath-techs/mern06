import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

function App(){
  
  const notify = () => toast("Wow so easy!",{
    pauseOnHover: false,
    style:{
      background: 'red',
      color: 'white',
    }
  });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
       rtl={true}
       autoClose={5000}
       position="top-center"
       pauseOnFocusLoss={true}/>
    </div>
  );
}
export default App