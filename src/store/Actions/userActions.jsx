import { saveUser, removeUser } from "../reducer/userReducer";
import { saveemploye,removeemploye} from "../reducer/employeReducer";
import axios from "../../config/axios";
import { saveinternship } from "../reducer/internshipReducer";


export const asynccurrentuser = () => async (dispatch, getState) =>{
    try {
        const { data } = await axios.post("/student",)
        dispatch(saveUser(data.student));
        console.log(data);
    } catch (error) {
        console.log(error.response);
    };
};

export const asyncsignup = (user) => async (dispatch, getState) =>{
    try {
        await axios.post("/student/signup", user);
       dispatch(asynccurrentuser());
        console.log(user);
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncsignin = (user) => async (dispatch, getState) =>{
    try {
        await axios.post("/student/signin", user);
        dispatch(asynccurrentuser());
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncremoveuser = () => async (dispatch, getState) =>{
    try {
        await axios.get("/student/signout");
        dispatch(removeUser());
        console.log(data);
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncsendmail = (user) => async (dispatch, getState) =>{
    try {
        await axios.post("/student/send-mail",user);
        dispatch(asyncsendmail());
        console.log(user);
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncchangepassword = (user) => async (dispatch, getStates) =>{
    try {
        console.log(user);
        await axios.post("/student/forget-link/"+user.id, user);
       dispatch(asyncchangepassword(user));
    } catch (error) {
        console.log(error);
    }
};

export const asyncresetpassword = (user) => async (dispatch, getStates) =>{
    try {
        console.log(user);
        await axios.post("/student/reset-password/"+user.id, user);
       dispatch(asyncresetpassword(user));
    } catch (error) {
        console.log(error);
    }
};

export const asyncuserupdate = (user) => async (dispatch, getStates) =>{
    try {
        await axios.post("/student/update/"+user.id, user);
       dispatch(asyncuserupdate(user));
        // console.log(user);
    } catch (error) {
        console.log(error);
    }
};

// employe part

export const asynccurrentemploye = () => async (dispatch, getState) =>{
    try {
        const {data } = await axios.post("/employe/current")
        dispatch(saveemploye(data.employe));
        // console.log(data);
    } catch (error) {
        console.log(error.response);
    };
};


export const asyncemployesignup = (employe) => async (dispatch, getState) =>{
    try {
        await axios.post("/employe/signup", employe);
       dispatch(asynccurrentemploye(employe));
        
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncemployesignin = (employe) => async (dispatch, getState) =>{
    try {
        await axios.post("/employe/signin", employe);
        dispatch(asynccurrentemploye());
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncremoveemploye = () => async (dispatch, getState) =>{
    try {
        await axios.get("/employe/signout");
        dispatch(removeemploye());
        // console.log(data);
    } catch (error) {
        console.log(error.response);
    }
};


export const asyncemployeupdate = (employe) => async (dispatch, getStates) =>{
    try {
        await axios.post("/employe/update/"+employe.id, employe);
       dispatch(asynccurrentemploye(employe));
        
    } catch (error) {
        console.log(error);
    }
};


export const asyncemployesendmail = (employe) => async (dispatch, getState) =>{
    try {
        await axios.post("/employe/send-mail",employe);
        dispatch(asyncemployesendmail());
        console.log(employe);
    } catch (error) {
        console.log(error.response);
    }
};

export const asyncemployechangepassword = (employe) => async (dispatch, getStates) =>{
    try {
        console.log(employe);
        await axios.post("/employe/forget-link/"+employe.id, employe);
       dispatch(asyncemployechangepassword(employe));
    } catch (error) {
        console.log(error);
    }
};


export const asyncemployeresetpassword = (employe) => async (dispatch, getStates) =>{
    try {
        console.log(employe);
        await axios.post("/employe/reset-password/"+employe.id, employe);
       dispatch(asyncemployeresetpassword(employe));
    } catch (error) {
        console.log(error);
    }
};

// intership create

export const asyncinternshipcreate = (internship) => async (dispatch, getStates) =>{
    try {
       await axios.post("/employe/internship/created",internship);
       console.log(internship);
    } catch (error) {
        console.log(error);
    }
};

export const asyncreadInternships = () => async (dispatch, getState) => {
    try {
        try {
            const { data } = await axios.get("/employe/internship/read");
            dispatch(saveinternship(data.internships));
            return data
        } catch (error) {
            console.log(error.response.data);
        }
    } catch (error) {
        console.log(error)
    }
};


// intership job

export const asyncjobcreate = (job) => async (dispatch, getStates) =>{
    try {
        await axios.post("/employe/job/created",job);
    } catch (error) {
        console.log(error);
    }
};


// Create Resume

// export const asyncresumecreate = (resume) => async (dispatch, getStates) =>{
//     try {
//         await axios.post("/resume/add-edu",resume);
//     } catch (error) {
//         console.log(error);
//     }
// };

export const asyncresumecreate = (resume) => async (dispatch, getStates) =>{
    try {
        await axios.post("/resume/create",resume);
    } catch (error) {
        console.log(error);
    }
};

export const asyncresumeupdate = (user) => async (dispatch, getStates) =>{
    try {
        await axios.post("/resume/update", user);
       dispatch(asyncresumeupdate(user));
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};
