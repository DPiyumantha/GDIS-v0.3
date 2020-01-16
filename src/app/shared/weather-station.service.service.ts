
/**
 * head >
       <script type="text/javascript" src="https://cdn.rawgit.com/isobit/websocket-nats/master/dist/websocket-nats.min.js"></script>

       <script>
            var global = global || window;
            var Buffer = Buffer || [];
            var process = process || {
                env: { DEBUG: undefined },
                version: []
            };
        </script>
 * 
 */

declare var NATS;
export class WeatherStationService {
    private nc;

    public values: WeatherStation = new WeatherStation();
    public api_key: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTQxNDFhMTFmNDdiMmE1MmI5NTZiMyIsInRpbWUiOjE1NzgzNzQxNzA3NzIsInR5cGUiOiJBUEkiLCJpYXQiOjE1NzgzNzQxNzB9.AGqKQ3ShUZFJjwRIKBzTKtZlYf53LCh0_jhMK8b6OAE";

    constructor() {
        this.nc = NATS.connect({ url: 'ws://35.247.156.90:4223', json: true });
        this.nc.on('connect', () => {
            console.log("Connected to weather station live server..")
            this.nc.subscribe("weather.id:" + this.api_key, (incomingMessage)=>{
                this.values = incomingMessage['data']
            });
        })


    }



}

export class WeatherStation {
    public temperature;
    public pressure;
    public humidity;
    public altitude;
    public windspeed;
    public rainfall;
    public wind_direction;
    constructor() {
        this.temperature = 0;
        this.pressure = 0;
        this.humidity = 0;
        this.altitude = 0;
        this.wind_direction = 0;
        this.windspeed = 0;
        this.rainfall = 0;

    }
}
