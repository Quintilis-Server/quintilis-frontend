import {BasePage} from "./BasePage.tsx";
import type {BaseProps, PageState} from "../types/PageTypes.ts";
import * as React from "react";
import {NavBarComponent} from "../components/home/NavBarComponent.tsx";
import {HeroSection} from "../components/home/HeroSection.tsx";
import {FeatureSection} from "../components/home/FeatureSection.tsx";
import {AboutSection} from "../components/home/AboutSection.tsx";
import {JoinSection} from "../components/home/JoinSection.tsx";

type State = PageState;

export class HomePage extends BasePage<BaseProps, State>{
    state: State = {
        err: undefined,
        loading: false,
        title: "Factions · Economia · Guerra"
    }

    renderContent(): React.JSX.Element {
        return (
            <>
                <NavBarComponent/>
                <main>
                    <HeroSection/>
                    <FeatureSection/>
                    <AboutSection/>
                    <JoinSection/>
                </main>
            </>
        )
    }
}