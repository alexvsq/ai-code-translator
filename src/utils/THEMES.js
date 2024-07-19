import Monokai from 'monaco-themes/themes/Monokai.json'
import Dracula from 'monaco-themes/themes/Dracula.json'
import TomorrowNightBlue from 'monaco-themes/themes/Tomorrow-Night-Blue.json'
import TomorrowNight from 'monaco-themes/themes/Tomorrow-Night.json'
import NightOwl from 'monaco-themes/themes/Night Owl.json'
import BlackBoard from 'monaco-themes/themes/Blackboard.json'
import Cobalt from 'monaco-themes/themes/Cobalt.json'
import GithubDark from 'monaco-themes/themes/GitHub Dark.json'

const themes = [
    {
        id: 'onedark',
        name: 'One Dark',
        theme: '',
        backgroundColor: '#0e0e0f',
        backgroundColorWeb: '#fff',
        backgroundGradient: 'linear-gradient(315deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
    },
    {
        id: 'nightOwl',
        name: 'Night Owl',
        theme: NightOwl,
        backgroundColor: '#011627',
        backgroundColorWeb: '#0a9bff',
        backgroundGradient: 'linear-gradient(315deg, rgba(5,116,163,1) 0%, rgba(9,167,235,1) 100%)'
    },
    {
        id: 'tomorrowNightBlue',
        name: 'Tomorrow Night Blue',
        theme: TomorrowNightBlue,
        backgroundColor: '#002451',
        backgroundColorWeb: '#8F36DF',
        backgroundGradient: 'linear-gradient(315deg, rgba(144,54,223,1) 0%, rgba(142,53,222,1) 100%)'
    },
    {
        id: 'dracula',
        name: 'Dracula',
        theme: Dracula,
        backgroundColor: '#282a36',
        backgroundColorWeb: '#7C49DE',
        backgroundGradient: 'linear-gradient(315deg, rgba(77,83,222,1) 0%, rgba(169,73,222,1) 100%)'
    },
    {
        id: 'tomorrowNight',
        name: 'Tomorrow Night',
        theme: TomorrowNight,
        backgroundColor: '#1d1f21',
        backgroundColorWeb: '#8A94DB',
        backgroundGradient: 'linear-gradient(315deg, rgba(68,204,191,1) 0%, rgba(162,143,249,1) 100%)'
    },
    {
        id: 'monokai',
        name: 'Monokai',
        theme: Monokai,
        backgroundColor: '#272822',
        backgroundColorWeb: '#D8814D',
        backgroundGradient: 'linear-gradient(315deg, rgba(120,54,53,1) 0%, rgba(240,157,62,1) 100%)'
    }, {
        id: 'blackboard',
        name: 'Blackboard',
        theme: BlackBoard,
        backgroundColor: '#0c1021',
        backgroundColorWeb: '#3F2C8B',
        backgroundGradient: 'linear-gradient(315deg, rgba(5,116,163,1) 0%, rgba(9,167,235,1) 100%)'
    }, {
        id: 'cobalt',
        name: 'Cobalt',
        theme: Cobalt,
        backgroundColor: '#002240',
        backgroundColorWeb: '#4c2a9e',
        backgroundGradient: 'linear-gradient(315deg, rgba(5,116,163,1) 0%, rgba(9,167,235,1) 100%)'
    }, {
        id: 'githubDark',
        name: 'Github Dark',
        theme: GithubDark,
        backgroundColor: '#24292e',
        backgroundColorWeb: '#353535',
        backgroundGradient: 'linear-gradient(315deg, rgba(5,116,163,1) 0%, rgba(9,167,235,1) 100%)'
    }
]

export default themes