export function getLocation(
    successCallback: PositionCallback,
    errorCallback: PositionErrorCallback
) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.log("Geolocation not supported");
    }
}
 /*
 Page Load
   ↓
useEffect run
   ↓
getLocation call
   ↓
Browser se location request
   ↓
[Allow] → successCallback → lat/lng mil gaya
[Block] → errorCallback → error message

 */