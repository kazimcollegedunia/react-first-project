const card = (porap) => {
    let user = porap.data;
    const statusColor = user.status === "active" ? "green" : "red";
    return <div className="main-card">
                <div className="image-card">
                    <img src={user.profile_image} alt="User Avatar" />
                </div>
                <div className="user-info">
                    <h2>{user.name}</h2>
                    <div>
                        <p>{user.rating}</p>
                        <p>{user.performance}</p>
                        <p>{user.location}</p>
                    </div>
                    <div>
                        <p style={{color:statusColor}}>{user.status }</p>
                        <p className="invite">invite</p>
                    </div>
                </div>
            </div>
}

export default card;