import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
    state: {
        isHome: false,
        blogList: {},
        blogDetails: {}
    },

    getters: {
        getDate() {
            let date = new Date();
            let month = date.getMonth();
            let year = date.getFullYear();
            let dd = date.getDate();
            let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[month] + " " + dd + ", " + year;
        }
    },
    mutations: {
        setHome(state) {
            state.isHome = true;
        },
        removeHome(state) {
            state.isHome = false;
        },
        getBlogs(state, payload) {
            state.blogList = payload;
        },
        getDetails(state, payload) {
            state.blogDetails = payload;
        }
    },
    actions: {
        getBlogs(context) {
            axios.get("https://webnethub.com/webnethub/api/pages").then((res) => {
                context.commit("getBlogs", res.data);
            })
        }
    },
    modules: {}
})