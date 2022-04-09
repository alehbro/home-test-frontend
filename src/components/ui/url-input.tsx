import {ChangeEvent, FC, useMemo, useState} from 'react';
import {Box, Button, SxProps, TextField, Theme} from "@mui/material";

type PropsType = {
    name: string,
    buttonName: string,
    value: string,
    setValue: (value: string) => void,
    onGetFn: () => void
}

const UrlInput: FC<PropsType> = (props) => {
    const {name,buttonName, value, setValue, onGetFn} = props;

    const [urlError, setUrlError] = useState<string>('');

    const flValid = useMemo(() => {
        return !!value && !urlError;
    }, [urlError, value]);


    async function onClick() {
        try {
            await onGetFn();
        } catch (err: any) {
            console.log(err);
            setUrlError(err.message);
        }
    }

    function urlHandle(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setValue(event.target.value);
        setUrlError('');
    }

    const containerSx: SxProps<Theme> = {
        display: 'flex',
        width: {xs: '100%', md: '80%'},
        alignSelf: 'center',
        flexDirection: {xs: 'column', md: 'row'}
    }

    const buttonSx: SxProps<Theme> = {
        height: {xs: "auto", md: "56px"},
        margin: {xs: "5px 0", md: "16px 0 8px 10px"}
    }

    const inputSx: SxProps<Theme> = {
        flexGrow: 1
    }

    return (
        <Box sx={containerSx}>
            <TextField
                value={value}
                label={name}
                variant="outlined"
                type="text"
                onChange={urlHandle}
                margin='normal'
                sx={inputSx}
                error={!!urlError}
                helperText={urlError}
            />
            <Button
                onClick={onClick}
                variant="outlined"
                sx={buttonSx}
                disabled={!flValid}
            >
                {buttonName}
            </Button>
            <Button
                variant="outlined"
                sx={buttonSx}
                href={value}
                target="_blank"
                disabled={!flValid}
            >
                Browse
            </Button>
        </Box>
    );
};

export default UrlInput;