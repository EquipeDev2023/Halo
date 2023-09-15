import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { AiOutlineDashboard, AiOutlineFileText, AiOutlineUser,  AiOutlineTag, AiOutlineUnorderedList, AiOutlineVerticalAlignBottom, AiOutlineSwap, AiOutlineFileDone, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineDatabase, AiOutlineCreditCard, AiOutlineCalculator, AiOutlineContacts } from "react-icons/ai"
import { Link } from 'react-router-dom'


const LeftSidebar = ({ collapsed }: any) => {


    return (
        <Sidebar collapsed={collapsed}
            transitionDuration={800} style={{ height: "100vh" }}>

            <Menu>
                <MenuItem icon={<AiOutlineDashboard />} component={<Link to="/"/>}>Tableau de bord</MenuItem>

                <MenuItem icon={<AiOutlineContacts />} component={<Link to="partner"/>}>Partenaire</MenuItem>

                <MenuItem icon={<AiOutlineFileText />} component={<Link to="article"/>}> Article</MenuItem>

                <SubMenu icon={<AiOutlineShoppingCart />} label="Document">
                
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="order"/>}> Commande</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="shipment"/>}> Expédition</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="invoice"/>}> Facture</MenuItem>
                </SubMenu>

                
                <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="payment"/>}> Paiement</MenuItem>

                <SubMenu icon={<AiOutlineDatabase />} label="Stock">
                    <MenuItem icon={<AiOutlineSwap />} component={<Link to="mouvement"/>}> Mouvement</MenuItem>
                    <MenuItem icon={<AiOutlineVerticalAlignBottom />} component={<Link to="approvisionnement"/>}> Approvisionnement</MenuItem>
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="inventaire"/>}> Inventaire</MenuItem>
                </SubMenu>

                <SubMenu icon={<AiOutlineSetting />} label="Configuration">
                    <MenuItem icon={<AiOutlineUser />} component={<Link to="user"/>}> Utilisateur</MenuItem>
                    <MenuItem icon={<AiOutlineCalculator />} component={<Link to="unit"/>}> Unité</MenuItem>
                    <MenuItem icon={<AiOutlineTag />} component={<Link to="itemCategory"/>}> Famille</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="paymentMode"/>}> Mode de paiement</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}
export default LeftSidebar