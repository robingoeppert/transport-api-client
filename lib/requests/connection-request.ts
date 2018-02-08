import {TransportApiRequest} from './transport-api-request';
import {Connection} from '../objects/connection';

export class ConnectionRequest extends TransportApiRequest {
    /* TODO implementation */
    send(): Promise<Array<Connection>> {
        return new Promise<Array<Connection>>(null);
    }
}
