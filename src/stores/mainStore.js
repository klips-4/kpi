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
        periodKPI: [],
        employeeDetails: [],
        employeeLabors: [],
        innovationScores: {},
    }),

    actions: {
        async fetchEmployeeData(month=null, year=null) {
            try {
                this.employees = await fetchWrapper.get(`${baseURL}/api/main`, null);
            } catch (error) {
                this.errorMessage = error;

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }
        },

        async fetchEmployeePeriodKPI(month=null, year=null) {
            try {
                this. periodKPI = await fetchWrapper.get(`${baseURL}/api/main/kpi/period`, null);
            } catch (error) {
                this.errorMessage = error;
            }
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
            } catch (error) {
                this.errorMessage = error;
            }
        },

        async updateRationalization({id, value, month, year}) {
            try {
                const response = await fetchWrapper.put(`${baseURL}/api/main/${id}/update-rationalization`, {
                    EmployeeId: id,
                    RazionalizationScore: value.toString(),
                    month: month,
                    year: year

                })
            } catch (error) {
                console.error('Update error:', error);
                throw error;
            }
        }
    }
})



