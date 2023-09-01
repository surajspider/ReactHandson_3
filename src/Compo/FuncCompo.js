import React, { useState } from 'react'
import ClassCompo from './ClassCompo';

function FuncCompo() {
    var [state, setsState] = useState({
        name: "",
        dept: "",
        rating: "",
        empdata: []
    });
    var [toggle, setToggle] = useState(true);
    var handleChange = (e) => {
        var updatestate = { ...state };
        updatestate[e.target.name] = e.target.value;
        setsState(updatestate);
        console.log(state.name);
        console.log(state.dept);
        console.log(state.rating);
    }
    var handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.name);
        console.log(state.dept);
        console.log(state.rating);
        var namelen = state.name.length;
        var deptlen = state.dept.length;
        if (namelen === 0 || namelen > 14) {
            alert("Name must have atleast 1-14 characters!")
        }
        else if (deptlen === 0 || deptlen > 25) {
            alert("Dept. name must have atleast 1-25 characters!")
        }
        else if (state.rating.length === 0 || state.rating > 5 || state.rating === null) {
            alert("Rating must be btwn 1-5!!")
        }
        else {
            var temp = {
                name: state.name,
                dept: state.dept,
                rating: state.rating
            };
            var updatedempdata = [...state.empdata, temp];
            setsState({
                name: "",
                dept: "",
                rating: "",
                empdata: updatedempdata,
            });
            setToggle(!toggle);
            console.log(updatedempdata);
            console.log(toggle);

        }
    }
    var toggleFunc = (() => {
        setToggle(!toggle);
    })
    return (
        <div>
            <h1>Employee Feedback Form</h1>
            {toggle ? (< form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" className="inputbox" name="name" value={state.name} onChange={handleChange} /><br />
                <label htmlFor='dept'>Department:</label>
                <input type="text" id="dept" className="inputbox" name="dept" value={state.dept} onChange={handleChange} /><br />
                <label htmlFor='rating'>Rating:</label>
                <input type="number" id="rating" className="inputbox" name="rating" value={state.rating} onChange={handleChange} /><br />
                <input type="submit" className="submitbut" value="Submit" />
            </form>
            ) : <ClassCompo data={{ state, setsState }} toggleFunc={toggleFunc} />}
        </div >
    )
}


export default FuncCompo;