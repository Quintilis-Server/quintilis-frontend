import {Component, createRef} from "react";

import "../../stylesheet/FeatureStyle.scss"

import factionIcon from "../../assets/factions.svg?raw"
import economyIcon from "../../assets/economy.svg?raw"
import warIcon from "../../assets/war.svg?raw"

interface State {
    visible: boolean;
}

export class FeatureSection extends Component{
    private sectionRef = createRef<HTMLElement>();
    private observer: IntersectionObserver | null = null;

    state: State = {
        visible: false
    };

    // Dados dos pilares (equivalente ao que você tem no Vue)
    private pillars = [
        {
            icon: factionIcon,
            title: 'Factions',
            desc: 'Forme seu clã, recrute aliados e defenda seu território. Cada facção é uma nação — com leis, hierarquias e ambições próprias.',
        },
        {
            icon: economyIcon,
            title: 'Economia',
            desc: 'Um mercado dinâmico movido por jogadores. Comércio, escassez e oportunidade — a riqueza é conquistada, nunca dada.',
        },
        {
            icon: warIcon,
            title: 'Guerra',
            desc: 'Batalhas em escala que redesenham o mapa. Cercos, emboscadas e diplomacia — a guerra é a continuação da política por outros meios.',
        },
    ];

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

    render() {
        const { visible } = this.state;

        return (
            <section
                id="features"
                className="features"
                ref={this.sectionRef}
            >
                <div className={`features-inner container ${visible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-tag">Pilares</span>
                        <h2 className="section-title">Três forças.<br/>Um destino.</h2>
                    </div>

                    <div className="pillars-grid">
                        {this.pillars.map((p, i) => (
                            <article
                                key={p.title}
                                className={`pillar-card ${visible ? 'visible': ''}`}
                                style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
                            >
                                <div className="pillar-icon" dangerouslySetInnerHTML={{ __html: p.icon }} />
                                <h3 className="pillar-title">{p.title}</h3>
                                <p className="pillar-desc">{p.desc}</p>
                                <div className="pillar-line"></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}