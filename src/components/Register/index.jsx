import { AntTabs, Container } from "./style";
import { Signin } from "./../Signin/index";
import { Signup } from "./../Signup/index";

export const Register = () => {
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            label: `Sign in`,
            key: "1",
            children: <Signin />,
          },

          {
            label: `Sign up`,
            key: "2",
            children: <Signup />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
