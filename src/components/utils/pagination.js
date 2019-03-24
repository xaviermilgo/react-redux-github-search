import React from "react";
import {Pagination, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons";

class Paginator extends React.Component{
  constructor(props) {
    super(props);
    const {per_page} = props;
    const currentItems = props.children.slice(0,per_page);
    const tabs = [...Array(props.children.length).keys()].filter(_=>_%per_page===0);
    this.state = {currentItems, tabs, current: 0}
  }

  switchTo(number){
    const {per_page} = this.props;
    this.setState({
          current: number,
          currentItems: this.props.children.slice(number, number+per_page)
        }
    )
  }
  render() {
    const last = this.state.tabs[this.state.tabs.length-1];
    const {current} = this.state;
    const {per_page} = this.props;
    return (
        <div className={this.props.className||''}>
          <div>
            <Pagination>
              <Pagination.First onClick={()=>this.switchTo(0)} disabled={current===0}/>
              <Pagination.Prev onClick={()=>this.switchTo(current-per_page)} disabled={current===0}/>
              {this.state.tabs.map((number, index) =>
                  <Pagination.Item
                      key={number} active={current === number}
                      onClick={()=>this.switchTo(number)}>
                    {index}
                  </Pagination.Item>
              )}
              <Pagination.Next onClick={()=>this.switchTo(current+per_page)}
                               disabled={last===current}/>
              <Pagination.Last onClick={()=>this.switchTo(last)} disabled={last===current}/>
            </Pagination>
          </div>
          <Row>
            {this.state.currentItems.length>0?this.state.currentItems:
            <div className='w-100 text-muted'>
              <div className='w-100 text-center h5'>
                No items Found
                &nbsp;
                <FontAwesomeIcon icon={faFrown}/>
              </div>
            </div>
            }
          </Row>
        </div>
    );
  }
}

export default Paginator;