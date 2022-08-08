import './App.css';
import Get from "./axiosClient/axiosGet";
import fetchUrl from "./axiosClient/axiosUrl";

function Ric() {
    const data = Get(
        fetchUrl("/e2mgr/v1/nodeb/states"),
    );
    return (
        <div className="catalog__section">
            <h3 className="rd-global-page-title">NodeB Data</h3>
            {data && <Table data={data}/>}
        </div>
    );
}

const Table = (data) => {
    const details = data.data[0]
    return (
        <div>
            <div className="cell-container margin100">
                <div className="title-cell">InventoryName: </div>
                <div>{details.inventoryName}</div>
            </div>
            <div className="cell-container margin100">
                <div className="title-cell">ConnectionStatus: </div>
                <div>{details.connectionStatus}</div>
            </div>
        </div>

    )
}

export default Ric;
