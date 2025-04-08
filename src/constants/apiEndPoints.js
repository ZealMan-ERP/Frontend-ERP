const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const API_ENDPOINTS = {
    poInwards: {
        getPendingWorkOrders: `${API_BASE_URL}/poInwards/pendingpos`,
        customerAcceptance: `${API_BASE_URL}/poInwards/customerAcceptance/fetchALL`,
        createPO: `${API_BASE_URL}/poInwards/create`,
    },
    rfq: {
        pendingRFQ: `${API_BASE_URL}/rfq/pending`,
        viewAllRFQ: `${API_BASE_URL}/rfq/all`,
        createRFQ: `${API_BASE_URL}/rfq/create`,
    },
    customer: {
        viewAllCustomers: `${API_BASE_URL}/customers/all`,
        createCustomer: `${API_BASE_URL}/customers/add`,
    },
    quotations: {
        viewAllQuotations: `${API_BASE_URL}/quotations/all`,
        approvedQuotations: `${API_BASE_URL}/quotations/approved`,
        rejectedQuotations: `${API_BASE_URL}/quotations/rejected`,
        createQuotation: `${API_BASE_URL}/quotations/create`,
    },
    employees: {
        recruit: `${API_BASE_URL}/employees/recruit`,
        layoff: `${API_BASE_URL}/employees/layoff`,
        viewAllEmployees: `${API_BASE_URL}/employees/all`,
    },
    company: {
        update: `${API_BASE_URL}/company/update`,
    },
};

export default API_ENDPOINTS;
