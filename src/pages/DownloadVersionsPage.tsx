import {BasePage} from "./BasePage.tsx";
import type {BaseProps, PageState} from "../types/PageTypes.ts";
import "../stylesheet/DownloadVersionsStyle.scss"
import {NavBarComponent} from "../components/home/NavBarComponent.tsx";
import {Component} from "react";
import {API_FORUM_ROUTES, CDN_URL} from "../Consts.ts";
import type {PageResponse} from "../types/ApiResponseType.ts";

type Version = {
    id: number
    created_at: Date
    displayName: string
    fileName: string
    imageUrl: string
}
class VersionComponent extends Component<Version, any>{
    render() {
        return <div className="version">
            <img src={this.props.imageUrl} alt={this.props.displayName}/>
            <p>{this.props.displayName}</p>
            <a
                href={`${CDN_URL}/versions/${this.props.fileName}`}
                className="join-ip-box"
                style={{margin:0}}
            >Download</a>
        </div>;
    }
}

type state = PageState & {
    versions: Version[]
}
export class DownloadVersionsPage extends BasePage<BaseProps, state>{
    state: state = {
        loading: false,
        title: "Versões",
        versions: []
    }
    async componentDidMount() {
        super.componentDidMount();
        const versions = await this.get<PageResponse<Version>>(`${API_FORUM_ROUTES}/version/all`)
        this.setState({
            versions: versions.data.data.content
        })
    }

    protected renderContent(): React.ReactNode {
        const {versions} = this.state
        return (
            <>
                <NavBarComponent fixed={false}/>
                <main className="versions">
                    <div className="versions-inner">
                        <h1>Versões</h1>
                        <p>Qualquer versão de mine com o voice chat ja consegue entrar no Quintilis.</p>
                        <p>Esse são templates das compativeis com o servidor. Pode criar sua versão</p>
                        <p>A versão do jogo é <code>1.21.11</code></p>
                        <div className="list">
                            {versions.map(v=>(
                                <VersionComponent
                                    displayName={v.displayName}
                                    id={v.id}
                                    created_at={v.created_at}
                                    fileName={v.fileName}
                                    imageUrl={v.imageUrl}
                                    key={v.id}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </>
        )
    }

}