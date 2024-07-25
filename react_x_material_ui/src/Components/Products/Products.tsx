import React from "react";
import useProductsAPI from "../../hooks/useProductsAPI";
import { Box, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
// import {Link} from 'reac'

const Products = () => {
  const data = useProductsAPI();

  return (
    <>
      <Box
      className='container'
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Button component={Link} to="/hell">
          CheckoutPage
        </Button>

        {data.loading && (
          <Box
            className="before"
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress disableShrink />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {data.listOfProcucts.map((product, index) => (
            <Box
              key={index} // Ensure each child in a list has a unique "key" prop
              sx={{
                display: "inline",
                backgroundColor: "#EBECF5",
                width: "150px",
                height: "150px",
                borderRadius: "5px",
                padding: "1em",
                boxShadow: "1px 1px 2px 2px black",
                margin: "15px 2px 2px",
                flex: "start",
              }}
            >
              {product.title}
            </Box>
          ))}
        </Box>

        {data.error != null ? <Box>{data.error}</Box> : <></>}
      </Box>
    </>
  );
};

export default Products;


let str=`{
  "status": "success",
  "data": {
      "id": "e2e7c5a8-0f7b-45db-97b9-fdb85ff4a902",
      "user_type": "",
      "jalopy_id": 0,
      "public_id": "C2556895",
      "authentication_id": "94bcd86a-a907-4d38-80f5-adb604650cc9",
      "account_status": "ACTIVE",
      "phone_number": "+639991416969",
      "country_code": 63,
      "first_name": "Davy",
      "last_name": "jons",
      "service_zone": "CEB",
      "terms_accepted_at": "2024-04-15T07:04:17.860936Z",
      "phone_verified_at": "2024-04-15T07:04:14.531712Z",
      "created_at": "2024-04-15T07:04:10.228715Z",
      "updated_at": "2024-04-15T07:04:29.900379Z",
      "gender": "N",
      "weight": 0
  }
}`


let str2=`{
  "status": "success",
  "data": {
      "id": "08ae17ea-6fb2-4264-8b88-17d42be744d0",
      "user_type": "driver",
      "jalopy_id": 0,
      "public_id": "D477964",
      "authentication_id": "c463852b-7500-48e1-b1b0-95b28a54bf38",
      "account_status": "ACTIVE",
      "account_status_reason": "",
      "phone_number": "+639996615586",
      "country_code": 63,
      "first_name": "Tess name 1213216",
      "middle_name": "Testing",
      "last_name": "Load_UAT",
      "email": "1213216@angkas.com",
      "avatar_url": "https://ui-avatars.com/api/?name=R+T\u0026background=random",
      "license_number": "ABCDE12345678",
      "license_expiry_date": "",
      "vehicle_number": "1341341",
      "vehicle_make": "Yotoya",
      "tnv_violation": false,
      "service_zone": "MNL",
      "created_at": "2024-04-04T18:24:03.471858Z",
      "updated_at": "2024-04-11T12:24:23.387873Z",
      "fleets": [
          {
              "id": "467ab46b-e0e2-4490-b075-81432ffd6d7a",
              "fleet_priority": 0,
              "fleet_name": "Default Fleet",
              "fleet_description": "Angkas Default Fleet",
              "driver_count": 0
          }
      ],
      "service_types": [
          {
              "id": "padala_bike",
              "description": "Padala"
          },
          {
              "id": "passenger_bike",
              "description": "Passenger"
          }
      ]
  }
}`