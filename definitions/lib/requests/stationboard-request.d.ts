import { TransportApiRequest } from './transport-api-request';
import { Journey } from '../objects/journey';
export declare class StationboardRequest extends TransportApiRequest {
    send(): Promise<Array<Journey>>;
}
