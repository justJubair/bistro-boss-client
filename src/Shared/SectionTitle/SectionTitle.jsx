import PropTypes from "prop-types"
const SectionTitle = ({subHeading, heading}) => {
    return(
        <div className="text-center mt-16 mb-10">
             <p className="mb-2 italic text-[#D99904]"> ---{subHeading}---</p>
            <h3 className="text-2xl py-2 uppercase border-y-4 md:w-3/12 mx-auto">{heading}</h3>
        </div>
    )}

SectionTitle.propTypes = {
    subHeading:PropTypes.string,
    heading:PropTypes.string
}    
export default SectionTitle;