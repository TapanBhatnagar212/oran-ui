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
            {ue_data && <UeData data={ue_data}/>}
        </div>
    );
}

// const Table = (data) => {
//     const details = data.data[0]
//     return (
//         <div>
//             <div className="cell-container margin100">
//                 <div className="title-cell-ric">InventoryName: </div>
//                 <div>{details.inventoryName}</div>
//             </div>
//             <div className="cell-container margin100">
//                 <div className="title-cell-ric">ConnectionStatus: </div>
//                 <div>{details.connectionStatus}</div>
//             </div>
//         </div>
//
//     )
// }

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
                <h3 className="rd-global-page-title">Slice 1</h3>
                <div className="cell-container">
                    <div className="title-cell-ric">Name:</div>
                    <div>{res[0].name}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">Allocation Proportion share:</div>
                    <div>{JSON.stringify(res[0].allocation_policy.share)}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">Ues:</div>
                    <div>{JSON.stringify(res[0].ues)}</div>
                </div>
            </div>
            <div className="card-container-ric">
                <h3 className="rd-global-page-title">Slice 2</h3>
                <div className="cell-container">
                    <div className="title-cell-ric">Name:</div>
                    <div>{res[1].name}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">Allocation Proportion share:</div>
                    <div>{JSON.stringify(res[1].allocation_policy.share)}</div>
                </div>
                <div className="cell-container">
                    <div className="title-cell-ric">Ues:</div>
                    <div>{JSON.stringify(res[1].ues)}</div>
                </div>
            </div>
        </div>
    )
}

const UeData = (data) => {
    const res = data.data.ues
    console.log(res)
    return (
        <div className="flex blackText">
            {res[0] && <div className="card-container-ric">
                <h3 className="rd-global-page-title">UE 1</h3>
                {/*<div className="cell-container">*/}
                {/*    <div className="title-cell-ric">Crnti:</div>*/}
                {/*    <div>{res[0].crnti}</div>*/}
                {/*</div>*/}
                <div className="cell-container">
                    <div className="title-cell-ric">IMSI:</div>
                    <div>{res[0].imsi}</div>
                </div>
                {/*<div className="cell-container">*/}
                {/*    <div className="title-cell-ric">TMSI:</div>*/}
                {/*    <div>{res[0].tmsi}</div>*/}
                {/*</div>*/}
            </div>}
            {res[1] && <div className="card-container-ric">
                <h3 className="rd-global-page-title">UE 2</h3>
                {/*<div className="cell-container">*/}
                {/*    <div className="title-cell-ric">Crnti:</div>*/}
                {/*    <div>{res[1].crnti}</div>*/}
                {/*</div>*/}
                <div className="cell-container">
                    <div className="title-cell-ric">IMSI:</div>
                    <div>{res[1].imsi}</div>
                </div>
                {/*<div className="cell-container">*/}
                {/*    <div className="title-cell-ric">TMSI:</div>*/}
                {/*    <div>{res[1].tmsi}</div>*/}
                {/*</div>*/}
            </div>}
        </div>
    )
}

export default Ric;
