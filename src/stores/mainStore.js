import {defineStore} from "pinia";
import {fetchWrapper} from "../helpers/fetch-wrapper.js";
import router from "@/router/router.js";



const baseURL = `http://localhost:5092`;

export const useMainStore = defineStore('main', {
    state: () => ({
        employees: {
            employeeStatistics: [],
            tasks: 0
        },
        employeeDetails: [],
        employeeLabors: [],
        innovationScores: {},
    }),

    actions: {
        async fetchEmployeeData() {
            try {
                this.employees = await fetchWrapper.get(`${baseURL}/api/main`, null);
            } catch (error) {
                this.errorMessage = error;

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }
        },

        getInnovationScore(employeeId) {
            return this.innovationScores[employeeId] ?? 75;
        },

        async fetchEmployeeGeneralData(employeeId) {
            try {
                this.employeeDetails = await fetchWrapper.get(`${baseURL}/api/employees/${employeeId}`, null);
            } catch (error) {
                this.errorMessage = error;
            }
        },
        async fetchEmployeeLaborActivity(employeeId) {
            try {
                this.employeeLabors = await fetchWrapper.get(`${baseURL}/api/employees/${employeeId}/activities`, null);
                console.log(this.employeeLabors)
            } catch (error) {
                this.errorMessage = error;
            }
        }

    }
})



