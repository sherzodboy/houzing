import React, { useContext } from "react";
import { Container } from "./style";
import { useQuery } from "react-query";
import { PropertiesContext } from "./../../context/properties";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL } = process.env;

export const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
        // setData(res?.data || []);
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title">Favourite</div>
      <div className="info" style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid.
      </div>
      <Container>
        {data?.data?.length ? (
          data?.data.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <h1>No data found</h1>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Favourite;
