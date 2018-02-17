import { TransportApiRequest } from './transport-api-request';
import { Journey } from '../objects/journey';
export declare class StationboardRequest extends TransportApiRequest {
    private constructor();
    static byStationName(name: string): StationboardRequest;
    static byStationId(id: string): StationboardRequest;
    send(): Promise<Array<Journey>>;
}
