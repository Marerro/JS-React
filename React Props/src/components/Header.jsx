function Header({username, tag, location, avatar, stats, views,}) {

  return (
    <>
    <div className="w-8/12 m-auto">
        <div className="bg-cyan-600	container_body m-auto ">
            <figure><img className="rounded-full m-auto border-solid border-2 border-black" src={avatar} alt="bop" /></figure>
            <div className="card_top"><h1 className="text-center text-black">{username}</h1>
            <h1 className="text-neutral-950 text-center p-0">@{tag}</h1>
            <h2 className="text-center text-neutral-950 pb-5">{location}</h2>
            </div>
            <div className="bg-fuchsia-500 grid place-content-center grid-cols-3 content-center h-20 justify-items-center container_footer">
                <div className="w-full border-r border-black flex flex-col justify-center items-center p-4 first_box">
                    <h2 className="text-center"><span className="text-white">Followers:</span><br></br>{stats}</h2>
                </div>
                <div className="w-full border-r border-black flex flex-col justify-center items-center p-4 first_box">
                <h2 className="text-center"><span className="text-white">Views:</span><br></br>{views}</h2>
                </div>
                <div className="w-full border-r border-black flex flex-col justify-center items-center p-4 first_box">
                <h2 className="text-center"><span className="text-white">Likes:</span><br></br>{views}</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;