
import PreviewMenu from "../components/EditMenu/PreviewMenu";
import { EditMenuContextProvider } from "../state/context";
import EditMenuIndex from "../components/EditMenu/EditMenuIndex";

function EditMenu(){

    return(
        <div className="flex flex-col py-12 mx-auto max-w-4xl">
            <EditMenuContextProvider>
                <div className="flex items-start justify-start">
                    <EditMenuIndex/>
                    <PreviewMenu />	
                </div>
            </EditMenuContextProvider>
	    </div>
    )
}

export default EditMenu