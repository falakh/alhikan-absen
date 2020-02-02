export function getLocation(succesCallback: PositionCallback) {
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
            succesCallback(position);
        }, error => {
            switch (error.code) {
                case 1:
                    console.log("Permission Denied");
                    break;
                case 2:
                    console.log("Position Unavailable");
                    break;
                case 3:
                    console.log("Timeout");
                    break;
            }
        });
    }
}
