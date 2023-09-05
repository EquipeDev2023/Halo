import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { AiOutlineDashboard, AiOutlineFileText, AiOutlineSolution, AiOutlineUser, AiOutlineDesktop, AiOutlineInfoCircle, AiOutlineUnlock, AiOutlineTag, AiOutlineUnorderedList, AiOutlineVerticalAlignBottom, AiOutlineSwap, AiOutlineFileDone, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineDatabase, AiOutlineCreditCard, AiOutlineCalculator, AiOutlineContacts } from "react-icons/ai"
import { Link } from 'react-router-dom'


const LeftSidebar = ({ collapsed }: any) => {


    return (
        <Sidebar collapsed={collapsed}
            transitionDuration={800} style={{ height: "100vh" }}>

            <Menu>
                <MenuItem icon={<AiOutlineDashboard />} component={<Link to="/"/>}>Tableau de bord</MenuItem>

                <SubMenu icon={<AiOutlineContacts />} label="Client">
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="customer"/>}> Liste</MenuItem>
                    <MenuItem icon={<AiOutlineSolution />} component={<Link to="customer/invoice"/>}> Facture</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="customer/payment"/>}> Paiement</MenuItem>
                </SubMenu>
                <SubMenu icon={<AiOutlineContacts />} label="Fournisseur">
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="supplier"/>}> Liste</MenuItem>
                    <MenuItem icon={<AiOutlineSolution />} component={<Link to="supplier/invoice"/>}> Facture</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="supplier/payment"/>}> Paiement</MenuItem>
                </SubMenu>

                <MenuItem icon={<AiOutlineFileText />} component={<Link to="article"/>}> Article</MenuItem>

                <SubMenu icon={<AiOutlineShoppingCart />} label="Vente">
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="sale"/>}> Commande</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="sale/delivery"/>}> Livraison</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="sale/invoice"/>}> Facture</MenuItem>
                </SubMenu>

                <SubMenu icon={<AiOutlineShoppingCart />} label="Achat">
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="puchase"/>}> Commande</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="purchase/reception"/>}> Réception</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="purchase/facture"/>}> Facture</MenuItem>
                </SubMenu>

                <SubMenu icon={<AiOutlineDatabase />} label="Stock">
                    <MenuItem icon={<AiOutlineSwap />} component={<Link to="stock"/>}> Mouvement</MenuItem>
                    <MenuItem icon={<AiOutlineVerticalAlignBottom />} component={<Link to="stock/approvisionnement"/>}> Approvisionnement</MenuItem>
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="stock/inventaire"/>}> Inventaire</MenuItem>
                </SubMenu>

                <SubMenu icon={<AiOutlineDesktop />} label="Caisse">
                    <MenuItem icon={<AiOutlineDesktop />} component={<Link to="caisse"/>}> Caisse</MenuItem>
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="caisse/registre"/>}> Registre</MenuItem>
                </SubMenu>
                <SubMenu icon={<AiOutlineSetting />} label="Configuration">
                    <MenuItem icon={<AiOutlineInfoCircle />} component={<Link to="configuration"/>}> Général</MenuItem>
                    <MenuItem icon={<AiOutlineUser />} component={<Link to="configuration/user"/>}> Utilisateur</MenuItem>
                    <MenuItem icon={<AiOutlineUnlock /> } component={<Link to="configuration/permission"/>}> Droit & Permission</MenuItem>
                    <MenuItem icon={<AiOutlineCalculator />} component={<Link to="configuration/unit"/>}> Unité</MenuItem>
                    <MenuItem icon={<AiOutlineTag />} component={<Link to="configuration/itemfamily"/>}> Famille</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="configuration/paiement"/>}> Mode de paiement</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}
export default LeftSidebar