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

    // Tried a cool hover feature, didn't get it working
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, icon: string | null) => {
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
                onMouseEnter={(e) => handleMouseEnter(e, 'LooksOneRounded')}
                onMouseLeave={handleMouseLeave}
            >
                <LooksOneRounded style={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
                color="secondary"
                onMouseEnter={(e) => handleMouseEnter(e, 'LooksTwoRounded')}
                onMouseLeave={handleMouseLeave}
            >
                <LooksTwoRounded style={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
                color="secondary"
                onMouseEnter={(e) => handleMouseEnter(e, 'Looks3Rounded')}
                onMouseLeave={handleMouseLeave}
            >
                <Looks3Rounded style={{ fontSize: 60 }} />
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleMouseLeave}
                onMouseEnter={(e) => handleMouseEnter(e, selectedIcon)}
                onMouseLeave={handleMouseLeave}
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
                    {selectedIcon === 'LooksOneRounded' && 'rate home features'}
                    {selectedIcon === 'LooksTwoRounded' && 'create custom home features'}
                    {selectedIcon === 'Looks3Rounded' && 'get your personalized list!'}
                </Typography>
            </Popover>

        </div>
    );
};

export default IconRow;
