import { HttpClient, HttpMethod, HttpResponse, HttpStatusCode } from 'data/protocols/http'; 

const useHttpClient = () => {
    const httpClient = new HttpClient();

    const request = async (data) => {
        const { url, method, body, headers } = data;

        try {
            const httpResponse = await httpClient.request({
                url,
                method,
                body,
                headers
            });

            return {
                statusCode: httpResponse.statusCode,
                body: httpResponse.body
            };
        } catch (error) {
            if (error instanceof TypeError) {
                return {
                    statusCode: HttpStatusCode.SERVER_ERROR,
                    body: { error: 'Erreur réseau ou URL invalide' }
                };
            } else if (error instanceof SyntaxError) {
                return {
                    statusCode: HttpStatusCode.SERVER_ERROR,
                    body: { error: 'Erreur de syntaxe dans la réponse JSON' }
                };
            } else if (error instanceof DOMException) {
                return {
                    statusCode: HttpStatusCode.SERVER_ERROR,
                    body: { error: 'Erreur de politique de contenu' }
                };
            } else {
                return {
                    statusCode: HttpStatusCode.SERVER_ERROR,
                    body: { error: 'Erreur inattendue' }
                };
            }
        }
    };

    return { request };
};

export default useHttpClient;