import { PulseLoader } from "react-spinners";
import './Loading.css'

export default function Loading() {
    return (
        <div className="loading">
            <PulseLoader size={20} color="#000000" />
        </div>
    );
}
