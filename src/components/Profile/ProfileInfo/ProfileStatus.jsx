import React from "react";

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || 'Have no status'}</span></div>
                    : <div><input autoFocus={true}
                                  onChange={this.onStatusChange}
                                  onBlur={this.deactivateEditMode}
                                  value={this.state.status}/></div>
                }
            </div>
        )
    }
}