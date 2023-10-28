import Button from "../../components/common/Button";
import MapContainerForm from "../../components/MapContainer";

const AddPageStep2: React.FC = () => {
    return (
        <>
            <MapContainerForm className="w-full h-screen">
            </MapContainerForm>
            <div className="fixed bottom-0 z-1000 flex items-center p-4 w-full">
                <button className="bg-black text-white py-3 rounded-md w-full">
                    Save my position
                </button>
            </div>
        </>
    )
}

export default AddPageStep2