import {defineStore} from "pinia";
import {fetchWrapper} from "../helpers/fetch-wrapper.js";
import router from "@/router/router.js";

// const baseURL = `http://81.30.200.39:780`;

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
                this.employees = await fetchWrapper.get(`/api/main`, null);
            } catch (error) {
                this.errorMessage = error;

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }
        },

        async fetchEmployeePeriodKPI(month=null, year=null) {
            try {
                this. periodKPI = await fetchWrapper.get(`/api/main/kpi/period`, null);
            } catch (error) {
                this.errorMessage = error;
            }
        },

        async fetchEmployeeGeneralData(employeeId) {
            try {
                this.employeeDetails = await fetchWrapper.get(`/api/employees/${employeeId}`, null);
            } catch (error) {
                this.errorMessage = error;
            }
        },
        async fetchEmployeeLaborActivity(employeeId) {
            try {
                this.employeeLabors = await fetchWrapper.get(`/api/employees/${employeeId}/activities`, null);
            } catch (error) {
                this.errorMessage = error;
            }
        },

        async updateRationalization({id, value, month, year}) {
            try {

                const response = await fetchWrapper.put(`/api/main/${id}/update-rationalization`, {
                    EmployeeId: id,
                    RazionalizationScore: value,
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



