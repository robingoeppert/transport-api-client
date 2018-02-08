export declare abstract class TransportApiRequest {
    protected readonly BASE_URL: string;
    protected url: string;
    constructor();
    /**
     * Send built request to url
     */
    abstract send(): Promise<any>;
    /**
     * Returns ? for the first parameter and & for all further
     */
    protected getParamLeader(): string;
}
