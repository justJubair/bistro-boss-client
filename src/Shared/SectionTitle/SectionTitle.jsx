import PropTypes from "prop-types"
const SectionTitle = ({subHeading, heading, textColor}) => {
    return(
        <div className="text-center mt-16">
             <p className="mb-2 italic text-[#D99904]"> ---{subHeading}---</p>
            <h3 style={{color: textColor}} className="text-2xl py-2 uppercase border-y-4 md:w-4/12 mx-auto">{heading}</h3>
        </div>
    )}

SectionTitle.propTypes = {
    subHeading:PropTypes.string,
    heading:PropTypes.string,
    textColor:PropTypes.string,
}    
export default SectionTitle;