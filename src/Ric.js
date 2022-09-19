import React, {useState, useEffect} from 'react';
import './App.css';
import Get from "./axiosClient/axiosGet";
import fetchUrl, {NEXRAN_BASE_URL} from "./axiosClient/axiosUrl";
import axios from "axios";

const Ric = () => {
    const [nodeData, setNodeData] = useState(null);
    const [sliceData, setSliceData] = useState(null);

    const getNodeData = () => {
        axios.get(fetchUrl("/v1/nodebs", NEXRAN_BASE_URL))
            .then(
                response => {
                    setNodeData(response.data)
                }
            ).catch( ex => console.log(ex))
    }

    const getSliceData = () => {
        axios.get(fetchUrl("/v1/slices", NEXRAN_BASE_URL))
            .then(
                response => {
                    setSliceData(response.data)
                }).catch( ex => console.log(ex))
    }

    useEffect(() => {
        console.log("test")
        getNodeData()
        const interval = setInterval(getSliceData, 2000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="catalog__section">
            {nodeData && <Node data={nodeData}/>}
            {sliceData && <Slice data={sliceData}/>}
            {sliceData && <Ue data={sliceData}/>}
        </div>
    );
}


const Node = (data) => {
    const res = data.data.nodebs[0]
    return (
        <div className="card-container-ric">
            <h3 className="rd-global-page-title">Base Station</h3>
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

const Slice = (data) => {
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


const Ue = (data) => {
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
