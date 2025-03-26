import { useNavigate } from "react-router";

function GoBackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>⬅ Back</button>
    );
}

export default GoBackButton;