import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ToastMessage from './components/ToastMessage/ToastMessage';
import MedicineManagement from './pages/MedicineManagement';

function App() {
  const { showToast, toastMessage } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <MedicineManagement />
      {showToast && <ToastMessage
        show={showToast}
        delay={3000}
        closeToast={() => dispatch({ type: "CLOSE_TOAST" })}
        message={toastMessage}
      />}
    </div>
  );
}

export default App;
