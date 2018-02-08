import {TransportApiRequest} from './transport-api-request';
import {Journey} from '../objects/journey';

export class StationboardRequest extends TransportApiRequest {
    send(): Promise<Array<Journey>> {
        return new Promise<Array<Journey>>(null);
    }
}
