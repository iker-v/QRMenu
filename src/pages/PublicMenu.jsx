import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MenuHeader } from "../components/PublicMenu/MenuHeader";
import { MenuCategories } from "../components/PublicMenu/MenuCategories";
import { MenuProducts } from "../components/PublicMenu/MenuProducts";
import { MenuLoading } from "../components/PublicMenu/MenuLoading";
import { MenuNotFound } from "../components/PublicMenu/MenuNotFound";
import { getMenuPublic } from "../api/getMenu";

function PublicMenu(){

    const [menuList, setMenuList] = useState([])
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(false)
    const {publictoken} = useParams()


    useEffect(()=> {

        setLoading(true)
        getMenuPublic(`${publictoken}`).then((data) => {

            setMenuList(JSON.parse(data['menu']))
            setInfo(JSON.parse(data['restaurant_info']))
            
        }).catch(error => {
            console.log(error)
        }).finally(() => setLoading(false))

    }, [] )

    if (loading) {<MenuLoading/>}

    if (menuList.length === 0){ <MenuNotFound/> }

    return (
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            <MenuHeader info={info} />
            <MenuCategories menuList={menuList} />
            <MenuProducts menuList={menuList}/>
        </div>
    )
}

export default PublicMenu