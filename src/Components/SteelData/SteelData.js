import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress
  } from 'reactstrap';
import "./SteelData.css"

class SteelData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_div: false,
            first_sub_category_div: false,
            second_sub_category_div: false,
            third_sub_category_div: false
        }

        this.FactoryData = this.FactoryData.bind(this);
        this.FactoryDataA = this.FactoryDataA.bind(this);
        this.FactoryDataB = this.FactoryDataB.bind(this);
        this.FactoryDataC = this.FactoryDataC.bind(this);
    }
    componentDidMount() {

    }


    FactoryData() {
        this.setState({
            category_div: !this.state.category_div,
        });
    }

    FactoryDataA() {
        this.setState({
            first_sub_category_div: !this.state.first_sub_category_div,
            second_sub_category_div: false,
            third_sub_category_div: false
        })
    }

    FactoryDataB () {
        this.setState({
            first_sub_category_div: false,
            second_sub_category_div: !this.state.second_sub_category_div,
            third_sub_category_div: false
        })
    }

    FactoryDataC () {
        this.setState({
            first_sub_category_div: false,
            second_sub_category_div: false,
            third_sub_category_div: !this.state.third_sub_category_div
        })
    }

  render() {
    return (
        <div>
            {/* Main Card */}
            <Card className="details-card" onClick={this.FactoryData}>
                <CardBody>
                    <div> <span className="text-1">TATA STEEL</span> <span className="text-2"><b>50%</b> &nbsp;complete</span> </div>
                    <CardText style={{marginTop:'51px'}}>
                        <p className="text-3">Total Sales - 200 Crore</p>
                        <p className="text-4">Target Sales - 400 Crore</p>
                        <Button className="off-track" color="warning">Off Track</Button>
                        <Progress color="warning" value={50} style={{backgroundColor:'#F9EBD6'}} />
                    </CardText>
                </CardBody>
            </Card>

            {/* Categories */}
            {
                this.state.category_div? <div className="category-div">
                <hr className="c1-hr-line"></hr>
                <span class="c1-vl-1"></span>
                <span class="c1-vl-2"></span>
                <span class="c1-vl-3"></span>
                <Card className="cat-details-card c-1" onClick={this.FactoryDataA}>
                    <CardBody>
                        <div> <span className="text-1"> Factory A</span> <span className="text-2"><b>20%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 20 Crore</p>
                            <p className="text-4">Target Sales - 100 Crore</p>
                            <Button className="at-risk" color="danger">At Risk</Button>
                            <Progress color="danger" value={50} style={{backgroundColor: '#F8D1D1'}} />
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="cat-details-card" onClick={this.FactoryDataB}>
                    <CardBody>
                        <div> <span className="text-1">Factory B</span> <span className="text-2"><b>75%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 150 Crore</p>
                            <p className="text-4">Target Sales - 200 Crore</p>
                            <Button className="on-track" color="success">On Track</Button>
                            <Progress color="success" value={50} style={{backgroundColor:'#D2F2E5'}} />
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="cat-details-card" onClick={this.FactoryDataC}>
                    <CardBody>
                        <div> <span className="text-1">Factory C</span> <span className="text-2"><b>30%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 30 Crore</p>
                            <p className="text-4">Target Sales - 100 Crore</p>
                            <Button className="off-track" color="warning">Off Track</Button>
                            <Progress color="warning" value={50} style={{backgroundColor:'#F9EBD6'}}/>
                        </CardText>
                    </CardBody>
                </Card>
            </div> :null
            }
            

            {/* 1st Sub Categories */}
            {
                this.state.first_sub_category_div ? <div style={{display:'flex'}}>
                    <hr className="c2-hr-line"></hr>
                <span class="c2-vl-1"></span>
                <span class="c2-vl-2"></span>
                <Card className="cat-details-card c-2">
                    <CardBody>
                        <div> <span className="text-1"> Godown A</span> <span className="text-2"><b>20%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 10 Crore</p>
                            <p className="text-4">Target Sales - 50 Crore</p>
                            <Button className="at-risk" color="danger">At Risk</Button>
                            <Progress color="danger" value={50} style={{backgroundColor: '#F8D1D1'}}/>
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="cat-details-card">
                    <CardBody>
                        <div> <span className="text-1">Godown B</span> <span className="text-2"><b>20%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 10 Crore</p>
                            <p className="text-4">Target Sales - 50 Crore</p>
                            <Button className="at-risk" color="danger">At Risk</Button>
                            <Progress color="danger" value={50} style={{backgroundColor: '#F8D1D1'}} />
                        </CardText>
                    </CardBody>
                </Card>
                </div> : null
            }

            

            {/* 2nd Sub Categories */}
            {
                this.state.second_sub_category_div ? <div style={{display:'flex'}}>
                    <hr className="c3-hr-line"></hr>
                <span class="c3-vl-1"></span>
                <span class="c3-vl-2"></span>
                <Card className="cat-details-card c-3">
                    <CardBody>
                        <div> <span className="text-1"> Godown A</span> <span className="text-2"><b>80%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 80 Crore</p>
                            <p className="text-4">Target Sales - 100 Crore</p>
                            <Button className="on-track" color="success">On Track</Button>
                            <Progress color="success" value={50} style={{backgroundColor:'#D2F2E5'}}/>
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="cat-details-card">
                    <CardBody>
                        <div> <span className="text-1">Godown B</span> <span className="text-2"><b>70%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 70 Crore</p>
                            <p className="text-4">Target Sales - 100 Crore</p>
                            <Button className="on-track" color="success">On Track</Button>
                            <Progress color="success" value={50} style={{backgroundColor:'#D2F2E5'}}/>
                        </CardText>
                    </CardBody>
                </Card>
            </div> : null
            }
            

            {/* 3rd Sub Categories */}
            {
                this.state.third_sub_category_div ? <div style={{display:'flex'}}>
                    <hr className="c4-hr-line"></hr>
                <span class="c4-vl-1"></span>
                <span class="c4-vl-2"></span>
                <Card className="cat-details-card c-4">
                    <CardBody>
                        <div> <span className="text-1"> Godown A</span> <span className="text-2"><b>20%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 10 Crore</p>
                            <p className="text-4">Target Sales - 50 Crore</p>
                            <Button className="at-risk" color="danger">At Risk</Button>
                            <Progress color="danger" value={50} style={{backgroundColor: '#F8D1D1'}}/>
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="cat-details-card">
                    <CardBody>
                        <div> <span className="text-1">Godown B</span> <span className="text-2"><b>40%</b> &nbsp;complete</span> </div>
                        <CardText style={{marginTop:'51px'}}>
                            <p className="text-3">Total Sales - 20 Crore</p>
                            <p className="text-4">Target Sales - 50 Crore</p>
                            <Button className="off-track" color="warning">Off Track</Button>
                            <Progress color="warning" value={50} style={{backgroundColor:'#F9EBD6'}}/>
                        </CardText>
                    </CardBody>
                </Card>
                </div> : null
            }
            
        </div>
        
    );
  }
}

export default SteelData;