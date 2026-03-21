const Categories = ({user}) => {
    const {name,email,domain} = user;
    return(
        <li className="my-list p-3 shadow w-50 rounded-lg text-red-50">
            <div className="profile">
                <h1>{name[0]}</h1>
            </div>

            <div className="my-content border-left border-danger ml-3 p-3">
                <h3>{name}</h3>
                <b>Email : {email}</b>
                <br />
                <span> Domain : {domain}</span>
            </div>
        </li>

    )
}
export default Categories;