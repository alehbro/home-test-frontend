import UrlsDataProvider from "../services/urls-data-provider";
import config from "./config.json";
import UrlsDataProcessor from "../services/urls-data-processor";

const urlsService = new UrlsDataProvider(config.backendUrl, config.apiSuffix);
export const urlsDataProcessor = new UrlsDataProcessor(urlsService);