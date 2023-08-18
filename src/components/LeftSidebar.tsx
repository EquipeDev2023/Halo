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
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="client"/>}> Liste</MenuItem>
                    <MenuItem icon={<AiOutlineSolution />} component={<Link to="client/facture"/>}> Facture</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="client/paiement"/>}> Paiement</MenuItem>
                </SubMenu>
                <SubMenu icon={<AiOutlineContacts />} label="Fournisseur">
                    <MenuItem icon={<AiOutlineUnorderedList />} component={<Link to="fournisseur"/>}> Liste</MenuItem>
                    <MenuItem icon={<AiOutlineSolution />} component={<Link to="fournisseur/paiement"/>}> Facture</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="fournisseur/paiement"/>}> Paiement</MenuItem>
                </SubMenu>

                <MenuItem icon={<AiOutlineFileText />} component={<Link to="article"/>}> Article</MenuItem>

                <SubMenu icon={<AiOutlineShoppingCart />} label="Vente">
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="vente/devis"/>}> Devis</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="vente/commande"/>}> Commande</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="vente/livraison"/>}> Livraison</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="vente/facture"/>}> Facture</MenuItem>
                </SubMenu>

                <SubMenu icon={<AiOutlineShoppingCart />} label="Achat">
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="achat/commande"/>}> Commande</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="achat/reception"/>}> Réception</MenuItem>
                    <MenuItem icon={<AiOutlineFileDone />} component={<Link to="achat/facture"/>}> Facture</MenuItem>
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
                    <MenuItem icon={<AiOutlineInfoCircle />} component={<Link to="config"/>}> Général</MenuItem>
                    <MenuItem icon={<AiOutlineUser />} component={<Link to="config/user"/>}> Utilisateur</MenuItem>
                    <MenuItem icon={<AiOutlineUnlock /> } component={<Link to="config/permission"/>}> Droit & Permission</MenuItem>
                    <MenuItem icon={<AiOutlineCalculator />} component={<Link to="config/unite"/>}> Unité</MenuItem>
                    <MenuItem icon={<AiOutlineTag />} component={<Link to="config/famille"/>}> Famille</MenuItem>
                    <MenuItem icon={<AiOutlineCreditCard />} component={<Link to="config/paiement"/>}> Mode de paiement</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}
export default LeftSidebar