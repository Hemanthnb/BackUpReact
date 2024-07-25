package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class TestData {
    public  String passengerPhoneNumber;
    public  String driverPhoneNumber;
    public  String dropOffLocation;
    public  String bikerNotes;
    public  String driverFirstName;
    public  String driverLastName;
    public  String pickUpMainAddress;
    public  String pickUpSecondaryAddress;
    public  String dropOffMainAddress;
    public  String dropOffSecondaryAddress;
    public  double pickupLatitude;
    public  double pickupLongitude;
    public  double dropOffLatitude;
    public  double dropOffLongitude;
    public  String savedName;
    public  String savedLocationNotes;
    public  String savedContactName;
    public  String savedContactNumber;
    public  String passengerFirstName;
    public  String passengerMiddleName;
    public  String passengerLastName;

//    public  String getPassengerPhoneNumber(){
//        return passengerPhoneNumber;
//    }
    // getters and setters
    // constructor
}
