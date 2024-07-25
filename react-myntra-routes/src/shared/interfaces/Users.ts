// Define the Geo type
interface Geo {
    lat: string;
    lng: string;
}

// Define the Address type
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

// Define the Company type
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Define the User type
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Example usage
export default User;