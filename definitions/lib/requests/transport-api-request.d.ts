export declare abstract class TransportApiRequest {
    protected readonly BASE_URL: string;
    protected url: string;
    constructor();
    /**
     * Send built request to url
     * @return Promise from WebRequest
     */
    abstract send(): Promise<any>;
    /**
     * Returns ? for the first parameter and & for all further
     */
    protected getParamLeader(): string;
    /**
     * Date utility. Leads the number string by 0 if number is one digit
     * @param {number} number
     * @return {string}
     */
    protected numberToTwoDigitString(number: number): string;
    /**
     * Get request URL
     * @return {string} URL
     */
    getUrl(): string;
}
