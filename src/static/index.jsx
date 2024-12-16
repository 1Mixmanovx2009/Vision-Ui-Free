import HomeImg from '../Assets/images/default.svg'
import ChartImg from '../Assets/images/chart.svg'
import CardImg from '../Assets/images/card.svg'
import SettingsImg from '../Assets/images/Settings.svg'

import Recet from '../Assets/images/recet.svg'
import Build from '../Assets/images/build.svg'
import Wallet from '../Assets/images/wallet.svg'
import Wallet2 from '../Assets/images/wallet2.svg'
import Globe from '../Assets/images/globe.svg'
import Document from '../Assets/images/document.svg'
import Cart from '../Assets/images/cart.svg'
import Cart2 from '../Assets/images/cart2.svg'

import Avatar5 from '../Assets/images/Members (1).svg'
import Avatar4 from '../Assets/images/Avatar4.svg'
import Layer from '../Assets/images/Layer 2 1.svg'
import Avatar2 from '../Assets/images/Avatar2.svg'
import Group3 from '../Assets/images/Group 3.svg'
import Group2 from '../Assets/images/Group (2).svg'
import Spotify from '../Assets/images/spotify-2 1.svg'
import Jira from '../Assets/images/jira-3 1.svg'
import Invision from '../Assets/images/invision 1.svg'



export const    NAVBAR_LISTS = [
    {
        id: 1,
        title: "Dashboard",
        img: HomeImg
    },
    {
        id: 2,
        title: "Tables",
        img: ChartImg
    },
    {
        id: 2,
        title: "Billing",
        img: CardImg
    },
    {
        id: 2,
        title: "RTL",
        img: SettingsImg
    },
]

export const MANY_LISTS = [
    {
        id: 1,
        title: "Today’s Money",
        price: "$53,000",
        prise: "+55%",
        img: Wallet
    },
    {
        id: 2,
        title: "Today’s Users",
        price: "2,300",
        prise: "+5%",
        img: Globe
    },
    {
        id: 3,
        title: "New Clients",
        price: "+3,052",
        prise: "-14%",
        img: Document
    },
    {
        id: 4,
        title: "Total Sales",
        price: "$173,000",
        prise: "+8%",
        img: Cart
    },
    
]
export const MANY_LISTS2 = [
    {
        id: 1,
        title: "Users",
        price: "32.984",
        img: Wallet2
    },
    {
        id: 2,
        title: "Clicks",
        price: "2.42",
        img: Recet
    },
    {
        id: 3,
        title: "Sales",
        price: "2.400$",
        img: Cart2
    },
    {
        id: 4,
        title: "Items",
        price: "32.0",
        img: Build
    },
]
export const PROJEKTS_LISTS2 = [
    {
        id: 1,
        title: "Chakra Soft UI Version",
        members: Avatar5,
        budget: "$14,000",
        completion: "60%",
        img: Layer,
    }, 
    {
        id: 2,
        title: "Chakra Soft UI Version",
        members: Avatar2,
        budget: "$3,000",
        completion: "10%",
        img:  Group3,
    },
    {
        id: 3,
        title: "Chakra Soft UI Version",
        members: Avatar2,
        budget: "Not set",
        completion: "100%",
        img: Group2,
    },
    {
        id: 4,
        title: "Chakra Soft UI Version",
        members: Avatar4,
        budget: "$32,000",
        completion: "100%",
        img: Spotify,
    },
    {
        id: 5,
        title: "Chakra Soft UI Version",
        members: Avatar5,
        budget: "$400",
        completion: "25%",
        img: Jira,
    },
    {
        id: 6,
        title: "Chakra Soft UI Version",
        members: Avatar2,
        budget: "$7,600",
        completion: "40%",
        img: Invision,
    },
];
