import {Component, createRef} from "react";
import "../../stylesheet/AboutStyle.scss"

interface State {
    visible: boolean;
}

export class AboutSection extends Component<object, State>{
    private sectionRef = createRef<HTMLElement>();
    private observer: IntersectionObserver | null = null;

    state: State = {
        visible: false
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
            { threshold: 0.15 }
        );

        if (this.sectionRef.current) {
            this.observer.observe(this.sectionRef.current);
        }
    }

    componentWillUnmount() {
        this.observer?.disconnect();
    }

    render(){
        const { visible } = this.state;
        return (
            <section id="about" className="about" ref={this.sectionRef}>
                <div className={`about-inner container ${visible ? "visible" : ""}`}>
                    <div className={"about-grid"}>
                        <div className={"about-text"}>
                            <span className={"section-tag"}>Sobre</span>
                            <h2 className={"section-title"}>Onde impérios<br/>nascem e caem.</h2>
                            <p className="about-desc">
                                Quintilis não é apenas mais um servidor. É uma experiência construída
                                para quem busca profundidade — onde cada bloco colocado, cada aliança
                                formada e cada guerra declarada tem consequências reais.
                            </p>
                            <p className="about-desc">
                                Inspirado pela Roma antiga, Quintilis é o quinto mês —
                                o começo de uma nova era.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-value">1.21.4</span>
                                <span className="stat-label">Versão</span>
                            </div>
                            <div className="stat-decoration">
                                <div className="deco-ring"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}