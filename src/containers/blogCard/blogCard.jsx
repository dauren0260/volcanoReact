import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { common } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Avatar13 from './avatar13.png';
import Avatar16 from './avatar16.png';
import Avatar20 from './avatar20.png';
import guatemalaBlog from './guatemalaBlog.jpg';
import blogFuji from './blogFujiShen.jpg';
import blogPompei from './pompei.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: "20px auto"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: common.white,
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <div className="blogContainer">
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    <img src={Avatar13} alt="user avatar"/>
                    </Avatar>
                }
                title="火山陪伴夜間賞星"
                subheader="September 14, 2019"
                />
                <CardMedia
                className={classes.media}
                image={guatemalaBlog}
                title="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="textOverFlow">
                現在想一想我們真的是瘋了！ 居然冒著生命危險爬上那麼活躍的火山，只為了近距離看熔漿爆發！ 從我們站的位置， 岩漿是有可能隨時噴到身上的！ 而我們卻為了那令人興奮的景色而不懼安危，現在想想有點不負責任。 當時單單為了記錄這篇日記就要等上幾天，等振奮的心情沉澱下來後才有辦法紀錄我們在十八小時內攻兩座活火山—  富埃戈火山 （Fuego）& 中美第三高峰： 阿卡特南戈火山 （Acatenango）的瘋狂行為！ 而爬完的幾個禮拜後富埃戈火山居然發生大規模的火山爆發，附近死傷慘重，更讓我們感到當初是多麼的幸運！
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    <img src={Avatar16} alt="user avatar"/>
                    </Avatar>
                }
                title="聖山登高挑戰"
                subheader="January 9, 2020"
                />
                <CardMedia
                className={classes.media}
                image={blogFuji}
                title="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="textOverFlow">
                說到日本最具代表的象徵，一定有很多人腦海中首先浮現的是富士山。這座位於山梨縣與靜岡縣交界處的火山，美麗的山型別具辨識度，自古以來也出現在很多日本的藝術名作中，受到日本人的景仰，並於2013年被登錄為世界文化遺產。
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    <img src={Avatar20} alt="user avatar"/>
                    </Avatar>
                }
                title="灰燼下埋藏的古老豪宅"
                subheader="March 25, 2020"
                />
                <CardMedia
                className={classes.media}
                image={blogPompei}
                title="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="textOverFlow">
                龐貝古城的位置距離維蘇威火山只有10公里，真的超級近，在龐貝北方的赫克蘭尼姆古城又距離火山近一點，所以那座小城市是第一個被火山灰給埋葬的城市，之後才輪到龐貝。
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
      
    );
}
