// Import libs
import { useEffect, useState } from 'react'
import axios from 'axios'
// Import config vars
import vars from '../configs/vars.js';

// Vars
const API_URL = vars.apiUrlBase.development + 'products'

const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( ()=>{
        axios(API_URL)
            .then(response => {
                setProducts(response.data)
            })
            .finally(() => {
                setIsLoading(!isLoading)
            })
    }, [])

    return {products, isLoading}
};

export default useGetProducts

