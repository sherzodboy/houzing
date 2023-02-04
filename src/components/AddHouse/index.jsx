import React, { useEffect, useState } from "react";
import { IconDelete, MenuWrapper, Section, SelectAnt, Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Input from "./../Generic/Input/index";
import { Checkbox } from "antd";
import { useFormik } from "formik";
import Button from "./../Generic/Button/index";
import TextArea from "antd/es/input/TextArea";

export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  // single house
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
    // eslint-disable-next-line
  }, []);

  // category
  useEffect(() => {
    request({ url: `/categories/list` }).then((res) =>
      setCategory(res?.data || [])
    );
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,

    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: { ...values, categoryId: 1, name: "webbrain", attachments: imgs },
      }).then((res) => {
        if (res?.success) navigate("/myprofile");
      });
    },
  });

  const addImg = () => {
    setImgs([
      ...imgs,
      { imgPath: img, id: `${img.length * Math.random()}${img}$` },
    ]);
    setImg("");
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              name="country"
              value={formik.values.country}
              placeholder={"Country"}
              onChange={formik.handleChange}
            />
            <Input
              name="region"
              value={formik.values.region}
              placeholder={"Region"}
              onChange={formik.handleChange}
            />
            <Input
              name="city"
              value={formik.values.city}
              placeholder={"City"}
              onChange={formik.handleChange}
            />
            <Input
              name="address"
              value={formik.values.address}
              placeholder={"Address"}
              onChange={formik.handleChange}
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              type="number"
              value={formik.values.houseDetails.area}
              name="houseDetails.area"
              onChange={formik.handleChange}
              placeholder={"area"}
            />
            <Input
              type="number"
              value={formik.values.houseDetails.bath}
              name="houseDetails.bath"
              onChange={formik.handleChange}
              placeholder={"bath"}
            />
            <Input
              type="number"
              value={formik.values.houseDetails.beds}
              name="houseDetails.beds"
              onChange={formik.handleChange}
              placeholder={"beds"}
            />
            <Input
              type="number"
              value={formik.values.houseDetails.garage}
              name="houseDetails.garage"
              onChange={formik.handleChange}
              placeholder={"garage"}
            />
            <Input
              type="number"
              value={formik.values.houseDetails.room}
              name="houseDetails.room"
              onChange={formik.handleChange}
              placeholder={"room"}
            />
            <Input
              type="number"
              value={formik.values.houseDetails.yearBuilt}
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder={"year built"}
            />
            <SelectAnt
              value={formik.values.category}
              defaultValue={"Select Category"}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {category.map((value) => {
                return (
                  <SelectAnt.Option key={value?.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              placeholder={"Name"}
            />
            <Input
              value={formik.values.zipCode}
              name="zipCode"
              onChange={formik.handleChange}
              placeholder={"Zip Code"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder={"Price"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
              placeholder={"Sale price"}
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add img url"
            />
            <Button type={"button"} onClick={addImg}>
              Add Image URL
            </Button>
          </Section>
          <Section flex>
            {imgs.map((value) => {
              return (
                <pre>
                  {value?.imgPath}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>
          <Section gap>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.stadium"
              >
                Stadium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                SuperMarket
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                TV
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.airCondition"
              >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.gasStove"
              >
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Button> {id ? "update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
