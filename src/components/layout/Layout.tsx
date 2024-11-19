import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <Header />
      <div>{children}</div>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;
