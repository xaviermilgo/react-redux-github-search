import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons/faCircleNotch";


class Gist extends React.Component{
  state = {
    open: [],
  };
  toggleFile(file){
    const {open} = this.state;

    if(!open.includes(file.filename)){
      open.push(file.filename);
      this.setState(
          {open}
      )
    }else{
      open.splice(open.indexOf(file.filename), 1);
      this.setState(
          {open}
      )
    }
  }
  showFile(file){
    return <div className='border-top'>
        <h2 className='text-center w-100 text-muted my-1'>
          <FontAwesomeIcon icon={faCircleNotch} spin/>
        </h2>
    </div>
  }
  // noinspection JSMethodCanBeStaticopenFile
  renderFile(file) {
    const open = this.state.open.includes(file.filename);
    return (
        <Card key={file.raw_url} className='mb-2'>
          <Card.Header className='p-2'>
            <div className='row'>
              <div className='col-11'>
                <b>{file.filename}</b>
              </div>
              <div className='col-1 text-right' onClick={()=>this.toggleFile(file)}>
                <FontAwesomeIcon icon={open?faChevronUp:faChevronDown}/>
              </div>
            </div>
          </Card.Header>
          <Card.Text>
            {open?this.showFile(file):''}
          </Card.Text>
        </Card>
    );
  }

  render() {
    const {gist} = this.props;
    return <div className={'col-12'}>
      {Object.values(gist.files).map(file=>
          this.renderFile(file)
      )}
    </div>
  }
}

const mapStateToProps = (state)=>{
  return {
    gists: state.user.gists.gists,
    isFetching: state.user.gists.isFetching,
    hasError: state.user.gists.hasError
  }
};

export default connect(mapStateToProps)(Gist);