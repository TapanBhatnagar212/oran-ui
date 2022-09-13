import './App.css';
import Get from "./axiosClient/axiosGet";
import fetchUrl, {KONG_PROXY} from "./axiosClient/axiosUrl";


function Xapp() {
    const data = Get(
        fetchUrl("/onboard/api/v1/charts", KONG_PROXY),
    );

    const data2 = Get(
        fetchUrl("/appmgr/ric/v1/xapps", KONG_PROXY),
    );

    return (
        <div className="catalog__section">
            <h3 className="rd-global-page-title">xApp Catalog</h3>
            <div className="flex">
                {
                    data && <OnboardedDetails data={data}/>
                }
                {
                    data2 && <DeployedXappDetails data={data2}/>
                }
            </div>

        </div>
    );
}

const DeployedXappDetails = (data) => {
    const xappDetails = data.data[0]
    console.log(xappDetails)
    return (
        <div className="xapp-dtl-ctnr">
            <h3 className="rd-global-page-title">Deployed xApp</h3>
            <div className="cell-container">
                <div className="title-cell">name: </div>
                <div>{xappDetails.name}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">status: </div>
                <div>{xappDetails.status}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">version: </div>
                <div>{xappDetails.version}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">ip: </div>
                <div>{xappDetails.instances[0].ip}</div>
            </div>
        </div>
    )

}

const OnboardedDetails = (data) => {
    const xappDetails = data.data.nexran[0]
    return (
        <div className="xapp-dtl-ctnr">
            <h3 className="rd-global-page-title">Onboarded xApp</h3>
            <div className="cell-container">
                <div className="title-cell">name: </div>
                <div>{xappDetails.name}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">version: </div>
                <div>{xappDetails.version}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">description: </div>
                <div>{xappDetails.description}</div>
            </div>
            <div className="cell-container">
                <div className="title-cell">created: </div>
                <div>{xappDetails.created}</div>
            </div>
        </div>
    )
}

export default Xapp;
