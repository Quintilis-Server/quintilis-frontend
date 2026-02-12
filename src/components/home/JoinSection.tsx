import {Component, createRef} from "react";
import "../../stylesheet/JoinStyle.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

interface State {
    visible: boolean;
    copied: boolean;
}

export class JoinSection extends Component<object, State>{
    private sectionRef = createRef<HTMLElement>();
    private observer: IntersectionObserver | null = null;

    state: State = {
        visible: false,
        copied: false
    };

    componentDidMount() {
        this.observer = new IntersectionObserver(
            (entries) => { // Usando arrow function aqui
                const [entry] = entries;
                console.log("Observer disparou:", entry.isIntersecting);

                if (entry.isIntersecting) {
                    // Agora o 'this' refere-se corretamente à instância da classe
                    this.setState({ visible: true });

                    // Opcional: Para de observar após ativar a animação
                    if (this.sectionRef.current) {
                        this.observer?.unobserve(this.sectionRef.current);
                    }
                }
            },
            { threshold: 0.2 }
        );

        if (this.sectionRef.current) {
            this.observer.observe(this.sectionRef.current);
        }
    }

    componentWillUnmount() {
        this.observer?.disconnect();
    }

    private copyIp=()=>{
        navigator.clipboard.writeText('play.quintilis.org')
        this.setState({copied: true})
        setTimeout(()=> {this.setState({copied: false})}, 2000)

    }

    render(){
        const {visible, copied} = this.state;
        return (
            <section id="join" className="join" ref={this.sectionRef}>
                <div className="join-bg">
                    <div className="orb orb-center"/>
                </div>

                <div className={`join-inner container ${visible ? 'visible' : ''}`}>
                    <span className="section-tag">Junte-se</span>
                    <h2 className="join-title">Sua história <br/> começa aqui.</h2>
                    <p className="join-desc">
                        Copie o IP, entre no servidor e escreva o próximo capítulo de Quintilis.
                    </p>

                    <div className="join-ip-box" onClick={this.copyIp}>
                        <code className="ip-text">play.quintilis.org</code>
                        <span className="ip-action">{ copied ? 'Copiado!' : 'Clique para copiar' }</span>
                    </div>

                    <div className="join-links">
                        <a href="#" className="link-item" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faDiscord}/>
                            Discord
                        </a>
                        <a href="#" className="link-item" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faGithub}/>
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}