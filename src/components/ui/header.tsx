import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

type HeaderProps = {
    logoName: string,
    docsLink: string
}

const Header: FC<HeaderProps> = (props) => {
    const {logoName, docsLink} = props;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '56px',
                borderBottom: '1px solid',
                width: '100%'
            }}
        >
            <Typography
                sx={{
                    fontSize: {xs: '1rem', md: '2rem'},
                    marginLeft: '10px'
                }}
            >
                {logoName}
            </Typography>
            <Button
                variant="outlined"
                endIcon={<ArticleIcon/>}
                href={docsLink}
                target="_blank"
                sx={{
                    height: '100%'
                }}
            >
                Our API Doc
            </Button>
        </Box>
    );
};

export default Header;
