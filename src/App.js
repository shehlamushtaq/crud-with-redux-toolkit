import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import CreateNewStudent from "./components/CreateNewStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <CreateNewStudent />
      <EditStudent />
      <ViewStudent />
      <Footer />
    </>
  );
}

export default App;
