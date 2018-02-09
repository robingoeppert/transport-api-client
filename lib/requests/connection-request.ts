import {TransportApiRequest} from './transport-api-request';
import {Connection} from '../objects/connection';

export class ConnectionRequest extends TransportApiRequest {

    constructor() {
        super();
        this.url = this.url + 'connections';
    }


    /* TODO implementation */
    send(): Promise<Array<Connection>> {
        return new Promise<Array<Connection>>(null);
    }
}
