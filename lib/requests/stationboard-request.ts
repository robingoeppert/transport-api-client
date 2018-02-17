import {TransportApiRequest} from './transport-api-request';
import {Journey} from '../objects/journey';


export class StationboardRequest extends TransportApiRequest {

    private constructor() {
        super('stationboard');
    }


    public static byStationName(name: string): StationboardRequest {
        return new StationboardRequest()
            .addParam('station', name);
    }

    public static byStationId(id: string): StationboardRequest {
        return new StationboardRequest()
            .addParam('id', id);
    }


    /*
    TODO implement param methods and SEND
     */

    send(): Promise<Array<Journey>> {
        return new Promise<Array<Journey>>(null);
    }
}
