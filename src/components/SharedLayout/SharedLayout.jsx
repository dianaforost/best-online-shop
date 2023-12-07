import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <p>Logo</p>
      </header>
      <Outlet />
      <footer>
        <h2>Hello I am footer</h2>
      </footer>
    </div>
  );
};
