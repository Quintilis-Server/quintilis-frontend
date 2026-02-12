import {BaseComponent} from "../BaseComponent.tsx";
import type {BaseState} from "../../types/PageTypes.ts";
import "../../stylesheet/NavBarStyle.scss"

type State = BaseState & {
    scrolled:boolean;
    menuOpen:boolean;
}

export class NavBarComponent extends BaseComponent<object,State>{
    state:State ={
        loading: false,
        err: undefined,
        scrolled: false,
        menuOpen:false
    };
    private handleScroll = () =>{
        this.setState({scrolled: window.scrollY>40})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    private closeMenu = () =>{
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-inner container">
                    <a href="#" className="nav-logo">
                        <span className="logo-letter">Q</span>
                        <span className="logo-text">uintilis</span>
                    </a>

                    <div className={`nav-links ${this.state.menuOpen ? 'open' : ''}`}>
                        <a href="#features" onClick={this.closeMenu}>Pilares</a>
                        <a href="#about" onClick={this.closeMenu}>Sobre</a>
                        <a href="#join" onClick={this.closeMenu}>Junte-se</a>
                    </div>

                    <a href="#join" className="nav-cta">Jogar</a>

                    <button className="nav-toggle" onClick={()=>this.setState((e)=>({menuOpen:!e.menuOpen}))}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        )
    }
}