import styled from "styled-components";
import { ReactComponent as bed } from "./../../assets/icons/bed.svg";
import { ReactComponent as bath } from "./../../assets/icons//bath.svg";
import { ReactComponent as garage } from "./../../assets/icons/car.svg";
import { ReactComponent as ruler } from "./../../assets/icons/ruler.svg";
import { ReactComponent as love } from "./../../assets/icons/love.svg";
import { ReactComponent as resize } from "./../../assets/icons/resize.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  margin: 100px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
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
