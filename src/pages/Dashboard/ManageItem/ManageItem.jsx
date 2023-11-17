import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useMenus from "../../../hooks/useMenus";
import ManageTabel from "./ManageTable";

const ManageItem = () => {
    const [menus, refetch] = useMenus()
    return(
        <Container>
            <SectionTitle heading="manage all items" subHeading="Hurry Up"/>
            <ManageTabel menus={menus} refetch={refetch}/>
        </Container>
    )}
export default ManageItem;