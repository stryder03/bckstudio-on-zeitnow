/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

/// <reference types="node_modules/@types/use-global-hook/index.d.ts" />

import {AppProps} from "next/app"
import {Event} from "@sentry/types"
import {ReactNode} from "react";
import firebase from "firebase/app"
import {User} from "firebase";

export interface BckUser{
    id: string,
    token: string | undefined,
    email: string | null
}

export interface MembershipTier {
    title: string,
    price: number,
    description: [string],
    buttonVariant: "text" | "outlined" | "contained",
    buttonText: string,
    inputValue: string,
    term: "Month" | "Pass",
}

export interface BckAppProps extends AppProps {
    err: Event;
    children?: ReactNode;
    user?: BckUser;
    logout?: firebase.auth.Auth;
    preview?: boolean;
}

export interface PricingProps extends BckAppProps{
    tierCategory: Map<MembershipTier>,
    title: string,
    maxWidth: "lg" | "sm",
}

export interface FirebaseUser extends User{
    xa?: string,
}

export interface PreviewProps{
    page?: string;
    preview?: boolean;
}

export interface faq{
    question: string
    answer: {
        html?: string
        text?: string
        markdown?: string
        raw?: string
    }
}
export interface faqPage{
    listOfFaQs: [faq]
}
export interface faqQueryProp{
    faqPage: faqPage
}
export interface FaqProps extends BckAppProps{
    faqQueryResult: faqQueryProp
}
