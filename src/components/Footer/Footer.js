import StyledFooter from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by Adzhimatinur Azzahra</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
