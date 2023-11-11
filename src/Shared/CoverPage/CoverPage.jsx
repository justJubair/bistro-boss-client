import PropTypes from "prop-types"
const CoverPage = ({ img, title, subTitle, textSize, height }) => {
  return (
    <div className={` h-[${height}] bg-cover bg-center bg-[url('${img}')]`}>
      <div className="flex justify-center items-center h-full text-center text-white">
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
