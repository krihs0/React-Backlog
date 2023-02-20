import Display from "../components/Display/Display"; // import de display
import Form from "../components/Form/Form";     //import de form
import "./App.css"; //import de css

const App = () =>{


    return(         // het rendert de form en de display
        <>             
            <Form/>
            <Display/>
        </>
    );
}

export default App;