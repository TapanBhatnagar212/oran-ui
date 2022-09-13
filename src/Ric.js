import './App.css';
import Get from "./axiosClient/axiosGet";
import fetchUrl, {NEXRAN_BASE_URL} from "./axiosClient/axiosUrl";

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
    // const ue_data = Get(
    //     fetchUrl("/v1/ues", NEXRAN_BASE_URL),
    // );
    // if (slice_data) {
    //     console.log("got response ")
    //     console.log(slice_data)
    // }
    // if (ue_data) {
    //     console.log(ue_data)
    // }


    return (
        <div className="catalog__section">
            {data2 && <Enodeb data={data2}/>}
            {slice_data && <SliceData data={slice_data}/>}
            {slice_data && <UeData data={slice_data}/>}
        </div>
    );
}


const Enodeb = (data) => {
    const res = data.data.nodebs[0]
    return (
        <div className="card-container-ric">
            <h3 className="rd-global-page-title">Base Station</h3>
            {/*<div className="cell-container ">*/}
            {/*    <div className="title-cell-ric">Name</div>*/}
            {/*    <div>{res.name}</div>*/}
            {/*</div>*/}
            <div className="cell-container ">
                <div className="title-cell-ric">Type</div>
                <div>{res.type}</div>
            </div>
            <div className="cell-container ">
                <div className="title-cell-ric">Slices</div>
                <div>{JSON.stringify(res.slices)}</div>
            </div>
        </div>
    )
}

const SliceData = (data) => {
    const res = data.data.slices
    return (
        <div className="flex">
            {res ? res.map(slice => {
                return (
                    <div className="card-container-ric" key={slice.name}>
                        <h3 className="rd-global-page-title">{slice.name}</h3>
                        <div className="cell-container">
                            <div className="title-cell-ric">Allocation Share</div>
                            <div className="bigFont">{slice.allocation_policy.share}</div>
                        </div>
                        <div className="cell-container">
                            <div className="title-cell-ric">UEs</div>
                            <div>{slice.ues[0]}</div>
                        </div>
                    </div>
                );
            }) : false}
        </div>
    );
}


const UeData = (data) => {
    const res = data.data.slices
    return (
        <div className="flex">
            {
                res ? res.map(ue => {
                    return (
                        <div className="card-container-ric" key={ue.name}>
                            {ue.ues[0] === "101010123456789"
                                ? <h3 className="rd-global-page-title">First Responder</h3>
                                : <h3 className="rd-global-page-title">Public User</h3>
                            }
                            <div className="cell-container">
                                <div className="title-cell-ric">IMSI</div>
                                <div>{ue.ues[0]}</div>
                            </div>
                        </div>
                    );
                }) : false
            }
        </div>
    );
}

export default Ric;
