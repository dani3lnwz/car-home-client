import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddPart from './Pages/Dashboard/AddPart';
import ManageParts from './Pages/Dashboard/ManageParts';
import Payment from './Pages/Dashboard/Payment';
import PageNotFound from './Pages/Shared/PageNotFound';
import Blogs from './Pages/Blogs/Blogs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';

function App() {
  const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          {!admin && <>
            <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </>}
          
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addPart' element={<RequireAdmin><AddPart></AddPart></RequireAdmin>}></Route>
          <Route path='managePart' element={<RequireAdmin><ManageParts></ManageParts></RequireAdmin>}></Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
