import { ref } from "vue"
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/Auth'
import AuthService from "@/services/AuthService.js";
import { getError } from "@/utils/helpers.js";

export function useLogin() {
  const router = useRouter();
  const auth =  useAuthStore()
  const error = ref(null)
  const sending = ref(false)

  const login = async (form) => {
    const payload = {
      email: form.email,
      password: form.password,
    }
    error.value = null;
    try {
      sending.value = true;
      await AuthService.login(payload);
      const authUser = await auth.getAuthUser();
      if (authUser) {
        auth.setGuest({ value: "isNotGuest" });
        await router.push("/dashboard");
      } else {
        const err = Error(
          "Unable to fetch user after login, check your API settings."
        );
        err.name = "Fetch User";
        throw err;
      }
    } catch (err) {
      error.value = getError(err);
    } finally {
      sending.value = false;
    }
  }

  return {
    login,    
    sending,
    error
  }
}
