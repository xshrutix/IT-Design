const responsiveDarkCard = ({ img, title, text }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100 shadow" src={img} />
                </div>
                <div className="col-lg-6">
                    <div className="p-5 mt-4">
                        <h1 className="display-4">{title}</h1>
                        <p className="lead">{text}</p>
                        <a href="#" className="btn btn-outline-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default responsiveDarkCard;
