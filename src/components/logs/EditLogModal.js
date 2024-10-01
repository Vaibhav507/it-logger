import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ current, updateLog }) => {

    
    const [ message, setMessage ] = useState('');
    const [ attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState(false);

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current]);

    const onSubmit = () => {
        if(message === '' || tech === '')
            M.toast({ html: 'Please Enter a message and tech'});
        else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLog(updLog);
            M.toast({ html: `Log updated by ${tech}`})

            // Clear Fields
            setMessage("");
            setTech("");
            setAttention(false);
        }
    }

    
    return(
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} onChange={e => setTech(e.target.value)} className="browser-default">
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" value={attention} onChange={e => setAttention(!attention)} className="filled-in" checked={attention}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
};

EditLogModal.propTypes = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

const mapStateToProps = state => ({
    current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);