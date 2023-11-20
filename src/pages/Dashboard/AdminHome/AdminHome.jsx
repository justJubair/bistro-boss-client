import Container from "../../../Shared/Container/Container";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth()
    return(
        <Container>
             <h2 className="text-2xl font-bold my-6"> HELLO, welcome back <span>{user?.displayName}</span> </h2>
        </Container>
    )}
export default AdminHome;