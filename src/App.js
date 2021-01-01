import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import CreateNewStudent from "./components/CreateNewStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <StudentList />
          </Route>
          <Route path="/createNewStudent">
            <CreateNewStudent />
          </Route>
          <Route path="/editStudent/:id">
            <EditStudent />
          </Route>
          <Route path="/viewStudent/:id">
            <ViewStudent />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
