import { Dropdown } from "antd";
import { useState, useEffect, useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAntd } from "./style";
import { uzeReplace } from "./../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "./../../hooks/useSearch";

const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");

  const { REACT_APP_BASE_URL: url } = process.env;

  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipyRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace("sort", sort)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          ref={countryRef}
          name="country"
          placeholder={"Country"}
        />
        <Input
          defaultValue={query.get("region")}
          onChange={onChange}
          ref={regionRef}
          name="region"
          placeholder={"Region"}
        />
        <Input
          defaultValue={query.get("city")}
          onChange={onChange}
          ref={cityRef}
          name="address"
          placeholder={"City"}
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChange={onChange}
          ref={zipyRef}
          name="zip_code"
          placeholder={"Zip Code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          name="room"
          onChange={onChange}
          ref={roomsRef}
          placeholder={"Rooms"}
        />
        <SelectAntd
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAntd.Option value={""}>Select Sort</SelectAntd.Option>
          <SelectAntd.Option value={"asc"}>O'suvchi</SelectAntd.Option>
          <SelectAntd.Option value={"desc"}>Kamayuvchi</SelectAntd.Option>
        </SelectAntd>
        <SelectAntd value={value} onChange={onChangeCategory}>
          <SelectAntd.Option value={""}>Select Category</SelectAntd.Option>
          {data.map((value) => {
            return (
              <SelectAntd.Option key={value?.id} value={value?.id}>
                {value?.name}
              </SelectAntd.Option>
            );
          })}
        </SelectAntd>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          onChange={onChange}
          ref={minPriceRef}
          placeholder={"Min price"}
          name="min_price"
        />
        <Input
          onChange={onChange}
          ref={maxPriceRef}
          placeholder={"Max price"}
          name="max_pri"
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city or ZIP code"}
      />
      <Dropdown
        // menu={{ items: menu }}
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger={"click"}
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button width={250}>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
