export abstract class TransportApiRequest {
    protected readonly BASE_URL: string = 'http://transport.opendata.ch/v1/';
    protected url: string;


    constructor(api: string) {
        this.url = this.BASE_URL + api;
    }


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
    protected addParam(key: string, value: string) {
        this.url += this.getParamLeader() + key + "=" + encodeURIComponent(value);

        return this;
    }

    /**
     * Returns ? for the first parameter and & for all further
     */
    protected getParamLeader(): string {
        return this.url.includes('?') ? '&' : '?';
    }

    /**
     * Date utility. Leads the number string by 0 if number is one digit
     * @param {number} number
     * @return {string}
     */
    protected numberToTwoDigitString(number: number): string {
        return number < 10 ? '0' + number : number.toString();
    }


    /**
     * Get request URL
     * @return {string} URL
     */
    public getUrl() {
        return this.url;
    }
}