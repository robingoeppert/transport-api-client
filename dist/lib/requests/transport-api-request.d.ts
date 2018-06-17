export declare abstract class TransportApiRequest {
    protected readonly BASE_URL: string;
    protected url: string;
    constructor(api: string);
    /**
     * Send built request to url
     * @return Promise from WebRequest
     */
    abstract send(): Promise<any>;
    /**
     * Add a GET param to URL. Key and value get url-encoded
     * @param {string} key
     * @param {string} value
     */
    protected addParam(key: string, value: string): this;
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
