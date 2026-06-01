function UserTicket({ name, avatar, email }){

    return(
        <div className="user-ticket">
            <h1>{name}</h1>
            <img className="user-ticket-avatar" src={avatar} alt={name} />
            <p>{email}</p>
        </div>
    )

}

export default UserTicket;