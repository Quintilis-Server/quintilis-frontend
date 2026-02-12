import {Component} from "react";
import "../../stylesheet/HeroStyle.scss"
interface State{
    visible: boolean
}

export class HeroSection extends Component<object, State>{
    state: State = {
        visible: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({visible: true})
        }, 100)
    }
    render(){
        return(
            <section className="hero">
                <div className="bg">
                    <div className="orb org-1"/>
                    <div className="orb org-2"/>
                    <div className="grid-lines"/>
                    <div className="noises"/>
                </div>
                <div className={`content container ${this.state.visible ? "visible" : ""}`}>
                    <div className="badge">
                        <span className="badge-dot"></span>
                        Temporada II - Em Breve
                    </div>

                    <h1 className="title">
                        <span className="line line-1">Construa.</span>
                        <span className="line line-2">Domine.</span>
                        <span className="line line-3">Conquiste.</span>
                    </h1>

                    <p className="sub">
                        Um servidor de Factions onde cada decisão importa.<br/>
                        Economia real, alianças frágeis e guerras que mudam o mapa.
                    </p>

                    <div className="actions">
                        <a href="#join" className="btn-primary">Começar a Jogar</a>
                        <a href="#features" className="btn-ghost">Descubra Mais</a>
                    </div>

                    <div className="ip">
                        <span className="ip-label">IP</span>
                        <code className="ip-value">play.quintilis.org</code>
                    </div>

                    <div className={`scroll-indicator ${this.state.visible ? "visible" : ""}`} >
                        <div className="scroll-line"></div>
                    </div>
                </div>
            </section>
        )
    }
}