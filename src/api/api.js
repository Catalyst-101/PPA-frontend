import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// ========== CONTACT ROUTES ==========
export const submitContact = async (contactData) => {
    return API.post("/contact/add", contactData);
};

export const getContacts = async () => {
    return API.get("/contact/get");
};

export const markContactSeen = async (id) => {
    return API.put(`/contact/seen/${id}`);
};

export const deleteContact = async (id) => {
    return API.delete(`/contact/delete/${id}`);
};

// ========== FAQ ROUTES ==========
export const getFAQs = async () => {
    return API.get("/faq/get");
};

export const addFAQ = async (faqData) => {
    return API.post("/faq/add", faqData);
};

export const updateFAQ = async (id, faqData) => {
    return API.put(`/faq/update/${id}`, faqData);
};

export const deleteFAQ = async (id) => {
    return API.delete(`/faq/delete/${id}`);
};

// ========== FEE STRUCTURE ROUTES ==========
export const addFeeStructure = async (feeData) => {
    return API.post("/fee-structures/add", feeData);
};

export const getFeeStructures = async () => {
    return API.get("/fee-structures/get");
};

export const updateFeeStructure = async (id, feeData) => {
    return API.put(`/fee-structures/update/${id}`, feeData);
};

// ========== TRANSPORT ROUTES ==========
export const addTransport = async (transportData) => {
    return API.post("/transports/add", transportData);
};

export const getTransports = async () => {
    return API.get("/transports/get");
};

export const updateTransport = async (id, transportData) => {
    return API.put(`/transports/update/${id}`, transportData);
};

// ========== MEDIA ROUTES ==========
export const getAllMedia = async () => {
    return API.get("/media/all");
};

export const updateMedia = async (formData) => {
    return API.put("/media/update", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

export const deleteMediaField = async (field) => {
    return API.delete(`/media/${field}`);
};

export const deleteAllMedia = async () => {
    return API.delete("/media/all");
};

export default API;