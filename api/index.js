import axios from "axios";

const baseUrl = "e-learning-platform-nextjss.vercel.app/api";

const getTeams = async () => {
    try {
        const res = await axios.get(`${baseUrl}/teams`);
        return res.data;
    } catch (error) {
        return { status: error };
    }
};

const getTeam= async () => {
    try {
        const res = await axios.get(`${baseUrl}/teams}`);
        return res.data;
    } catch (error) {
        return { status: error };
    }
};

export {getTeam, getTeams};