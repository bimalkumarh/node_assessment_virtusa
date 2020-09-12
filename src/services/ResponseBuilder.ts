import * as http_status_codes from 'http-status-codes';

class ResponseBuilder {

    public statusCode: number;
    public data: any;
    private response: object;

    constructor() {
        this.statusCode = http_status_codes.OK;
        this.data = '';
        this.response = {
            statusCode: this.statusCode,
            data: this.data
        }
    }

    public success() {
        this.response = {
            statusCode: this.statusCode,
            data: this.data
        };

        return this.response;
    }

    public bad_request() {
        this.statusCode = http_status_codes.BAD_REQUEST;
        this.response = {
            statusCode: this.statusCode,
            data: ''
        };

        return this.response;
    }
}

export default ResponseBuilder;