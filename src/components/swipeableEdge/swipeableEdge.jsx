import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
    overflowY: 'auto', // Abilita lo scorrimento verticale
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const FixedSection = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ScrollableContent = styled('div')(({ theme }) => ({
    overflowY: 'auto',
    maxHeight: 'calc(100% - 112px)', // Altezza massima meno l'altezza della sezione fissa
}));

const InstructionBox = styled(Box)({
    marginLeft: '2px', // Aggiunge un margine sinistro di 2px
});

function SwipeableEdgeDrawer({ istruzioni, distanza, durata }) {
    const { window } = { istruzioni };
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const contentRef = useRef(null);

    useEffect(() => {
        // Aggiorna l'altezza massima del contenitore interno ogni volta che il drawer viene aperto
        if (contentRef.current) {
            const drawerHeight = contentRef.current.parentNode.clientHeight;
            contentRef.current.style.maxHeight = `${drawerHeight}px`;
        }
    }, [open]);

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        overflowY: 'auto',
                        maxHeight: '100%', // Imposta l'altezza massima del contenitore interno
                    }}
                >
                    <Puller />
                    <FixedSection>
                        <Typography sx={{ pb: 2, color: 'text.primary', fontWeight: 'bold'  }}>Segui le indicazioni</Typography>
                        <Divider/>
                        {distanza  && (
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                {distanza > 1000 ? `Distanza totale: ${Math.floor(distanza / 1000)} kilometro e ${Math.floor(distanza % 1000)} metri` : `Distanza totale: ${distanza} metri`}
                            </Typography>
                        )}
                        {durata  && (
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Durata prevista: {Math.floor(durata / 60)} minuti {Math.floor(durata % 60)} secondi
                            </Typography>
                        )}
                    </FixedSection>
                    <ScrollableContent>
                        {istruzioni && istruzioni.length > 0 ? (
                            istruzioni.map((istruzione, index) => (
                                <InstructionBox key={index} sx={{ my: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{istruzione.instruction}</Typography>
                                    {index === istruzioni.findIndex(instr => instr === durata) && ( // Solo per il primo elemento dopo la durata
                                        <div style={{ overflowY: 'auto', maxHeight: 'calc(100% - 112px)' }}>
                                            {istruzioni.slice(index + 1).map((istruzione, index) => ( // Inizia dalla posizione successiva a durata
                                                <Box key={index} sx={{ my: 1 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{istruzione.instruction}</Typography>
                                                    <hr/>
                                                </Box>
                                            ))}
                                        </div>
                                    )}
                                    <hr/>
                                </InstructionBox>
                            ))
                        ) : (
                            <Typography variant="body2">Nessuna istruzione disponibile</Typography>
                        )}
                    </ScrollableContent>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    window: PropTypes.func,
    istruzioni: PropTypes.arrayOf(
        PropTypes.shape({
            distance: PropTypes.string,
            duration: PropTypes.string,
            type: PropTypes.string,
            instruction: PropTypes.string,
            name: PropTypes.string,
            way_points: PropTypes.string,
        })
    ),
    distanza: PropTypes.string,
    durata: PropTypes.string,
};

export default SwipeableEdgeDrawer;
