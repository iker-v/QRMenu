
import PreviewMenu from "../components/EditMenu/PreviewMenu";
import { EditMenuContextProvider } from "../state/context";
import EditMenuSection from "../components/EditMenu/EditMenuSection";

function EditMenu(){

    return(
        <div className="flex flex-col py-12 mx-auto max-w-4xl">
            <EditMenuContextProvider>
                <div className="flex items-start justify-start">
                    <EditMenuSection/>
                    <PreviewMenu />	
                </div>
            </EditMenuContextProvider>
	    </div>
    )
}

export default EditMenu