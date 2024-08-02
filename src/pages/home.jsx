import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiGET, apiPOST } from '../utilities/apiHelpers'
import { setCartCount } from '../redux/users/users'
import { API_URL } from '../config'
import CustomLoader from '../components/Loader/CustomLoader'
import { toast } from 'react-toastify'

const Home = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.user?.userData?.id) || '';
  const [stepperProgressCartData, setStepperProgressCartData] = useState([]);
  const [kidenyTopRatedData, setKidenyTopRatedData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [productsBasedOnCategoriesData, setProductsBasedOnCategoriesData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [kidneyMedicinesData, setKidneyMedicinesData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [globalConfig, setGlobalConfig] = useState([]);

  const getUserStepperProgress = async () => {
    if (userId) {
      try {
        const stepperResponse = await apiGET(`${API_URL}/v1/stepper-progress/user-stepper-progress/${userId}`)
        setStepperProgressCartData(stepperResponse.data?.data);
        dispatch(setCartCount(stepperResponse.data?.data?.cartData.length));
      } catch (error) {
        console.log("Error fetching cart details", error);
      }
    }
  }

  const fetchKidenyTopRatedData = async () => {
    try {
      const response = await apiGET(`${API_URL}/v1/product/getTopRatedProducts`);
      setKidenyTopRatedData(response.data.data.product);
      console.log(response)
      // setLoading(false)
    } catch (error) {
      console.error('Error fetching top-rated products:', error);
      // setLoading(false)
    }
  };

  const fetchBrandData = async () => {
    // setLoading(true);
    try {
      const payload = {
        "page": 1,
        "limit": 10,
        "searchQuery": ""
      }
      const response = await apiPOST(`${API_URL}/v1/brand/all`, payload);
      setBrandData(response?.data?.data?.brands);
      // setLoading(false);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  const fetchProductsBasedOnCategories = async () => {
    try {
      const response = await apiGET(`${API_URL}/v1/product/getProductsBasedOnCategories`);
      if (response.data.status) {
        setProductsBasedOnCategoriesData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchBannerData = async () => {
    try {
      console.log('33')
      const response = await apiGET(`${API_URL}/v1/bannerImg/get-all-banner-img`);
      setBannerData(response.data.data.data);
      console.log("dffgfgfdgs", response)
    } catch (err) {
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchKidneyMedicinesData = async () => {
    // setLoading(true)
    try {
      const payload = {
        "sortIndex": "",
        "limit": 8,
        "page": 1
      };
      const response = await apiPOST(`${API_URL}/v1/product/getAllProducts`, payload);
      console.log("response>>>", response)
      if (response?.data?.status) {
        setKidneyMedicinesData(response?.data?.data?.product);
        // setLoading(false);
      } else {
        console.error("Something went wrong");
        // setLoading(false)
      }
    } catch (error) {
      console.error("Something went wrong", error);
      // setLoading(false)
    }
  };

  const fetchGlobalConfig = async () => {
    try {
      const response = await apiGET(`/v1/global-config/get-config`);
      if (response.status) {
        console.log(response?.data?.data?.data[0]);
        setGlobalConfig(response?.data?.data?.data[0]);
      } else {
        toast.error('Error fetching global config')
      }
    } catch (error) {
      toast.error('Error', error)
    }
  }

  const fetchAllData = async () => {
    setIsLoading(true);
    await Promise.all([
      getUserStepperProgress(),
      fetchGlobalConfig(),
      fetchKidenyTopRatedData(),
      fetchBrandData(),
      fetchProductsBasedOnCategories(),
      fetchBannerData(),
      fetchKidneyMedicinesData()
    ]);
    setIsLoading(false);
  };

  useEffect(() => {
    // fetchAllData()
  }, [])
  return (
    <div className=' '>
      <div className='container mx-auto px-4'>
        {/* <MainSlider /> */}
        {loading ? <div className='mt-20'><CustomLoader height='h-10' width='w-10' /></div> : <>
          Home Page
          {/* <KidenyTopRated products={kidenyTopRatedData} globalConfig={globalConfig} stepperProgressCartData={stepperProgressCartData} setStepperProgressCartData={setStepperProgressCartData} /> */}
          {/* <Brand brands={brandData} /> */}
          {/* <TopUnaniKidneyCareRated data={productsBasedOnCategoriesData} globalConfig={globalConfig} stepperProgressCartData={stepperProgressCartData} setStepperProgressCartData={setStepperProgressCartData} /> */}
          {/* <Banner bannerImages={bannerData} /> */}
          {/* <KidneyMedicines products={kidneyMedicinesData} globalConfig={globalConfig} stepperProgressCartData={stepperProgressCartData} setStepperProgressCartData={setStepperProgressCartData} /> */}
        </>}
      </div>
    </div>
  )
}

export default Home
