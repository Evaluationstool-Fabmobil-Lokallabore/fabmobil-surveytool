import Header from "./Header";
import Main from "./Main";

function Layout(props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
}

export default Layout;
