import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const isAuthenticate = false;

  return (
    <>
      {isAuthenticate ? (
        <Navigate to="/" />
      ) : (
        <>
         <section className="flex flex-1 justify-center items-center flex-col py-10 bg-green-200">
         <Outlet />
         </section>
         <img className="hidden md:block h-screen w-1/2  object-cover bg-no-repeat" src="../../public/assets/images/side-img.svg" alt="logo"/>
         
        </>
      )}
    </>
  );
}

export default AuthLayout;
