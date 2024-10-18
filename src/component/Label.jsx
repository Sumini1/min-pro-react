import React from 'react';

const Label = (props) => {
    const {
      children,
      htmlFor = "",
      variant = "block mb-2 text-sm font-medium text-white",
    } = props;
    return (
        <div>
            <label
                htmlFor={htmlFor}
                className={`${variant} text-white font-semibold w-[200px]`}
            >
                {children}
            </label>
            
        </div>
    );
};

export default Label;