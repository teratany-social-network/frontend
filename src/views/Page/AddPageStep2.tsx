import Button from "../../components/common/Button";
import MapContainerForm from "../../components/MapContainer";
import { InfoModal } from "../../components/InfoModal";
import { useNavigate } from "react-router-dom";

const AddPageStep2: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <MapContainerForm className="w-full h-screen">
            </MapContainerForm>
            <div className="fixed bottom-0 z-1000 flex items-center p-4 w-full">
                <button className="bg-black text-white py-3 rounded-md w-full" onClick={() => navigate('/add-page/step-3')}>
                    Save my position
                </button>
            </div>
            <InfoModal title="Select you position" text=" Enter the location of your organization by selecting it on the following interactive map. Organizations registering on our platform are required to be transparent. Your data will be used solely to inform users interested in your organization about your location and will not be used for advertising purposes." />
        </>
    )
}

export default AddPageStep2