const Navbar = () => {
    return (
        <>
            <div className="w-full h-20 bg-primary text-primary-text sticky shadow-lg">
                <div className="h-full mx-3 flex justify-between items-center">
                    <div className="text-5xl">Spidi.</div>
                    <div className="flex">
                        <p className="mx-2 p-4">Gujarat</p>
                        <p className="mx-2 p-4">Persia</p>
                        <p className="mx-2 p-4">India</p>
                        <p className="mx-2 p-4">China</p>
                    </div>
                    <div className="">About Our</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;