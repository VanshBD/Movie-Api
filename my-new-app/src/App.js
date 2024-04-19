import { Route, Routes } from 'react-router-dom';
import './App.css';
// import TempComponent from './Component/Templet/Temp';
import Nav from './Component/Header/Nav';
// import Local from './Component/Localstoreg/Local';
// import CR from './Component/CommentReview/CR';
// import Task1 from './Component/MameTask/Task1';
// import Form1Validation from './Component/FormValidation/Form1Validation';
// import Form1 from './Component/Form/Form1';
// import CounterProject from './Component/Counter/CounterProject';
import Stopwatch from './Component/Stop_watch/stopWatch';
// import ApiInfo from './Component/StaticUi/ApiInfo';
import TodoList from './Component/ToDoList/Tasktodolist';
import Products from './Component/ProductScreen/Products';
import Electronics from './Component/ProductScreen/Categories/Electronics';
import Fashion from './Component/ProductScreen/Categories/Fashion';
import Productscreen from './Component/ProductScreen/Productscreen';
import Task1 from './Component/Task/Task1';
import Filter from './Component/Filterdata/Filter';
import Shorting from './Component/Shortacdc/Shorting';
import Todoo from './Component/Redux/Todoo';
import Display from './Component/Redux/Display';
// import Todoolist from './Component/Redux2/reduxtodoolist';
import A from './Component/Context/A';
import Usememo from './Component/Memo/Usememo';
import UserLoginSignup from './Component/Practice/LoginandSignup';
import DataInteraction from './Component/Api/Axios.jsx';
import Fb_dataBase from './Component/FbDataBase.jsx';
import Auth from './Component/FbAuth.jsx';
import FBStore from './Component/FbStore.jsx';

function App() {
  // const data = ["Apple", "Banana", "Cheer", "Dog"]
  // const item = [
  //   { name: "product a", price: 10 },
  //   { name: "product b", price: 15 },
  //   { name: "product c", price: 20 },
  //   { name: "product d", price: 25 },
  //   { name: "product e", price: 30 },
  // ]

  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <ApiInfo/> */}
      {/* <CounterProject/> */}
      {/* <Filter data={data} /> */}
      {/* <Shorting  items={item} /> */}
      {/* <Form1/> */}
      {/* <Form1Validation /> */}
      {/* <Task1 /> */}
      {/* <CR /> */}
      {/* <Local /> */}
      {/* <Routes>
        <Route path='/' element={<Nav />} />
        <Route path="/home" element={<TodoList />} />
        <Route path="*" element={<Task1 />} />
        <Route path="/product" element={<Products />} >
          <Route path='electronics' element={<Electronics />} />
          <Route path='electronics/:id' element={<Productscreen />} />

          <Route path='fashion' element={<Fashion />} />
        </Route>

      </Routes> */}
      {/* <DataInteraction /> */}
      {/* <Fb_dataBase /> */}
      {/* <TempComponent /> */}

      <Auth />
      {/* <FBStore /> */}
      {/* <Todoolist /> */}
      {/* <Todoo/>
      <Display/> */}

      {/* <A /> */}
      {/* <UserLoginSignup /> */}

      {/* <Usememo/> */}
    </div>

  );
}

export default App;
