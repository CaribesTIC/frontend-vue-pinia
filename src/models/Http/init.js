import { useAuthStore } from '@/stores/Auth'

export default {  
  baseURL: import.meta.env.VUE_APP_API_URL,
  withCredentials: true,
  customHeaders: null,
  customParams: null,
  handleSuccess: () => {},
  handleError(error) {  
    const storeAuth = useAuthStore()

    if (error.response
      && [401, 419].includes(error.response.status)    
      && storeAuth.authUser
      && !storeAuth.guest
    ) {
      storeAuth.logout();
    }
    
    return Promise.reject(error);
  }
}
