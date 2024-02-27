import './App.scss';
import AllInput from './Components/AllInput';
import AllInputWithProps from './Components/AllInputsWithProps';
import LoadSavedData from './Components/LoadSavedData';
import FormContainer from './Formik/FormContainer';

function App() {
  return (
    <div className="App">
      {/* <AllInput /> */}
      <AllInputWithProps />
      {/* <LoadSavedData /> */}
      {/* <FormContainer /> */}
    </div>
  );
}

export default App;
