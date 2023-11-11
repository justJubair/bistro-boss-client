import PropTypes from "prop-types"
const CoverPage = ({ img, title, subTitle, textSize, height }) => {
  console.log(img,)
  return (
    <div style={{backgroundImage: `url(${img})`, height: height}}>
  
      <div className="flex z-40 justify-center items-center h-full text-center text-white">
        <div className="bg-black/60 w-9/12 py-24 space-y-4">
          <h1 style={{fontFamily: "Cinzel"}} className={`${textSize} font-extrabold uppercase`}>{title}</h1>
          <p style={{fontFamily: "Cinzel"}}>{subTitle} </p>
          
        </div>
       
      </div>
     
    </div>
  );
};

CoverPage.propTypes = {
    img:PropTypes.string,
    title:PropTypes.string,
    subTitle:PropTypes.string,
    textSize:PropTypes.string,
    height:PropTypes.string,
}
export default CoverPage;
