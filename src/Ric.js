import './App.css';
import Get from "./axiosClient/axiosGet";
import fetchUrl, {KONG_PROXY, NEXRAN_BASE_URL} from "./axiosClient/axiosUrl";

function Ric() {
    // const data = Get(
    //     fetchUrl("/e2mgr/v1/nodeb/states", KONG_PROXY),
    // );
    const data2 = Get(
        fetchUrl("/v1/nodebs", NEXRAN_BASE_URL),
    );
    const slice_data = Get(
        fetchUrl("/v1/slices", NEXRAN_BASE_URL),
    );
    const ue_data = Get(
        fetchUrl("/v1/ues", NEXRAN_BASE_URL),
    );
    return (
        <div className="catalog__section">
            {data2 && <Enodeb data={data2}/>}
            {slice_data && <SliceData data={slice_data}/>}
            {ue_data && <UeData data={slice_data}/>}
        </div>
    );
}


const Enodeb = (data) => {
    const res = data.data.nodebs[0]
    return (
        <div className="card-container-ric blackText">
            <h3 className="rd-global-page-title">NodeB</h3>
            <div className="cell-container ">
                <div className="title-cell-ric">Name:</div>
                <div>{res.name}</div>
            </div>
            <div className="cell-container ">
                <div className="title-cell-ric">Type:</div>
                <div>{res.type}</div>
            </div>
            <div className="cell-container ">
                <div className="title-cell-ric">Slices:</div>
                <div>{JSON.stringify(res.slices)}</div>
            </div>
        </div>
    )
}

const SliceData = (data) => {
    const res = data.data.slices
    return (
        <div className="flex blackText">
            <div className="card-container-ric">
                <h3 className="rd-global-page-title">{res[0].name}</h3>
                <div className="cell-container">
                    <div className="title-cell-ric">Allocation Share</div>
                    <div className="bigFont">{res[0].allocation_policy.share}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">UEs:</div>
                    <div>{JSON.stringify(res[0].ues)}</div>
                </div>
            </div>
            <div className="card-container-ric">
                <h3 className="rd-global-page-title">{res[1].name}</h3>
                {/*<div className="cell-container">*/}
                {/*    <div className="title-cell-ric">Name:</div>*/}
                {/*    <div>{res[1].name}</div>*/}
                {/*</div>*/}
                <div className="cell-container">
                    <div className="title-cell-ric">Allocation Share </div>
                    <br></br>
                    <div className="bigFont">{res[1].allocation_policy.share}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">UEs:</div>
                    <div>{JSON.stringify(res[1].ues)}</div>
                </div>
            </div>
        </div>
    )
}

const UeData = (data) => {
    const res = data.data.slices
    return (
        <div className="flex blackText">
            {res[0] && <div className="card-container-ric">
                <h3 className="rd-global-page-title-ue">UE 1 - First Responder</h3>
                <div className="cell-container">
                    <div className="title-cell-ric">IMSI:</div>
                    <div>{JSON.stringify(res[0].ues)}</div>
                </div>
            </div>}
            {res[1] && <div className="card-container-ric">
                <h3 className="rd-global-page-title-ue">UE 2 - Public User</h3>
                <div className="cell-container">
                    <div className="title-cell-ric">IMSI:</div>
                    <div>{JSON.stringify(res[1].ues)}</div>
                </div>
            </div>}
        </div>
    )
}

export default Ric;
