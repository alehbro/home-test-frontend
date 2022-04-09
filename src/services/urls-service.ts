import {FullUrlDto} from "../models/full-url-dto";
import {TinyUrlDto} from "../models/tiny-url-dto";

export default interface UrlsService {
    getTinyUrl(fullUrlDto: FullUrlDto): Promise<TinyUrlDto>;
    getFullUrl(tinyUrlDto: TinyUrlDto): Promise<FullUrlDto>;
}