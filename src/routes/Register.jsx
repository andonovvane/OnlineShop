import { useState } from "react";
import { api } from "../store/api";

export default function Register () {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/registration/", { email });
            console.log(res);
        } catch (error) {
            console.error(error);
            setError(error.message); // Set error state with error message
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} id="register-form">
            <input 
                type="email" 
                name="email"
                placeholder="eMail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
            <p>{error}</p> {/* Display error message */}
        </form>
    );
}
