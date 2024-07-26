const useSignUp = () => {

    const signUP = async ({email, password, name}) => {
        
        const url = "http://localhost:3200/api/v1/auth/signup";
        const OPTIONS = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
            name,
            email,
            password,
        })
    };

        const res = await fetch(url, OPTIONS);
        const data = await res.json()
        console.log(data);
    };

    return {signUP};
};

export default useSignUp;
