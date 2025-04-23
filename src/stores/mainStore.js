import {defineStore} from "pinia";
import {fetchWrapper} from "../helpers/fetch-wrapper.js";
import router from "@/router/router.js";



const baseURL = `http://localhost:5092`;

export const useMainStore = defineStore('main', {
    state: () => ({
        employees: [],
        employeeDetails: []
    }),

    actions: {
        async fetchEmployees() {
            try {
                this.employees = await fetchWrapper.get(`${baseURL}/api/main`, null);
            } catch (error) {
                this.errorMessage = error;

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }
        },

        async fetchEmployeeDetails(employeeId) {
            try {
                this.employeeDetails = await fetchWrapper.get(`${baseURL}/api/employees/${employeeId}`, null);
            } catch (error) {
                this.errorMessage = error;
            }
        }
    }
})



