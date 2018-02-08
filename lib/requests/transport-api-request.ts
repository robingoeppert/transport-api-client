export abstract class TransportApiRequest {
    protected readonly BASE_URL: string = 'http://transport.opendata.ch/v1/';
    protected url: string;


    constructor() {
        this.url = this.BASE_URL;
    }


    /**
     * Send built request to url
     */
    abstract send(): Promise<any>;

    /**
     * Returns ? for the first parameter and & for all further
     */
    protected getParamLeader(): string {
        return this.url.includes('?') ? '&' : '?';
    }
}