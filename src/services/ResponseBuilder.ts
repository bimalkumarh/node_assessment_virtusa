import * as httpStatusCodes from 'http-status-codes';

class ResponseBuilder {

    public statusCode: number;
    public data: any;
    private response: object;

    constructor() {
        this.statusCode = httpStatusCodes.OK;
        this.data = '';
        this.response = {
            statusCode: this.statusCode,
            data: this.data
        };
    }

    public ok() {        
        this.statusCode = httpStatusCodes.OK;
        this.response = {
            statusCode: this.statusCode,
            data: this.data
        };        

        return this.response;
    }

    public badRequest() {
        this.statusCode = httpStatusCodes.BAD_REQUEST;
        this.response = {
            statusCode: this.statusCode,
            data: ''
        };

        return this.response;
    }
}

export default ResponseBuilder;
