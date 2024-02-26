

const Helmet = (props)=>{
    document.title = "Digital Shop - " + props.title;
    return<div className="w-100">
            {props.children}
        </div>;
}

export default Helmet