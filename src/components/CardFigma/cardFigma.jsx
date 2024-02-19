import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardFigma({ title: initialTitle, onClick, linkImage }) {
    const [expanded, setExpanded] = React.useState(false);
    const [title, setTitle] = React.useState(initialTitle);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleClick = () => {
        // Chiamare la funzione onClick se è stata fornita come prop
        if (onClick) {
            onClick();
        }
    };
    return (
        <cardFigma>
        <div style={{width: '350px', background: 'white', boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.15)', borderRadius: 8, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}onClick={handleClick}>
            <div style={{alignSelf: 'stretch', padding: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>{title}</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 175, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <img style={{width: 350, height: 175, position: 'relative'}} src="C://Users//UTENTE//IdeaProjects//explore_unisa//src//image//mappaUnisa.png" />
            </div>
            <div style={{alignSelf: 'stretch', height: 146, padding: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
        </div>
        </cardFigma>
    );
}