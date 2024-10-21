import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    КИНОПОИСК
                </Typography>
                { }
                <Button component={Link} to="/" color="inherit">Главное</Button>
                <Button component={Link} to="/my" color="inherit">Мое</Button>
                <Button component={Link} to='/subscriptions' color="inherit">Подписки</Button>
                <Button component={Link} to='/channels' color="inherit">Каналы</Button>
                <Button component={Link} to='/sport' color="inherit">Спорт</Button>
                <Button component={Link} to='/games' color="inherit">Игры</Button>
                { }
                <Button color="inherit">
                    <SearchIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
