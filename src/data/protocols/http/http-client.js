const HttpMethod = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
};

class HttpRequest {
    constructor(url, method, body, headers) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }
}

const HttpStatusCode = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

class HttpResponse {
    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }
}

class HttpClient {
    async request(data) {
        const { url, method, body, headers } = data;
        
        try {
            const response = await fetch(url, {
                method,
                headers,
                body: JSON.stringify(body)
            });
            
            const responseBody = await response.json();
            return new HttpResponse(response.status, responseBody);
        } catch (error) {
            if (error instanceof TypeError) {
                return new HttpResponse(HttpStatusCode.SERVER_ERROR, { error: 'Erreur réseau ou URL invalide' });
            } else if (error instanceof SyntaxError) {
                return new HttpResponse(HttpStatusCode.SERVER_ERROR, { error: 'Erreur de syntaxe dans la réponse JSON' });
            } else if (error instanceof DOMException) {
                return new HttpResponse(HttpStatusCode.SERVER_ERROR, { error: 'Erreur de politique de contenu' });
            } else {
                return new HttpResponse(HttpStatusCode.SERVER_ERROR, { error: 'Erreur inattendue' });
            }
        }
    }
}

module.exports = {
    HttpMethod,
    HttpRequest,
    HttpStatusCode,
    HttpResponse,
    HttpClient
};
