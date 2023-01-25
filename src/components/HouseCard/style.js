import styled from "styled-components";
import { ReactComponent as bed } from "./../../assets/icons/bed.svg";
import { ReactComponent as bath } from "./../../assets/icons//bath.svg";
import { ReactComponent as garage } from "./../../assets/icons/car.svg";
import { ReactComponent as ruler } from "./../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "./../../assets/icons/resize.svg";
import { ReactComponent as love } from "./../../assets/icons/love.svg";

const Container = styled.div`
  border-radius: 3px;
  // border: 0.7px solid silver;
  width: 100%;
  max-width: 350px;
  min-width: 330px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  // height: 430px;
  cursor: pointer;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.03))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.03))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.03));
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
`;

const Content = styled.div`
  padding-top: 24px;
  padding: 16px 20px;
  background: #fff;
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 5px;
  background-color: #f6f8f9;
  border-radius: 60px;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Resize = styled(resize)``;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Divider };
