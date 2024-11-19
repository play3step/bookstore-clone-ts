import styled from "styled-components";
import logo from "../../assets/12.webp";

const Footer = () => {
  return (
    <FooterStyle>
      <h1 className="logo">
        <img src={logo} alt="로고" />
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, Book Store.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 40px;
    }
  }
  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
