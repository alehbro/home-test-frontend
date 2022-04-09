import UrlsService from "./urls-service";
import {FullUrlDto} from "../models/full-url-dto";
import {TinyUrlDto} from "../models/tiny-url-dto";

export default class UrlsDataProcessor {
    constructor(private urlsService: UrlsService) {
    }

    getTinyUrl(fullUrlDto: FullUrlDto): Promise<TinyUrlDto> {
        return this.urlsService.getTinyUrl(fullUrlDto);
    }

    getFullUrl(tinyUrlDto: TinyUrlDto): Promise<FullUrlDto> {
        return this.urlsService.getFullUrl(tinyUrlDto);
    }
}