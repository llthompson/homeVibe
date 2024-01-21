// 

import React, { useState } from 'react';
import { useTheme } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { LooksOneRounded, LooksTwoRounded, Looks3Rounded } from '@mui/icons-material';


// TODO popup hover doesn't actually work lol
// TODO cleanup unused code, add comments

const IconRow = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, icon: string) => {
        setAnchorEl(event.currentTarget);
        setSelectedIcon(icon);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
        setSelectedIcon(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <IconButton
                color="secondary"
                onMouseEnter={(e) => handleMouseEnter(e, 'star')}
                onMouseLeave={handleMouseLeave}
            >
                <LooksOneRounded style={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
                color="secondary"
                onMouseEnter={(e) => handleMouseEnter(e, 'thumbs-up')}
                onMouseLeave={handleMouseLeave}
            >
                <LooksTwoRounded style={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
                color="secondary"
                onMouseEnter={(e) => handleMouseEnter(e, 'checkmark')}
                onMouseLeave={handleMouseLeave}
            >
                <Looks3Rounded style={{ fontSize: 60 }} />
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleMouseLeave}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography>
                    {selectedIcon === 'star' && 'rate standard home features'}
                    {selectedIcon === 'thumbs-up' && 'rate advanced home features'}
                    {selectedIcon === 'checkmark' && 'add and rate custom features'}
                </Typography>
            </Popover>
        </div>
    );
};

export default IconRow;
