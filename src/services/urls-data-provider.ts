import UrlsService from "./urls-service";
import {TinyUrlDto} from "../models/tiny-url-dto";
import {FullUrlDto} from "../models/full-url-dto";

type AuthParams = {
    "Content-type": string
}

function getHeaders(): AuthParams {
    return {
        "Content-type": "application/json"
    };
}

export default class UrlsDataProvider implements UrlsService {
    constructor(private readonly url: string, private readonly apiSuffix: string) {
    }

    async getTinyUrl(fullUrlDto: FullUrlDto): Promise<TinyUrlDto> {
        const tinyUrlDto: TinyUrlDto = await fetchGet(`${this.url}/${this.apiSuffix}/getTinyUrl`,
            'POST', JSON.stringify(fullUrlDto));
        tinyUrlDto.tinyUrl = `${this.url}/${tinyUrlDto.tinyUrl}`;
        return tinyUrlDto;
    }

    getFullUrl(tinyUrlDto: TinyUrlDto): Promise<FullUrlDto> {
        let {tinyUrl} = tinyUrlDto;
        if (tinyUrl.includes(`${this.url}/`)) {
            tinyUrl = tinyUrl.replace(`${this.url}/`, '');
            return fetchGet(`${this.url}/${this.apiSuffix}/getFullUrl/${tinyUrl}`);
        } else {
            throw new Error('Invalid url');
        }
    }

}

async function fetchGet(url: string, method?: string, body?: BodyInit): Promise<any> {
    try {
        const requestInit: RequestInit = {};
        requestInit.headers = getHeaders();
        requestInit.method = method ? method : undefined;
        requestInit.body = body ? body : undefined;

        const response = await fetch(url, requestInit);

        const res = await response.json();

        if (response.status === 400 || response.status === 404) {
            throw new Error(res.message);
        }

        return res;
    } catch (err) {
        throw err;
    }
}