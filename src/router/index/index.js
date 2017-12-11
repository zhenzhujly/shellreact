import React, {Component} from 'react';
import '../../style/index.css';
class Summer extends  Component{
    clicks(){
        alert(2);
    };
    render(){
        return (
            <div className="index" onClick={this.clicks}>
                zxc
            </div>
        )
    }
}

export default Summer;