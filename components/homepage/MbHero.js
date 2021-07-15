import React from 'react';

// Next
import Head from 'next/head';
import Link from '../../src/Link';

//Framer-motion
import { motion } from 'framer-motion';

// Mui
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  avatarmb: {
    width: '80px',
    height: '80px',
    boxShadow: '0px 0px 5px 4px rgba(255,214,255,1)',
    top: '-20px',
    background: '#fff',
    margin: 'auto 10px',
  },
}));

const socialMediaIcon = [
  {
    name: 'facbook',
    icon: 'fab fa-facebook-square',
    link: 'https://www.facebook.com/',
  },
  {
    name: 'twitter',
    icon: 'fab fa-twitter-square',
    link: 'https://twitter.com/',
  },
  {
    name: 'instagram',
    icon: 'fab fa-instagram-square',
    link: 'https://www.instagram.com/',
  },
];

const MbHero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles/float.css" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div style={{ maxHeight: '200px', overflow: 'hidden' }}>
          <img
            src="./images/hero/hero.jpg"
            alt="12th signal"
            style={{ width: '100%', hegiht: '100%' }}
          />
        </motion.div>
        <div style={{ display: 'flex' }}>
          <motion.div className="nav-logo" style={{ flexGrow: 1 }}>
            <Avatar src="./images/logo/logo.png" className={classes.avatarmb} />
          </motion.div>
          <motion.div>
            <IconButton>
              <a href="https://www.facebook.com/%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B9%91%E0%B9%92-317512615013738/">
                <Icon
                  className="fab fa-facebook-square"
                  style={{
                    color: 'black',
                    marginRight: '0.5rem',
                    fontSize: '2rem',
                  }}
                />
              </a>
            </IconButton>
            <IconButton>
              <Icon
                className="fab fa-twitter-square"
                style={{
                  color: 'black',
                  marginRight: '0.5rem',
                  fontSize: '2rem',
                }}
              />
            </IconButton>
            <IconButton>
              <Icon
                className="fab fa-instagram-square"
                style={{
                  color: 'black',
                  marginRight: '0.5rem',
                  fontSize: '2rem',
                }}
              />
            </IconButton>
          </motion.div>
        </div>
        <Typography
          variant="h2"
          color="primary"
          style={{ fontSize: '18px' }}
          align="center"
        >
          กองพันทหารสื่อสารที่ 12 UNIT SCHOOL
        </Typography>
      </motion.div>
    </>
  );
};

export default MbHero;
