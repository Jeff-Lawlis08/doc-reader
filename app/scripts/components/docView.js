import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
  getInitialState(){
  return  {read: false,
    confirm: false
  };
  },
  render(){
    if(this.state.read===false && this.state.confirm===false){
    return (
      <div className="doc-div">
        <p>{this.props.doc.documents.body}</p>
        Mark as Read <input onChange={this.handleCheck} type="checkbox"/>
      </div>
    );
  } else if(this.state.read===true && this.state.confirm===false){
    return (
      <div className="modal-background">
        <div className="modal">
          <h3>Do you want to mark as read?</h3>
          <button onClick={this.handleConfirm} className="confirm">Confirm</button>
          <button onClick={this.handleCancel} className="cancel">Cancel</button>
        </div>
          <p>{this.props.doc.documents.body}</p>
          Mark as Read <input checked="true" onChange={this.handleCheck} type="checkbox"/>
      </div>
    );
  } else if(this.state.read===true && this.state.confirm===true){
    return (
    <div className="doc-div">
      <p>{this.props.doc.documents.body}</p>
      Read <input disabled="true" checked="true" type="checkbox"/>
    </div>
  );
  }
  },
  handleCheck(e){
    // console.log(this.state);
this.setState({
  read: true,
  confirm: false
});

},
handleConfirm(e){
  this.setState({
    read: true,
    confirm: true
  });
  // document.getElementById('checkbox').disabled = true;
},
handleCancel(e){
  this.setState({
    read: false,
    confirm: false
  })
}
});
