import {useState} from 'react';
import {Paper} from "@mui/material";
import {urlsDataProcessor} from "../../config/service-config";
import {FullUrlDto} from "../../models/full-url-dto";
import {TinyUrlDto} from "../../models/tiny-url-dto";
import UrlInput from "../ui/url-input";

const Main = () => {

    const [fullUrl, setFullUrl] = useState<string>('');
    const [tinyUrl, setTinyUrl] = useState<string>('');

    async function onGetTinyUrl(): Promise<void> {
        const fullUrlDto: FullUrlDto = {
            fullUrl
        }
        const tinyUrlDto: TinyUrlDto = await urlsDataProcessor.getTinyUrl(fullUrlDto);
        setFullUrl('');
        setTinyUrl(tinyUrlDto.tinyUrl);
    }

    async function onGetFullUrl(): Promise<void> {
        const tinyUrlDto: TinyUrlDto = {
            tinyUrl
        }
        const fullUrlDto: FullUrlDto = await urlsDataProcessor.getFullUrl(tinyUrlDto);
        setTinyUrl('');
        setFullUrl(fullUrlDto.fullUrl);
    }

    return (
        <Paper
            sx={{
                width: {xs: '100%', md: '80%'},
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <UrlInput
                name='full url'
                buttonName='Get tiny url'
                value={fullUrl}
                setValue={setFullUrl}
                onGetFn={onGetTinyUrl}
            />
            <UrlInput
                name='tiny url'
                buttonName='Get full url'
                value={tinyUrl}
                setValue={setTinyUrl}
                onGetFn={onGetFullUrl}
            />
        </Paper>
    );
};

export default Main;