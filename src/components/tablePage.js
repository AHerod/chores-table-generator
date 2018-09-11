import React from "react";
import {Link} from "react-router-dom";
import Previous from "./previous";
import PDFExport from "@progress/kendo-react-pdf/dist/npm/PDFExport";
import NewTable from "./newTable";
import Next from "./next";

export default class ChoresTablePage extends React.Component {
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    render() {

        return (
            <div className="mainPageStyle">
                <Link to="/chorelist">
                    <Previous/>
                </Link>
                <h1>Divide up chores</h1>
                <div className="tablePage">

                    <div className="namesList">
                        {this.props.add2}
                    </div>
                    <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4" landscape={true}>
                        {/*<TableChores cellChores={this.props.add4} cellNames ={this.props.add2}/>*/}
                        <NewTable  cellChores={this.props.add4} cellNames ={this.props.add2}/>

                    </PDFExport>

                    <button onClick={this.exportPDFWithComponent} className="btnDownLoad btn grow">DOWNLOAD</button>

                </div>
                <Link to="final">
                    <Next/>
                </Link>
                <div className="tools"></div>

            </div>
        )
    }
}
