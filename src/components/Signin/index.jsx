import { Container, Content } from "./style";
import Input from "./../Generic/Input/index";
import Button from "./../Generic/Button/index";
import useRequest from "./../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const { REACT_APP_BASE_URL } = process.env;

const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { placeholder, value } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Successfully logged in");
  };

  const onSubmit = async () => {
    await request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
      }
      info();
    });
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder={"email"} type={"email"} />
        <Input onChange={onChange} placeholder={"password"} type={"password"} />
        <Button width={"%"} onClick={onSubmit}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Signin;
