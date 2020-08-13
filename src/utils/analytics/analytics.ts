import ReactGA from 'react-ga'

export const initGA = (userId: string | undefined) => {
    if (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV !== "development") {
        ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID!, {
            gaOptions: {
                siteSpeedSampleRate: 100,
                userId: userId
            }
        })
    }
}

export const logPageView = () => {
    if (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV !== "development") {
        ReactGA.set({page: window.location.pathname})
        ReactGA.pageview(window.location.pathname)
    }
}

export const logEvent = (category = '', action = '') => {
    if (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV !== "development") {
        if (category && action) {
            ReactGA.event({category, action})
        }
    }
}

export const logModalView = (name: string) => {
    if (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV !== "development") {
        if (name) {
            ReactGA.modalview(name)
        }
    }
}


