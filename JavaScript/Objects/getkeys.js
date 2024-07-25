const driverData = {
  drivers: [
    {
      id: "08ae17ea-6fb2-4264-8b88-17d42be744d0",
      phone_number: "+639996615586",
      country_code: 63,
      first_name: "Driver name 1213216",
      middle_name: "Testing",
      last_name: "Load_UAT",
      email: "1213216@angkas.com",
      created_at: "2024-04-04T18:24:03.471858Z",
      updated_at: "2024-04-11T12:24:23.387873Z",
    },
    {
      id: "81cdde01-f5ff-42e4-9977-3cae568a9ece",
      phone_number: "+639996436230",
      country_code: 63,
      first_name: "Driver name 920258",
      middle_name: "Testing",
      last_name: "Load_UAT",
      email: "920258@angkas.com",
      created_at: "2024-03-25T07:40:08.498282Z",
      updated_at: "2024-03-25T17:55:30.440006Z",
    },
  ],
};

const customerData = {
  status: "success",
  data: {
    drivers: [
      {
        id: "08ae17ea-6fb2-4264-8b88-17d42be744d0",
        phone_number: "+639996615586",
        country_code: 63,
        first_name: "Customer name 6913216",
        middle_name: "Testing",
        last_name: "Load_UAT",
        email: "1213216@angkas.com",
        created_at: "2024-04-04T18:24:03.471858Z",
        updated_at: "2024-04-11T12:24:23.387873Z",
      },
      {
        id: "81cdde01-f5ff-42e4-9977-3cae568a9ece",
        phone_number: "+639996436230",
        country_code: 63,
        first_name: "Customer name 920269",
        middle_name: "Testing",
        last_name: "Load_UAT",
        email: "920258@angkas.com",
        created_at: "2024-03-25T07:40:08.498282Z",
        updated_at: "2024-03-25T17:55:30.440006Z",
      },
    ],
  },
};

console.log(Object.keys(customerData.data));
