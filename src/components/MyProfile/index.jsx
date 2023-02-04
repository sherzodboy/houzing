import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Button from "./../Generic/Button/index";
import noimg from "./../../assets/img/noimg.jpeg";
import { useQuery } from "react-query";
import { message } from "antd";

// const { REACT_APP_BASE_URL: url } = process.env;

const MyProfile = () => {
  // const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const columns = [
    {
      title: "Listing title",
      key: "name",
      width: 600,
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          />
          <User flex>
            <div className="subTitle">
              {data?.country}, {data?.address}
            </div>
            <div className="info">
              {data?.city}, {data?.region}
            </div>
            <del className="info">{data?.salePrice} $</del>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For Sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Built",
      render: (data) => <span>{data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span>{data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span>{data.price} $</span>,
      width: 150,
    },
    {
      title: "Action",
      width: 150,
      key: "email",
      render: (data) => {
        return (
          <User>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
    },
  ];

  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    );
  };

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>

        <div style={{ marginLeft: "auto" }} className="title">
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            Add house
          </Button>
        </div>
      </User>
      <Container>
        <AntTable
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
