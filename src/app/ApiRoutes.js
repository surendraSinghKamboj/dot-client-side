import axios from "axios";

//get alluser
export const filterUsers = async (type, updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_ALL_USER}/${type}`)
        !response ?
            console.error("there is an error") :
            updater(response.data);
    } catch (error) {
        console.error(error);
    }
}

//delete user
export const deleteUsers = async (userId, updater) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_GET_USER_DELETE}/${userId}`)
        !response ?
            console.error("there is an error") :
            updater(response.data);
    } catch (error) {
        console.error(error);
    }
}


//counts user

export const countUsers = async (updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_USER_COUNT}`)

        !response ?
            console.error("there is an error") :
            updater(response.data.numbers);
        // updater(response.data.numbers);

    } catch (error) {
        console.error(error);
    }
}


//counts order

export const countOrder = async (updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_ORDER_COUNT}`)
        console.log(response, updater);
        !response ?
            console.error("there is an error") :
            updater(response.data.ordernumbers);

        // updater(response.data.numbers);
    } catch (error) {
        console.error(error);
    }
}



//counts product

export const countProduct = async (updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_PRODUCT_COUNT}`)
        !response ?
            console.error("there is an error") :
            updater(response.data.productnumbers);
        // updater(response.data.numbers);
    } catch (error) {
        console.error(error);
    }
}

//fetchOrder

export const fetchOrders = async (updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_USER_ORDER}`)
        !response ?
            console.error("there is an error") :
            updater(response.data);
    } catch (error) {
        console.error(error);
    }
}


//add products

export const addProduct = async (updater) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET_USER_PRODUCT}`)
        !response ?
            console.error("there is an error") :
            updater(response.data);
    } catch (error) {
        console.error(error);
    }
}


//login
export const userLogin = async (data) => {
    try {
        const response = await axios.post(`/api/v1/user/login`, {...data})
        !response ? console.error("login field") : console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

//signup
export const userSignup = async (data) => {
    try {
        const response = await axios.post(`/api/v1/user/register`, { ...data })
        !response ?
            console.error("there is an error, Signup Failed") :
            console.log(response);
    } catch (error) {
        console.error(error);
    }
}

//
// export const downloadInvoice = async (downloadPath) => {
//     try {
//       const response = await axios.get(downloadPath, {
//         responseType: 'blob',
//       });

//       if (response.status !== 200) {
//         throw new Error('Failed to download invoice.');
//       }

//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

export const downloadInvoice = async (orderId) => {
    try {
        const response = await axios.get(`http://localhost:4001/api/v1/invoice/download_Invoice/${orderId}`, {
            responseType: 'blob',
        });

        if (response.status === 200) {
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        } else {
            throw new Error('Failed to download invoice.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchOrderCount = async () => {
    try {
        const response = await fetch('http://localhost:4001/api/v1/orders/counts');
        if (response.ok) {
            const data = await response.json();
            return data.count; // Assuming the count is returned as 'count' property in the response data
        } else {
            throw new Error('Failed to fetch order count.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
