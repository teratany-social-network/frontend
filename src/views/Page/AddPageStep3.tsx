import { CheckboxButton } from "../../components/CategoryCheckbox";
import TopBar from "../../components/common/TopBar";

const AddPageStep3: React.FC = () => {
    return (
        <>
            <TopBar text="Select your categories" />

            <div className=" mt-16 0 flex items-center p-4 w-full flex-col">
                <div className="flex flex-wrap mb-8">
                    <CheckboxButton text="No poverty" />
                    <CheckboxButton text="Zero hunger" />
                    <CheckboxButton text="Good health and well-being" />
                    <CheckboxButton text="Quality education" />
                    <CheckboxButton text="Gender equality" />
                    <CheckboxButton text="Clear water and sanitation" />
                    <CheckboxButton text="Affordable and clean energy" />
                    <CheckboxButton text="Decent work and growth" />
                    <CheckboxButton text="Industry, innovation and infrastructure" />
                    <CheckboxButton text="Reduce inequalities" />
                    <CheckboxButton text="Sustainable cities and communities" />
                    <CheckboxButton text="Responsable consumption and production" />
                    <CheckboxButton text="Climate action" />
                    <CheckboxButton text="Life below water" />
                    <CheckboxButton text="Life on land" />
                    <CheckboxButton text="Peace, justice" />
                    <CheckboxButton text="Partenerships for other goals" />
                </div>

                <button className="bg-black text-white py-3 rounded-md w-full">
                    Finish
                </button>
            </div>

        </>
    )
}

export default AddPageStep3