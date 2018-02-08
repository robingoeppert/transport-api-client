import { Location } from './objects/location';
import { Connection } from './objects/connection';
import { Journey } from './objects/journey';
import { TransportApiRequest } from './requests/transport-api-request';
export declare class TransportApiClient {
    getStationsIn(locationName: string): Promise<Array<Location>>;
    getConnections(): Array<Connection>;
    getStationboard(): Array<Journey>;
    request(request: TransportApiRequest): Promise<any>;
}
