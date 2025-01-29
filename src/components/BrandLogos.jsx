import React from 'react';

const BrandLogos = ({ className = '' }) => {
    const logos = [
        {
            src: 'https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqB8',
            alt: 'Versace',
            width: 220,
            height: 44
        },
        {
            src: 'https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqB9',
            alt: 'Zara',
            width: 120,
            height: 50
        },
        {
            src: 'https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqB-',
            alt: 'Gucci',
            width: 206,
            height: 48
        },
        {
            src: 'https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqB_',
            alt: 'Prada',
            width: 256,
            height: 42
        },
        {
            src: 'https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqCA',
            alt: 'Calvin Klein',
            width: 274,
            height: 44
        }
    ];

    return (
        <div className={`w-full bg-white py-[50px] px-[20px] relative md:absolute top-[100%] ${className}`}>
            <div className="max-w-full mx-auto">
                <div className="flex justify-between items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

BrandLogos.defaultProps = {
    className: ''
};

export default BrandLogos;

