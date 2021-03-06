import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Compartment from "./Compartment";
import Popup from "../components/popup/Popup";
import { PopupRowView } from "./PopupRowView";
import { MySelect } from "../components/select/MySelect";
import { useSelector } from "react-redux";
import { useTraceUpdate } from "../functions/utils";

export const Storage = ({ defaultFilter, clickRowFunc, warehouse_id }) => {
  const [filter, setFilter] = useState(null);
  const [showPopup, setShowPopups] = useState(null);
  const [showDetailPopup, setShowDetailPopup] = useState(null);
  const [compartmentZoom, setCompartmentZoom] = useState(null);
  const [hide, setHide] = useState(null);
  const [warehouseID, setWarehouseID] = useState(2);
  const compartments = useSelector((state) => state.base.compartments);
  const storage = useSelector((state) => state.base.storage);

  useEffect(() => {
    if (warehouse_id) setWarehouseID(warehouse_id);
  }, [warehouse_id]);

  useEffect(() => {
    if (!compartmentZoom) {
      setTimeout(() => {
        setHide(false);
      }, 1);
    }
  }, [compartmentZoom]);

  const zoom = (compartment) => {
    console.log("zoom compartment", compartment);
    if (!compartment) setHide(true);
    setCompartmentZoom(compartment);
  };

  const removePopup = (rowData) => {
    setTimeout(() => {
      setShowPopups(null);
    }, 5);
  };

  const showDetails = (rowData) => {
    setTimeout(() => {
      setShowPopups(null);
      setShowDetailPopup(true);
    }, 5);
  };

  const clickRow = (rowData) => {
    setShowPopups(rowData["row_id"]);
  };

  const filterWarehouse = (compartment) => {
    return compartment.warehouse_id === warehouseID;
  };

  const filterZoom = (compartment) => {
    return compartment.name === compartmentZoom || !compartmentZoom;
  };

  const getCompartmentList = () => {
    return compartments
      .filter((cp) => filterZoom(cp) && filterWarehouse(cp))
      .map((compartment) => {
        return (
          <Compartment
            compartment={compartment}
            showPopup={showPopup}
            setShowPopup={removePopup}
            clickRow={clickRow}
            showDetails={showDetails}
            zoom={zoom}
            compartmentZoom={compartmentZoom}
            filter={filter}
            clickRowFunc={clickRowFunc}
            storage={storage}
          />
        );
      });
  };

  const options_ = [
    { value: 2276312, label: "Polykanister" },
    { value: 2744558, label: "CP3 Paletten" },
    { value: 2766358, label: "Flachkannen" },
  ];

  if (!compartments || !storage) return null;

  return (
    <>
      <PopupRowView visible={showDetailPopup} setVisible={setShowDetailPopup} />

      {!hide && (
        <StorageHall showPopupCard={true}>
          <Wrapper>
            <MySelect
              placeholder={"Material Suchen"}
              setValue={(filter_) => setFilter(filter_.filter.toLowerCase())}
              optionData={options_}
              defaultFilter={defaultFilter}
            />
          </Wrapper>
          {getCompartmentList()}
        </StorageHall>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: -60px;
  right: 0px;
  z-index: 3;
  text-align: right;
`;

const Control = () => {};

const StorageHall = styled.div`
  position: relative;
  background: #cecece;
  width: 95%;
  height: 75%;
  top: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  border: 2px solid;
  margin: 0 auto;
  margin-bottom: 10%;
`;
