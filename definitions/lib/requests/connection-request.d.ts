import { TransportApiRequest } from './transport-api-request';
import { Connection } from '../objects/connection';
export declare class ConnectionRequest extends TransportApiRequest {
    send(): Promise<Array<Connection>>;
}
