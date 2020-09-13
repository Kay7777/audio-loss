import React from "react";
import { CircularProgress, Fab } from "@material-ui/core";

class TestMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount = async () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 1; j < 9; j++) {
                const audio1 = new Audio(process.env.PUBLIC_URL + "/loss-audios/0" + i + j + ".wav");
                const audio2 = new Audio(process.env.PUBLIC_URL + "/mask-audios/0" + i + j + ".wav");
                audio1.volume = 0;
                audio2.volume = 0;
                await audio1.play();
                await audio2.play();
                audio1.pause();
                audio2.pause();
            }
        }
        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;
        return (
            loading
                ?
                <div>
                    <CircularProgress />
                    <h2>Loading data ...</h2>
                </div>
                :
                <div style={{ backgroundColor: "grey", position: "fixed", height: "100%", width: "100%" }}>
                    <div className="row" style={{ height: "25%" }}>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>1</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>2</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>3</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>4</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>5</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>6</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>7</button>
                        <button style={{ color: "red", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>8</button>
                    </div>
                    <div className="row" style={{ height: "25%" }}>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>1</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>2</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>3</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>4</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>5</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>6</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>7</button>
                        <button style={{ color: "green", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>8</button>
                    </div>
                    <div className="row" style={{ height: "25%" }}>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>1</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>2</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>3</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>4</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>5</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>6</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>7</button>
                        <button style={{ color: "blue", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>8</button>
                    </div>
                    <div className="row" style={{ height: "25%" }}>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>1</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>2</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>3</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>4</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>5</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>6</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>7</button>
                        <button style={{ color: "white", border: "none", background: "none", width: "12.5%", fontSize: 80 }}>8</button>
                    </div>
                </div>
        )
    }
}

export default TestMain;