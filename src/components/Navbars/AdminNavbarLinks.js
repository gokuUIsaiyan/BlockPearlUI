import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useConnectWallet, useDisconnectWallet} from "store/hooks/wallet";
import {createWeb3Modal} from "utils/createWeb3Modal";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Identicon from 'identicon.js';
import {infoColor} from "../../assets/jss/material-dashboard-react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    wallet:{
        color: infoColor[0],
        borderColor: infoColor[0]
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const {
        connectWallet,
        web3,
        address,
        networkId,
        connected,
        connectWalletPending,
    } = useConnectWallet();
    const {disconnectWallet} = useDisconnectWallet();
    const [web3Modal, setModal] = useState(null);

    useEffect(() => {
        setModal(createWeb3Modal());
        console.log('Created web3Modal');
    }, [setModal]);

    useEffect(() => {
        if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
            connectWallet(web3Modal);
        }
    }, [web3Modal, connectWallet]);

    useEffect(() => {
        if (
            web3 &&
            address &&
            !connectWalletPending &&
            networkId &&
            Boolean(networkId !== Number(process.env.REACT_APP_NETWORK_ID))
        ) {
            alert('Network-Error');
        }
    }, [web3, address, networkId, connectWalletPending]);

    const publicKey = () => {
        return `${address.slice(0, 10)}... `;
    };

    const profile = () => {
        if (connected) {
            return (
                <Button
                    variant="outlined"
                    className={classes.wallet}
                    onClick={() => disconnectWallet(web3, web3Modal)}
                    startIcon={
                        <Avatar
                            src={`data:image/png;base64,${new Identicon(
                                address,
                                30,
                            ).toString()}`}
                        />
                    }
                >
                    {publicKey()}
                </Button>
            );
        }
        return (
            <div>
                <Button
                    variant="outlined"
                    className={classes.wallet}
                    onClick={() => connectWallet(web3Modal)}
                >
                    Connect your Wallet
                </Button>
            </div>
        );
    };


    return (
        <div className={classes.root}>
            {profile()}
        </div>
    );
}
