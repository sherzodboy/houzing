import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #36393c",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
  ${getType}
`;

export { Container };
