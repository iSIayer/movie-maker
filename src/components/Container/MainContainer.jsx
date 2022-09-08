import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ContanerMain } from './MainContainer.styled';
import { Header } from 'components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';

export const Container = () => {
  return (
    <div>
      <Header />
      <ContanerMain>
        <Outlet />
      </ContanerMain>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
