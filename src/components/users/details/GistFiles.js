import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import Gist from 'react-gist'
import moment from "moment";


class GistFiles extends React.Component{
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
  // noinspection JSMethodCanBeStaticopenFile
  renderFile(gist, file) {
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
          <div>
            {open?<Gist id={gist.id} file={file.filename}/>:''}
          </div>
        </Card>
    );
  }
  render() {
    const {gist} = this.props;
    return <div className={'col-12 p-2'}>
      <div className={'border rounded p-2'}>
        gist: <b>{gist.id}</b><br/>
        created: {moment(gist.created_at).fromNow()}<br/>
        <b>Files:</b>
        <div>
        {Object.values(gist.files).map(file=>
            this.renderFile(gist, file)
        )}
        </div>
      </div>
    </div>
  }
}

export default GistFiles;