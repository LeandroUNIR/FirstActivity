const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            <h2>Perfil</h2>
            <p>Email: {user?.email}</p>

            <h3>Últimos pedidos</h3>
            <p>Aún no hay pedidos</p>
        </div>
    );
};

export default Profile;