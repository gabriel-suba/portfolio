/* eslint-disable react/prop-types */

const Image = ({ url, alt }) => {
  return <img src={url} alt={alt} className="w-full h-full" />;
};

export default Image;
