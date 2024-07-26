import { useContext } from "react";
import AppContext from "../context/appContext";

const useLogIn = () => {

    const {appLogin} = useContext(AppContext)

    const logIn = async ({ email, password }) => {

        try {

            const url = "http://localhost:3200/api/v1/auth/login";
            const OPTIONS = {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
            const res = await fetch(url, OPTIONS);
            const data = await res.json()

            if (data.status === "success") {
                appLogin(data.data.user)
                localStorage.setItem("authorization", data.data.token)
                // alert("Logged In")
            }
            else {
                alert("Error:", data.message)
            }
        }

        catch (error) {
            alert(error.message)
        }
    }

    return { logIn };

}

export default useLogIn;